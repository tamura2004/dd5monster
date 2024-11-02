import { Ability } from "../models/Ability.ts";
import { Character } from "../models/Character.ts";
import { CharacterListItem } from "./CharacterListItem.tsx";

type Props = {
  characters: Character[];
  setCharacter: (character: Character) => void;
};

export const CharacterList = ({ characters, setCharacter }: Props) => {
  return (
    <>
      <h5>キャラクターリスト</h5>
      {Object.values(characters).map((character) => (
        <CharacterListItem
          key={character.id}
          character={character}
          setActive={(active) => {
            const newCharacter = { ...character, active };
            setCharacter(newCharacter);
          }}
          setDex={(dex) => {
            const newCharacter = {
              ...character,
              abilities: { ...character.abilities, [Ability.DEX]: dex },
            };
            setCharacter(newCharacter);
          }}
          setHp={(hp) => {
            const newCharacter = { ...character, hp };
            setCharacter(newCharacter);
          }}
        />
      ))}
    </>
  );
};
