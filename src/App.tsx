import { useSettings } from "./hooks/useSettings.ts";
import { MonsterCard } from "./components/MonsterCard.tsx";
import { initialSettings } from "./models/Settings.ts";
import { useMonster } from "./hooks/useMonster.ts";
import { SettingsForm } from "./components/SettingsForm.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { useUnits } from "./hooks/useUnits.ts";
import { Page, usePage } from "./hooks/usePage.ts";
import { Room } from "./components/Room.tsx";

function App() {
  const { settings, setLevel, setNumCharacters, setDifficulty, totalExp } =
    useSettings(initialSettings);
  const { monster, reRollMonster, initiative } = useMonster(totalExp);
  const { units, move, deleteUnit } = useUnits();
  const { page, setPage, reRoll, reRollLabel } = usePage(reRollMonster, move, monster, deleteUnit);

  return (
    <>
      <NavBar
        page={page}
        setPage={setPage}
        reRoll={reRoll}
        reRollLabel={reRollLabel}
      />
      <div className="container-fluid">
        {page === Page.Setting && (
          <SettingsForm
            settings={settings}
            setLevel={setLevel}
            setNumCharacters={setNumCharacters}
            setDifficulty={setDifficulty}
          />
        )}
        {page === Page.Monster && <MonsterCard monster={monster} />}
        {page === Page.Room && (
          <Room
            units={units}
            move={move}
            monster={monster}
            initiative={initiative}
          />
        )}
      </div>
    </>
  );
}

export default App;
