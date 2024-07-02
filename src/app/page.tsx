import { CommanderTitleBar, CommanderTitleBarItem } from "@/entities/commander";

const TITLE_BAR_ITEMS: CommanderTitleBarItem[] = [
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

export default function Home() {
  return (
    <main>
      <CommanderTitleBar items={TITLE_BAR_ITEMS} />
    </main>
  );
}
