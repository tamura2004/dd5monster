import { Settings } from "../models/Settings.ts";
import { Difficulty } from "../models/Difficulty.ts";

type Props = {
  settings: Settings;
  setLevel: (level: number) => void;
  setNumCharacters: (numCharacters: number) => void;
  setDifficulty: (difficulty: Difficulty) => void;
};

export const SettingsForm = ({
  settings,
  setLevel,
  setNumCharacters,
  setDifficulty,
}: Props) => {
  const { level, numCharacters, difficulty } = settings;
  return (
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
  );
};
