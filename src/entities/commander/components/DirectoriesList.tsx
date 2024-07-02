import { FC } from "react";
import { Button } from "@headlessui/react";
import { cx } from "@/shared/utils";

export type DirectoriesListItem = {
  name: string;
  selected?: boolean;
};

type DirectoriesListProps = {
  data: DirectoriesListItem[];
};

export const DirectoriesList: FC<DirectoriesListProps> = ({ data }) => {
  return (
    <ul className="relative m-0 p-0">
      {data.map(({ name, selected }, index) => (
        <Button
          as="li"
          key={name}
          className={cx(
            "hover:bg-primaryLight before:bg-primaryLight hover:text-blue hover:before:bg-blue group relative cursor-pointer before:absolute before:top-0 before:h-full before:w-0.5 before:content-['']",
            selected && "bg-primaryLight before:bg-blue cursor-default",
            index === data.length - 1 && "before:h-1/2",
          )}
        >
          <span
            className={cx(
              "group-hover:before:bg-blue before:bg-primaryLight flex flex-row items-center gap-0.5 before:block before:h-0.5 before:w-3 before:content-['']",
              selected && "before:bg-blue text-blue",
            )}
          >
            {name.toUpperCase()}
          </span>
        </Button>
      ))}
    </ul>
  );
};
