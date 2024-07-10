import { IconCode, IconCodeDots } from "@tabler/icons-react";
import clsx from "clsx";

export default function InfiniteSlider({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const iconClassName = "w-12 h-12 md:w-24 md:h-24";

  return (
    <div
      className={clsx(
        "inline-flex w-full flex-nowrap py-4 [mask-image:_linear-gradient(to_right,transparent_0,_black_20%,_black_80%,transparent_100%)]",
        className,
      )}
    >
      {[1, 2].map((repetition) => (
        <ul
          key={repetition}
          className="flex animate-infinite-scroll items-center justify-center font-lora font-extrabold md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-16 whitespace-nowrap text-5xl leading-none text-transparent [-webkit-text-stroke-color:white] [-webkit-text-stroke-width:1px] md:text-[7rem]"
            >
              {item}{" "}
              {idx % 2 === 0 ? (
                <IconCodeDots
                  className={clsx("text-indigo-500", iconClassName)}
                  strokeWidth={1.5}
                />
              ) : (
                <IconCode
                  className={clsx("text-purple-500", iconClassName)}
                  strokeWidth={1.5}
                />
              )}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
