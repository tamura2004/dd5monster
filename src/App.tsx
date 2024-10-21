import { useSettings } from "./hooks/useSettings.ts";
import { MonsterCard } from "./components/MonsterCard.tsx";
import { initialSettings } from "./models/Settings.ts";
import { useMonster } from "./hooks/useMonster.ts";
import { SettingsForm } from "./components/SettingsForm.tsx";
import { NavBar } from "./components/NavBar.tsx";
import { useUnits } from "./hooks/useUnits.ts";
import { Room } from "./components/Room.tsx";
import { range } from "./tools/ArrayUtil.ts";
import { Page, usePage } from "./hooks/usePage.ts";
import { MonsterUtil } from "./tools/MonsterUtil.ts";
import { Characters } from "./models/Character.ts";
import { CharacterUtil } from "./tools/CharacterUtil.ts";

function App() {
  const { settings, setLevel, setNumCharacters, setDifficulty, totalExp } =
    useSettings(initialSettings);
  const { monster, reRollMonster } = useMonster(totalExp);
  const { units, move, setUnit, deleteUnit } = useUnits();

  const reRollByPage = {
    [Page.Setting]: () => {
      reRollMonster();
      setPage(Page.Monster);
    },
    [Page.Monster]: reRollMonster,
    [Page.Room]: () => {
      range(monster.num).forEach((i) => {
        const unit = MonsterUtil.unit(monster, i);
        setUnit(unit);
      });
      range(20 - monster.num).forEach((i) => {
        const id = `m${i + monster.num}`;
        deleteUnit(id);
      });
      Object.values(Characters).forEach((character) => {
        const unit = CharacterUtil.unit(character);
        setUnit(unit);
      });
    },
  };

  const { page, setPage, reRollLabel, reRoll } = usePage(reRollByPage);

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
          />
        )}
      </div>
    </>
  );
}

export default App;
