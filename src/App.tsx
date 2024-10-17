import { useSettings } from "./hooks/useSettings.ts";
import { MonsterCard } from "./components/MonsterCard.tsx";
import { initialSettings } from "./models/Settings.ts";
import { useMonster } from "./hooks/useMonster.ts";
import { SettingsForm } from "./components/SettingsForm.tsx";
import { Board } from "./components/Board.tsx";
import { useState } from "react";
import {NavBar} from "./components/NavBar.tsx";

export const Page = {
  Setting: "Setting",
  Monster: "Monster",
  Room: "Room",
} as const;
export type Page = (typeof Page)[keyof typeof Page];

function App() {
  const { settings, setLevel, setNumCharacters, setDifficulty, totalExp } =
    useSettings(initialSettings);

  const { monster, setSeed } = useMonster(totalExp);
  const [page, setPage] = useState<Page>(Page.Setting);
  const roll = () => setSeed(Math.random());

  return (
    <>
      <NavBar page={page} setPage={setPage} />
      <div className="container">
        {page === Page.Setting && (
          <SettingsForm
            settings={settings}
            setLevel={setLevel}
            setNumCharacters={setNumCharacters}
            setDifficulty={setDifficulty}
            setPage={setPage}
            roll={roll}
          />
        )}
        {page === Page.Monster && <MonsterCard monster={monster} roll={roll} />}
        {page === Page.Room && <Board />}
      </div>
    </>
  );
}

export default App;
