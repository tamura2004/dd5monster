import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase.ts";
import { useEffect, useState } from "react";
import { Unit } from "../models/Unit.ts";

export const useUnits = () => {
  const [units, setUnits] = useState<Unit[]>([]);
  const unitsRef = collection(db, "units");

  useEffect(() => {
    onSnapshot(unitsRef, (snapshot) => {
      return setUnits(snapshot.docs.map((doc) => doc.data() as Unit));
    });
  }, []);

  const move = (id: string, x: number, y: number) => {
    setDoc(doc(db, "units", id), { x, y }, { merge: true }).then();
  };

  const setUnit = (unit: Unit) => {
    setDoc(doc(db, "units", unit.id), unit).then();
  };

  const deleteUnit = (id: string) => {
    deleteDoc(doc(db, "units", id)).then();
  };

  const setHitPoint = (id: string, hp: number) => {
    setDoc(doc(db, "units", id), { hp }, { merge: true }).then();
  };

  return { units, move, setUnit, deleteUnit, setHitPoint };
};
