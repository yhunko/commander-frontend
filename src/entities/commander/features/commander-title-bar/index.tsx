import { FC } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { DropCapLetter } from "@/shared/components";
import { cx } from "@/shared/utils";

export type CommanderTitleBarItem = {
  title: string;
  modifier?: string;
  children?: CommanderTitleBarItem[];
};

type CommanderTitleBarProps = {
  items: CommanderTitleBarItem[];
};

export const CommanderTitleBar: FC<CommanderTitleBarProps> = ({ items }) => {
  return (
    <nav className="flex flex-row gap-2 bg-primary px-2 py-1">
      {items.map((item) => renderItem(item))}
    </nav>
  );
};

const SHARED_BUTTON_CLASSES = "px-2 hover:bg-secondary hover:text-white";

function renderItem(item: CommanderTitleBarItem) {
  if (!!item.children?.length) {
    return (
      <Menu>
        <MenuButton
          className={cx(
            SHARED_BUTTON_CLASSES,
            "data-[open]:bg-secondary data-[open]:text-white",
          )}
        >
          <DropCapLetter value={item.title} />
        </MenuButton>

        <MenuItems
          anchor="bottom start"
          className="w-max min-w-60 max-w-full bg-primary p-1"
        >
          <div className="flex w-full flex-col items-start gap-0 border-2 border-secondary px-1 py-0.5">
            {item.children.map(({ title, modifier = null }) => (
              <MenuItem key={title}>
                <Button className="flex w-full items-center justify-between px-1 py-0 hover:bg-secondary hover:text-white">
                  <DropCapLetter value={title} />

                  {!!modifier && <kbd className="font-dos">{modifier}</kbd>}
                </Button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    );
  }

  return (
    <Button className={SHARED_BUTTON_CLASSES}>
      <DropCapLetter value={item.title} />
    </Button>
  );
}
