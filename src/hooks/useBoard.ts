import { useEffect, useState } from "react";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

export const useBoard = (boardData: string[]) => {
  const [board, setBoard] = useState(boardData);

  useEffect(() => {
    onSnapshot(doc(db, "board", "board"), (doc) => {
      setBoard(doc.data()?.board ?? boardData);
    });
  }, []);

  const flipCell = (x: number, y: number) => {
    const newBoard = board.map((row, yIndex) =>
      row
        .split("")
        .map((cell, xIndex) => {
          if (xIndex === x && yIndex === y) {
            return cell === "#" ? "." : "#";
          }
          return cell;
        })
        .join(""),
    );
    setDoc(doc(db, "board", "board"), { board: newBoard }).then();
  };

  return { board, flipCell };
};
