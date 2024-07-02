import { CommanderTitleBarItem, CommanderAction } from "../features";
import { DirectoryListItem } from "../components/DirectoryList";

export const commanderTitleBarItems: CommanderTitleBarItem[] = [
  {
    title: "File",
    children: [
      {
        title: "NCD Tree",
        modifier: "ALT+F4",
      },
      {
        title: "Exit",
        modifier: "Esc",
      },
    ],
  },
  {
    title: "Disk",
  },
  {
    title: "Commands",
  },
];

export const commanderActions: CommanderAction[] = [
  {
    title: "Help",
  },
  {
    title: "Menu",
  },
  {
    title: "View",
  },
  {
    title: "Edit",
  },
  {
    title: "Copy",
  },
  {
    title: "RenMov",
  },
  {
    title: "Mkdir",
  },
  {
    title: "Delete",
  },
  {
    title: "PullDn",
  },
  {
    title: "Quit",
  },
];

export const directoryListItems: DirectoryListItem[] = [
  {
    name: "autoexec",
    ext: "bat",
  },
  {
    name: "command",
    ext: "com",
  },
  {
    name: "config",
    ext: "sys",
  },
  {
    name: "lo",
    ext: "sys",
  },
  {
    name: "11pro",
    ext: "sys",
  },
  {
    name: "msdod",
    ext: "sys",
  },
];
