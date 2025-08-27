"use client";
import {
  Children,
  cloneElement,
  CSSProperties,
  forwardRef,
  isValidElement,
  ReactNode,
  SyntheticEvent,
  useEffect,
  useRef,
  useState
} from "react";

import useEventCallback from "@/hooks/event-callback";
import ownerWindow from "@/utils/owner-window";
import debounce from "@/utils/debounce";

import styles from './tabs.module.scss';

interface TabsProps {
  children?: ReactNode;
  value?: number | string | boolean;
  onChange?: (event: SyntheticEvent, value: number | string) => void;
}

const defaultIndicatorStyle = {};

let warnedOnceTabPresent = false;

const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs({ children: childrenProp, value, onChange }: TabsProps, ref) {
  const [mounted, setMounted] = useState(false);
  const [indicatorStyles, setIndicatorStyles] = useState<CSSProperties>(defaultIndicatorStyle)
  
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const valueToIndex = new Map();

  const handleChange = (event: SyntheticEvent, value: number | string) => {
    onChange?.(event, value);
    const target = event.currentTarget || event.target;
    const properties = target.getBoundingClientRect();
    setIndicatorStyles({
      width: properties.width,
      left: properties.left
    })
  }

  const getTabsMeta = () => {
    const tabsNode = tabsRef.current;
    let tabsMeta: any;
    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();
      tabsMeta = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
      };
    }

    let tabMeta: any | null = null;
    if (tabsNode && value !== false && tabListRef.current) {
      const children = tabListRef.current.children;
      if (children.length > 0) {
        const tab = children[valueToIndex.get(value)] as HTMLButtonElement;
        tabMeta = tab ? tab.getBoundingClientRect() : null;

        if (
          process.env.NODE_ENV !== 'test' &&
          !warnedOnceTabPresent &&
          tabMeta &&
          tabMeta.width === 0 &&
          tabMeta.height === 0 &&
          tabsMeta?.clientWidth !== 0 
        ) {
          tabsMeta = null;
          warnedOnceTabPresent = true;
        }
      }
    }
    return { tabsMeta, tabMeta }
  }

  const updateIndicatorStyle = useEventCallback(() => {
    const { tabMeta, tabsMeta } = getTabsMeta();
    const startIndicator = 'left';
    const startValue = 1 * (tabMeta?.[startIndicator] - tabsMeta?.[startIndicator] + tabsMeta?.scrollLeft);
    const size = 'width';

    const newIndicatorStyle = {
      [startIndicator]: startValue,
      [size]: tabMeta ? tabMeta[size] : 0,
    }

    if (
      typeof indicatorStyles[startIndicator] !== 'number' ||
      typeof indicatorStyles[size] !== 'number'
    ) {
      setIndicatorStyles(newIndicatorStyle);
    } else {
      const dStart = Math.abs(indicatorStyles[startIndicator] - newIndicatorStyle[startIndicator]);
      const dSize = Math.abs(indicatorStyles[size] - newIndicatorStyle[size]);
      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyles(newIndicatorStyle);
      }
    }
  })

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (tabsRef.current) updateIndicatorStyle();
    });

    let resizeObserver: ResizeObserver;

    const handleMutation: MutationCallback = (records) => {
      records.forEach((record) => {
        record.removedNodes.forEach((item) => {
          resizeObserver?.unobserve(item as Element);
        });
        record.addedNodes.forEach((item) => {
          resizeObserver?.observe(item as Element);
        });
      });
      handleResize();
    };

    const win = ownerWindow(tabsRef.current as Node);
    win.addEventListener('resize', handleResize);

    let mutationObserver;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabListRef.current!.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    }

    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(handleMutation);
      mutationObserver.observe(tabListRef.current!, {
        childList: true,
      });
    }

    return () => {
      handleResize.clear();
      win.removeEventListener('resize', handleResize);
      resizeObserver?.disconnect();
    };
  }, [updateIndicatorStyle]);

  useEffect(() => {
    updateIndicatorStyle();
  });
  
  let childIndex = 0;
  const children = Children.map(childrenProp, (child) => {
    if (!isValidElement(child)) {
      return null;
    }

    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;

    childIndex += 1;
    return cloneElement(child, {
      selected,
      value: childValue,
      onChange: handleChange
    })
  });

  return (
    <div ref={ref} className={styles.tabs}>
      <div ref={tabsRef} className={styles.tabs__scroller}>
        <div ref={tabListRef} className={styles.tabs__list}>
          {children}
        </div>
        {mounted && (
          <span
            className={styles.tabs__indicator}
            style={{ ...indicatorStyles }}
          />
        )}
      </div>
    </div>
  )
})

Tabs.displayName = 'Tabs';

export default Tabs;