import {
  CommanderTitleBar,
  CommanderPanel,
  CommanderPanelFooter,
  CommanderActionBar,
  CommanderActions,
  commanderTitleBarItems,
  commanderActions,
  directoryListItems,
  CommanderPanelSection,
  DirectoryFilesList,
  DirectoriesList,
  directoriesList,
} from "@/entities/commander";

export default function Home() {
  return (
    <>
      <CommanderTitleBar items={commanderTitleBarItems} />

      <main className="bg-blue grid grow grid-cols-1 gap-1 pb-0.5 md:grid-cols-2">
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
          className="divide-primaryLight grid grid-cols-3 divide-x-2"
        >
          <CommanderPanelSection title="Name">
            <DirectoryFilesList dir="DN" items={directoryListItems} />
          </CommanderPanelSection>
          <CommanderPanelSection title="Name" />
          <CommanderPanelSection title="Name" />
        </CommanderPanel>
      </main>

      <CommanderActionBar
        Actions={<CommanderActions data={commanderActions} />}
      />
    </>
  );
}
