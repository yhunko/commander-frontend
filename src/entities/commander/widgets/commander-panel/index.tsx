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
    <section className="flex h-full flex-col border-2 border-primaryLight">
      <header className="flex items-center justify-center bg-primaryLight">
        <h1 className="bg-blue px-2 py-0.5 text-lg leading-none text-primaryLight">
          {title}
        </h1>
      </header>

      <div className="mx-0.5 mb-0.5 mt-0 flex grow flex-col divide-y-2 divide-primaryLight border border-t-0 border-primaryLight">
        <div
          className={cx(
            "h-full grow bg-blue px-1 text-primaryLight",
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
