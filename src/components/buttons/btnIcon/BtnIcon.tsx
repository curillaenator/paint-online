import React, { FC } from "react";
import styled from "styled-components";

import { colors } from "../../../colors/colors";

import type { IButton } from "../../../types/types";

const ButtonStyled = styled.button`
  width: 25px;
  height: 25px;

  .svg_icon {
    width: 100%;
    height: 100%;
    fill: ${colors.dark};
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

const BtnIcon: FC<IButton> = ({ title, icon, handler }) => {
  return (
    <ButtonStyled onClick={handler} title={title}>
      {icon && icon}
    </ButtonStyled>
  );
};

export default BtnIcon;
