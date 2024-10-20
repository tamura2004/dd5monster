import { styled } from "styled-components";
import { PieceBorderSize, PieceSize } from "../settings.ts";

export const PieceStyle = styled.div<{ $isMonster: boolean }>`
  color: white;
  width: ${PieceSize}px;
  height: ${PieceSize}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => (props.$isMonster ? "crimson" : "dodgerblue")};
  border-color: ${(props) => (props.$isMonster ? "darkred" : "darkblue")};
  border-width: ${PieceBorderSize}px;
  border-style: solid;
`;

export const MovablePieceStyle = styled(PieceStyle)<{
  $left: number;
  $top: number;
}>`
  position: absolute;
  cursor: grab;
  touch-action: none;
  left: ${(props) => props.$left}px;
  top: ${(props) => props.$top}px;
`;
