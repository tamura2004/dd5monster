import { Settings } from "../models/Settings.ts";
import { Difficulty } from "../data/difficulty.ts";

type Props = {
    settings: Settings;
  setSettings: (settings: Settings) => void;
};

export const InputSettings = (props: Props) => {
  return (
    <div className="container">
      <select
        value="4"
        className="form-select form-select-lg mb-3"
        onChange={(e) => props.setSettings({ ...props.settings, level: parseInt(e.target.value) })}
      >
        {[...Array(20).keys()].map((i) => (
          <option key={i} value={i + 1}>
            キャラクターレベル {i + 1}
          </option>
        ))}
      </select>
      <select
        value="4"
        className="form-select form-select-lg mb-3"
        onChange={(e) => props.setSettings({ ...props.settings, numCharacters: parseInt(e.target.value) })}
      >
        {[...Array(6).keys()].map((i) => (
          <option key={i} value={i + 1}>
            人数 {i + 1}
          </option>
        ))}
      </select>
      <select
        value={Difficulty.NORMAL}
        className="form-select form-select-lg mb-3"
        onChange={(e) => props.setSettings({ ...props.settings, difficulty: e.target.value as Difficulty })}
      >
        <option value={Difficulty.EASY}>簡単</option>
        <option value={Difficulty.NORMAL}>通常</option>
        <option value={Difficulty.HARD}>困難</option>
        <option value={Difficulty.HELL}>死地</option>
      </select>
    </div>
  );
};
