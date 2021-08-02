import React, { FC } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import Logo from "./logo";
import Tools from "./tools";
import Settings from "./settings";

import { setTool } from "../../redux/reducers/main";

import { icons } from "../../assets/icons";

const HeaderStyled = styled.header`
  margin-bottom: 1rem;

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
  const toolID = useAppSelector((state) => state.main.tool);

  const tools = [
    {
      id: "brush",
      title: "Кисть",
      icon: icons.brush,
      handler: () => dispatch(setTool("brush")),
    },
    {
      id: "rect",
      title: "Ректангл",
      icon: icons.rect,
      handler: () => dispatch(setTool("rect")),
    },
    {
      id: "circle",
      title: "Круг",
      icon: icons.circle,
      handler: () => dispatch(setTool("circle")),
    },
    {
      id: "line",
      title: "Линия",
      icon: icons.line,
      handler: () => dispatch(setTool("line")),
    },
    {
      id: "eraser",
      title: "Резинка",
      icon: icons.eraser,
      handler: () => dispatch(setTool("eraser")),
    },
  ];

  const controls = [
    { id: "undo", title: "Назад", icon: icons.undo, handler: () => {} },
    { id: "redo", title: "Вперед", icon: icons.redo, handler: () => {} },
    { id: "save", title: "Сохранить", icon: icons.save, handler: () => {} },
  ];

  return (
    <HeaderStyled>
      <div className="upper">
        <Tools items={tools} color selected={toolID} />

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
