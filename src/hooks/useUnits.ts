import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";
import { useEffect, useState } from "react";

export type Unit = {
  id: string;
  y: number;
  x: number;
};

export const useUnits = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const unitsRef = collection(db, "monsterUnits");

  useEffect(() => {
    onSnapshot(unitsRef, (snapshot) => {
      return setUnits(snapshot.docs.map((doc) => doc.data() as Unit));
    });
  }, []);

  const move = (id: string, x: number, y: number) => {
    setDoc(doc(db, "monsterUnits", id), { id, x, y }).then();
  }

  return { units, setUnits, move };
};
