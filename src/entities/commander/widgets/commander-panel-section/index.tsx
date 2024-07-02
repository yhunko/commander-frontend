import { FC, PropsWithChildren } from "react";

type CommanderPanelSectionProps = {
  title: string;
};

export const CommanderPanelSection: FC<
  PropsWithChildren<CommanderPanelSectionProps>
> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-lg text-yellow-400">{title}</span>

      {children}
    </div>
  );
};
