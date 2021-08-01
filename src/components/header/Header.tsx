import React, { FC } from "react";
import styled from "styled-components";

import Tools from "./tools";

import { icons } from "../../assets/icons";
import { colors } from "../../colors/colors";

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

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`;

const Header: FC = () => {
  const tools = [
    { id: "brush", title: "Кисть", icon: icons.brush, handler: () => {} },
    { id: "rect", title: "Ректангл", icon: icons.rect, handler: () => {} },
    { id: "circle", title: "Круг", icon: icons.circle, handler: () => {} },
    { id: "line", title: "Линия", icon: icons.line, handler: () => {} },
    { id: "eraser", title: "Резинка", icon: icons.eraser, handler: () => {} },
    { id: "color", title: "Цвет", icon: icons.colorpick, handler: () => {} },
  ];

  const controls = [
    { id: "undo", title: "Назад", icon: icons.undo, handler: () => {} },
    { id: "redo", title: "Вперед", icon: icons.redo, handler: () => {} },
    { id: "save", title: "Сохранить", icon: icons.save, handler: () => {} },
  ];

  return (
    <HeaderStyled>
      <Tools items={tools} />

      <LogoStyled>
        {icons.logo}
        <h1 className="logotext font_title">Paint Online</h1>
      </LogoStyled>

      <Tools items={controls} />
    </HeaderStyled>
  );
};

export default Header;
