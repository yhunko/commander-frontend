import { FC } from "react";
import { Button } from "@headlessui/react";

export type CommanderAction = {
  title: string;
};

type CommanderActionsProps = {
  data: CommanderAction[];
};

export const CommanderActions: FC<CommanderActionsProps> = ({ data }) => {
  return (
    <div className="flex w-full max-w-screen-xl flex-row flex-wrap items-center justify-start gap-2 md:w-full md:flex-nowrap md:justify-evenly">
      {data.map(({ title }, index) => (
        <Button
          key={title}
          as="kbd"
          tabIndex={index + 1}
          className="flex w-full items-center font-dos text-lg"
        >
          <span className="leading-none">{index + 1}</span>
          <span className="grow bg-primary text-start leading-none text-secondary">
            {title}
          </span>
        </Button>
      ))}
    </div>
  );
};
