import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../colors/colors";

import type { IButton } from "../../../types/types";

interface IButtonStyled {
  active: boolean | undefined;
}

const ButtonStyled = styled.button<IButtonStyled>`
  width: 25px;
  height: 25px;

  .svg_icon {
    width: 100%;
    height: 100%;
    fill: ${({ active }) => (active ? colors.peach : colors.dark)};
    transition: 0.08s linear;
  }

  &:hover {
    .svg_icon {
      fill: ${colors.peach};
    }
  }

  &:active {
    .svg_icon {
      fill: ${colors.dark};
    }
  }
`;

const BtnIcon: FC<IButton> = ({ title, icon, active, handler }) => {
  return (
    <ButtonStyled onClick={handler} title={title} active={active}>
      {icon && icon}
    </ButtonStyled>
  );
};

export default BtnIcon;
