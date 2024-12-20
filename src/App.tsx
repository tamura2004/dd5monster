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
import { CharacterUtil } from "./tools/CharacterUtil.ts";
import { HitPoints } from "./components/HitPoints.tsx";
import { useState } from "react";
import { useBoard } from "./hooks/useBoard.ts";
import { BoardData } from "./settings.ts";
import { EditRoom } from "./components/EditRoom.tsx";
import { useCharacters } from "./hooks/useCharacters.ts";
import { CharacterList } from "./components/CharacterList.tsx";

function App() {
  const { settings, setLevel, setNumCharacters, setDifficulty, totalExp } =
    useSettings(initialSettings);
  const { monster, reRollMonster } = useMonster(totalExp);
  const { units, move, setUnit, deleteUnit, setHitPoint } = useUnits();
  const { board, flipCell, tile, setTile } = useBoard(BoardData);
  const { characters, setCharacter } = useCharacters();
  const [isMaster, setIsMaster] = useState<boolean>(false);
  const activeCharacters = Object.values(characters).filter(
    (character) => character.active,
  );

  const reRollByPage = {
    [Page.Setting]: () => {
      reRollMonster();
      setPage(Page.Monster);
    },
    [Page.Monster]: reRollMonster,
    [Page.Character]: () => {},
    [Page.Room]: () => {
      range(monster.num).forEach((i) => {
        const unit = MonsterUtil.unit(monster, i);
        setUnit(unit);
      });
      range(20 - monster.num).forEach((i) => {
        const id = `m${i + monster.num}`;
        deleteUnit(id);
      });
      Object.values(characters).forEach((character) => {
        const initiative = CharacterUtil.rollInitiative(character);
        setCharacter({ ...character, initiative });
        const unit = CharacterUtil.unit(character);
        if (character.active) {
          setUnit(unit);
        } else {
          deleteUnit(unit.id);
        }
      });
    },
    [Page.HitPoint]: () => {
      range(monster.num).forEach((i) => {
        const id = `m${i}`;
        setHitPoint(id, monster.hp);
      });
    },
    [Page.EditRoom]: () => {
      flipCell(0, 0);
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
        isMaster={isMaster}
        setIsMaster={setIsMaster}
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
        {page === Page.Character && (
          <CharacterList characters={characters} setCharacter={setCharacter} />
        )}
        {page === Page.Monster && <MonsterCard monster={monster} />}
        {page === Page.Room && (
          <Room
            units={units}
            move={move}
            monster={monster}
            board={board}
            characters={activeCharacters}
          />
        )}
        {page === Page.HitPoint && (
          <HitPoints
            units={units}
            setHitPoint={setHitPoint}
            monster={monster}
          />
        )}
        {page === Page.EditRoom && (
          <select
            value={tile}
            className="form-select form-select-lg w-25 m-2"
            onChange={(e) => setTile(e.target.value)}
          >
            <option key={"wall"} value={"#"}>
              壁
            </option>
            <option key={"water"} value={"W"}>
              水場
            </option>
            <option key={"secret"} value={"S"}>
              魔法陣
            </option>
            <option key={"bush"} value={"B"}>
              草むら
            </option>
            <option key={"poison"} value={"P"}>
              毒沼
            </option>
          </select>
        )}
        {page === Page.EditRoom && (
          <EditRoom board={board} flipCell={flipCell} />
        )}
      </div>
    </>
  );
}

export default App;
