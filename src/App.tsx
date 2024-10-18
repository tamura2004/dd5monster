import { useSettings } from "./hooks/useSettings.ts";
import { MonsterCard } from "./components/MonsterCard.tsx";
import { initialSettings } from "./models/Settings.ts";
import { useMonster } from "./hooks/useMonster.ts";
import { SettingsForm } from "./components/SettingsForm.tsx";
import { Board } from "./components/Board.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { useUnits } from "./hooks/useUnits.ts";
import { Page, usePage } from "./hooks/usePage.ts";

function App() {
  const { settings, setLevel, setNumCharacters, setDifficulty, totalExp } =
    useSettings(initialSettings);
  const { monster, reRollMonster } = useMonster(totalExp);
  const { units, move } = useUnits();
  const { page, setPage, reRoll } = usePage(reRollMonster, move);

  return (
    <>
      <NavBar page={page} setPage={setPage} reRoll={reRoll} />
      <div className="container">
        {page === Page.Setting && (
          <SettingsForm
            settings={settings}
            setLevel={setLevel}
            setNumCharacters={setNumCharacters}
            setDifficulty={setDifficulty}
          />
        )}
        {page === Page.Monster && <MonsterCard monster={monster} />}
        {page === Page.Room && <Board units={units} move={move} />}
      </div>
    </>
  );
}

export default App;
