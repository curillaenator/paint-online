import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import { colors } from "../../../colors/colors";

import { useAppDispatch } from "../../../hooks/hooks";

import { TSetColor } from "../../../redux/reducers/main";

interface IColorPickStyled {
  color: string;
}

const ColorPickStyled = styled.div<IColorPickStyled>`
  position: relative;
  width: 25px;
  height: 25px;

  label {
    width: 100%;
    height: 100%;
    cursor: pointer;

    .svg_icon {
      width: 100%;
      height: 100%;
      fill: ${({ color }) => color};
      transition: 0.08s linear;
    }

    &:hover {
      .svg_icon {
        fill: ${colors.peach};
      }
    }

    &:active {
      .svg_icon {
        fill: ${({ color }) => color};
      }
    }
  }

  input {
    position: absolute;
    top: 1rem;
    left: 0;
    opacity: 0;
    z-index: -10;
  }
`;

interface IColorPick {
  labelID: string;
  icon: ReactNode;
  action: TSetColor;
  stateColor: string;
}

const ColorPick: FC<IColorPick> = ({ labelID, icon, action, stateColor }) => {
  const dispatch = useAppDispatch();

  return (
    <ColorPickStyled color={stateColor}>
      <label htmlFor={labelID}>{icon}</label>
      <input
        type="color"
        id={labelID}
        value={stateColor}
        onChange={(e) => dispatch(action(e.target.value))}
      />
    </ColorPickStyled>
  );
};

export default ColorPick;
