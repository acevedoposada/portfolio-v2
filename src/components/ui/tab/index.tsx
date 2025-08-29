"use client";
import { SyntheticEvent, useMemo } from 'react';

import { cn } from '@/utils/cn';

import { Chip } from '../chip';
import styles from './tab.module.scss';

export interface TabProps {
  label: string;
  value?: string | number;
  disabled?: boolean;
  selected?: boolean;
  badge?: number;
  onChange?: (event: SyntheticEvent, value: string | number) => void;
  onClick?: (event: SyntheticEvent) => void;
}

function Tab({ label, selected, onChange, onClick, value, badge }: TabProps): JSX.Element {

  const handleClick = (event: SyntheticEvent) => {
    if (!selected && onChange) onChange(event, value!);
    if (onClick) onClick(event);
  }

  const selectedClass = useMemo(() => cn(
    selected ? 'opacity-100' : 'opacity-50',
    'transition-opacity duration-500 ease-in-out'
  ), [selected])

  return (
    <button
      className={cn(
        styles.tab,
        selected && styles['tab--selected'],
        
      )}
      onClick={handleClick}
    >
      {label}
      {badge && (
        <Chip
          className={selectedClass}
          variant='tonal'
          color={selected ? "default" : undefined}
          size='sm'
        >
          {badge}
        </Chip>
      )}
    </button>
  )
}

Tab.displayName = 'Tab';

export default Tab;