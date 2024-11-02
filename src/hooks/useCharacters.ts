import { Character } from "../models/Character.ts";
import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const characterRef = collection(db, "characters");

  useEffect(() => {
    onSnapshot(characterRef, (snapshot) => {
      return setCharacters(snapshot.docs.map((doc) => doc.data() as Character));
    });
  }, []);

  const setCharacter = (character: Character) => {
    const { id } = character;
    setDoc(doc(db, "characters", id), character).then();
  };

  return { characters, setCharacter };
};
