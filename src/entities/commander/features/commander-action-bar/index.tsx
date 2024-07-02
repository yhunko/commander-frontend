import { FC, ReactNode } from "react";

type CommanderActionBarProps = {
  Actions: ReactNode;
};

export const CommanderActionBar: FC<CommanderActionBarProps> = ({
  Actions,
}) => {
  return (
    <footer className="flex w-full flex-col bg-secondary text-gray-300">
      <div className="flex w-full flex-row gap-1">
        <label htmlFor="command-input">C:\&gt;</label>
        <input id="command-input" className="w-full bg-transparent outline-0" />
      </div>

      {Actions}
    </footer>
  );
};
