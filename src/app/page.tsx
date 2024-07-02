import {
  CommanderTitleBar,
  CommanderPanel,
  CommanderPanelFooter,
  CommanderActionBar,
  CommanderActions,
  commanderTitleBarItems,
  commanderActions,
  directoryListItems,
} from "@/entities/commander";
import { CommanderPanelSection } from "@/entities/commander/widgets/commander-panel-section";
import { DirectoryList } from "@/entities/commander/components/DirectoryList";

export default function Home() {
  return (
    <>
      <CommanderTitleBar items={commanderTitleBarItems} />

      <main className="bg-blue grid grow grid-cols-2 gap-1 pb-0.5">
        <CommanderPanel
          title="test"
          Footer={
            <CommanderPanelFooter>
              <span>C:\</span>
            </CommanderPanelFooter>
          }
        >
          List
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
            <DirectoryList dir="DN" items={directoryListItems} />
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
