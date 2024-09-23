import "./App.css";
import { useSettings } from "./hooks/useSettings.ts";
import { Difficulty } from "./data/difficulty.ts";
import React, { useState } from "react";
import { CardText } from "./components/CardText.tsx";
import { Hr } from "./components/Hr.tsx";
import { MonsterCard } from "./components/MonsterCard.tsx";

const Page = {
  Setting: "Setting",
  Encounter: "Encounter",
} as const;
type Page = (typeof Page)[keyof typeof Page];

function App() {
  const {
    level,
    setLevel,
    numCharacters,
    setNumCharacters,
    difficulty,
    setDifficulty,
    setSeed,
    monster,
  } = useSettings();
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
          <>
            <h3>設定</h3>
            <select
              value={level}
              className="form-select form-select-lg mb-3"
              onChange={(e) => setLevel(parseInt(e.target.value))}
            >
              <option value="">レベルを選択してください</option>
              {[...Array(20).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  キャラクターレベル {i + 1}
                </option>
              ))}
              {[...Array(20).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  キャラクターレベル {i + 1}
                </option>
              ))}
            </select>
            <select
              value={numCharacters}
              className="form-select form-select-lg mb-3"
              onChange={(e) => setNumCharacters(parseInt(e.target.value))}
            >
              <option value="">人数を選択してください</option>
              {[...Array(6).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  人数 {i + 1}
                </option>
              ))}
            </select>
            <select
              value={difficulty}
              className="form-select form-select-lg mb-3"
              onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            >
              <option value="">難易度を選択してください</option>
              <option value={Difficulty.EASY}>簡単</option>
              <option value={Difficulty.NORMAL}>通常</option>
              <option value={Difficulty.HARD}>困難</option>
              <option value={Difficulty.HELL}>死地</option>
            </select>
          </>
        )}
        {page === Page.Encounter && <MonsterCard monster={monster} />}
      </div>
    </>
  );
}

export default App;
