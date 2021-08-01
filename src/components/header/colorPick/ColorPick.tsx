import React, { FC } from "react";
import styled from "styled-components";

import { icons } from "../../../assets/icons";
import { colors } from "../../../colors/colors";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { setColor } from "../../../redux/reducers/main";

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

const ColorPick: FC = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector((state) => state.main.color);

  return (
    <ColorPickStyled color={color}>
      <label htmlFor="colorPick">{icons.colorpick}</label>
      <input
        type="color"
        id="colorPick"
        value={color}
        onChange={(e) => dispatch(setColor(e.target.value))}
      />
    </ColorPickStyled>
  );
};

export default ColorPick;
