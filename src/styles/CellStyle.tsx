import { styled } from "styled-components";
import {CellBorderSize, CellOffset, CellSize} from "../settings.ts";

type Props = {
  x: number;
  y: number;
  $backgroundColor: string;
};

export const CellStyle = styled.div.attrs<Props>(
  ({ x, y, $backgroundColor }) => ({
    style: {
      left: `${x * (CellOffset)}px`,
      top: `${y * (CellOffset)}px`,
      backgroundColor: $backgroundColor,
    },
  }),
)<Props>`
  position: absolute;
  width: ${CellSize}px;
  height: ${CellSize}px;
  border: ${CellBorderSize}px solid darkgray;
`;
