import { FC, PropsWithChildren, ReactNode } from "react";
import { cx } from "@/shared/utils";

type CommanderPanelProps = {
  title: string;
  Footer: ReactNode;
  className?: string;
};

export const CommanderPanel: FC<PropsWithChildren<CommanderPanelProps>> = ({
  title,
  Footer,
  children,
  className,
}) => {
  return (
    <section className="border-primaryLight flex h-full flex-col border-2">
      <header className="bg-primaryLight flex items-center justify-center">
        <span className="bg-blue text-primaryLight px-2 py-0.5 text-lg leading-none">
          {title}
        </span>
      </header>

      <div className="border-primaryLight divide-primaryLight mx-0.5 mb-0.5 mt-0 flex grow flex-col divide-y-2 border border-t-0">
        <div
          className={cx(
            "bg-blue text-primaryLight h-full grow px-1",
            className,
          )}
        >
          {children}
        </div>

        <div className="shrink-0">{Footer}</div>
      </div>
    </section>
  );
};
