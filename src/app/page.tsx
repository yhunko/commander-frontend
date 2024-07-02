import {
  CommanderTitleBar,
  CommanderPanel,
  CommanderPanelFooter,
  CommanderCommandBar,
  CommanderActions,
  commanderTitleBarItems,
  commanderActions,
  directoryListItems,
  CommanderPanelSection,
  FilesList,
  DirectoriesList,
  directoriesList,
} from "@/entities/commander";

export default function Home() {
  return (
    <>
      <CommanderTitleBar items={commanderTitleBarItems} />

      <main className="grid grow grid-cols-1 gap-1 bg-blue pb-0.5 md:grid-cols-2">
        <CommanderPanel
          title="Directories"
          Footer={
            <CommanderPanelFooter>
              <span>C:\</span>
            </CommanderPanelFooter>
          }
        >
          <DirectoriesList data={directoriesList} />
        </CommanderPanel>
        <CommanderPanel
          title="C:\"
          Footer={
            <CommanderPanelFooter>
              <span>DN</span>
            </CommanderPanelFooter>
          }
          className="grid grid-cols-3 divide-x-2 divide-primaryLight"
        >
          <CommanderPanelSection title="Name">
            <FilesList dir="DN" items={directoryListItems} />
          </CommanderPanelSection>
          <CommanderPanelSection title="Name" />
          <CommanderPanelSection title="Name" />
        </CommanderPanel>
      </main>

      <footer className="flex w-full flex-col bg-secondary text-gray-300">
        <CommanderCommandBar />
        <CommanderActions data={commanderActions} />
      </footer>
    </>
  );
}
