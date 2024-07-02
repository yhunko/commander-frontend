import { FC, PropsWithChildren } from "react";

type CommanderPanelFooterProps = {};

export const CommanderPanelFooter: FC<
  PropsWithChildren<CommanderPanelFooterProps>
> = ({ children }) => {
  return <div className="bg-blue text-primaryLight px-1 py-2">{children}</div>;
};
