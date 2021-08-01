import React, { FC } from "react";
import styled from "styled-components";

import { icons } from "../../assets/icons";
import { colors } from "../../colors/colors";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;
  padding: 0 2rem;

  .svg_logo {
    width: 4rem;
    height: 4rem;
    fill: ${colors.peach};
  }

  .header {
    color: ${colors.dark};
  }
`;

const Header: FC = () => {
  return (
    <HeaderStyled>
      {icons.logo}
      <h1 className="header font_title">Paint Online</h1>
    </HeaderStyled>
  );
};

export default Header;
