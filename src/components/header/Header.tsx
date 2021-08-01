import React, { FC } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import Logo from "./logo";
import Tools from "./tools";
import Settings from "./settings";

import { icons } from "../../assets/icons";

const HeaderStyled = styled.header`
  margin-bottom: 1rem;
  padding: 0 2rem;

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
  }

  .lower {
  }
`;

const Header: FC = () => {
  const dispatch = useAppDispatch();

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
      <div className="upper">
        <Tools items={tools} />

        <Logo />

        <Tools items={controls} />
      </div>

      <div className="lower">
        <Settings />
      </div>
    </HeaderStyled>
  );
};

export default Header;
