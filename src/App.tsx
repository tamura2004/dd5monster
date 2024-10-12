import "./App.css";
import { useSettings } from "./hooks/useSettings.ts";
import { useState } from "react";
import { MonsterCard } from "./components/MonsterCard.tsx";
import { initialSettings } from "./models/Settings.ts";
import { useMonster } from "./hooks/useMonster.ts";
import { SettingsForm } from "./components/SettingsForm.tsx";

const Page = {
  Setting: "Setting",
  Encounter: "Encounter",
} as const;
type Page = (typeof Page)[keyof typeof Page];

function App() {
  const { settings, setLevel, setNumCharacters, setDifficulty, totalExp } =
    useSettings(initialSettings);

  const { monster, setSeed } = useMonster(totalExp);

  const [page, setPage] = useState<Page>(Page.Setting);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" onClick={() => setPage(Page.Setting)}>
            D&D5e ランダム遭遇表
          </a>
          <button
            className={"btn btn-outline-light"}
            onClick={() => {
              setPage(Page.Encounter);
              setSeed(Math.random());
            }}
          >
            遭遇
          </button>
        </div>
      </nav>
      <div className="container">
        {page === Page.Setting && (
          <SettingsForm
            settings={settings}
            setLevel={setLevel}
            setNumCharacters={setNumCharacters}
            setDifficulty={setDifficulty}
          />
        )}
        {page === Page.Encounter && <MonsterCard monster={monster} />}
      </div>
    </>
  );
}

export default App;
