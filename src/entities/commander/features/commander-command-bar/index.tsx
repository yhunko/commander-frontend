import { FC } from "react";

export const CommanderCommandBar: FC = () => {
  return (
    <div className="flex w-full flex-row gap-1">
      <label htmlFor="command-input">C:\&gt;</label>
      <input id="command-input" className="w-full bg-transparent outline-0" />
    </div>
  );
};
