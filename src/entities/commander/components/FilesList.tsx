import { FC } from "react";
import { Button } from "@headlessui/react";

export type FilesListItem = {
  name: string;
  ext?: string;
};

type FilesListProps = {
  dir: string;
  items: FilesListItem[];
};

export const FilesList: FC<FilesListProps> = ({ dir, items }) => {
  return (
    <ul className="m-0 w-full p-0">
      <li key={`dir-${dir}`}>{dir}</li>
      {items.map(({ name, ext = null }) => (
        <Button
          as="li"
          key={`${name}-${ext}`}
          className="flex w-full cursor-pointer items-center justify-between leading-none hover:bg-primaryLight hover:text-blue"
        >
          <span>{name}</span>

          <span>{ext}</span>
        </Button>
      ))}
    </ul>
  );
};
