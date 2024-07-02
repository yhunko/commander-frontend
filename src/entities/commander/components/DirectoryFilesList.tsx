import { FC } from "react";
import { Button } from "@headlessui/react";

export type DirectoryFilesListItem = {
  name: string;
  ext?: string;
};

type DirectoryFileListProps = {
  dir: string;
  items: DirectoryFilesListItem[];
};

export const DirectoryFilesList: FC<DirectoryFileListProps> = ({
  dir,
  items,
}) => {
  return (
    <ul className="m-0 w-full p-0">
      <li key={`dir-${dir}`}>{dir}</li>
      {items.map(({ name, ext = null }) => (
        <Button
          as="li"
          key={`${name}-${ext}`}
          className="hover:bg-primaryLight hover:text-blue flex w-full cursor-pointer items-center justify-between leading-none"
        >
          <span>{name}</span>

          <span>{ext}</span>
        </Button>
      ))}
    </ul>
  );
};
