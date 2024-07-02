import { CommanderTitleBarItem, CommanderAction } from "../features";
import { DirectoryFilesListItem } from "../components/DirectoryFilesList";
import { DirectoriesListItem } from "../components";

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

export const directoryListItems: DirectoryFilesListItem[] = [
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

export const directoriesList: DirectoriesListItem[] = [
  {
    name: "tools",
  },
  {
    name: "xtgold",
  },
  {
    name: "laplink",
  },
  {
    name: "dn",
    selected: true,
  },
  {
    name: "dev",
  },
];
