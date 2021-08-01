import React, { FC } from "react";
import styled from "styled-components";

import { icons } from "../../../assets/icons";
import { colors } from "../../../colors/colors";

const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;

  .svg_logo {
    width: 3rem;
    height: 3rem;
    fill: ${colors.peach};
  }

  .logotext {
    color: ${colors.dark};
    user-select: none;
  }
`;

const Logo: FC = () => {
  return (
    <LogoStyled>
      {icons.logo}
      <h1 className="logotext font_title">Paint Online</h1>
    </LogoStyled>
  );
};

export default Logo;
