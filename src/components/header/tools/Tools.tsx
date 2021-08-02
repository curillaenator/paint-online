import React, { FC } from "react";
import styled from "styled-components";

import { useAppSelector } from "../../../hooks/hooks";

import BtnIcon from "../../buttons/btnIcon";
import ColorPick from "../colorPick";

import { setFillColor, setStrokeColor } from "../../../redux/reducers/main";

import { icons } from "../../../assets/icons";

import { IToolsItem } from "../../../types/types";

const ToolsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ITools {
  items: IToolsItem[];
  color?: boolean;
  selected?: string;
}

const Tools: FC<ITools> = ({ items, color = false, selected }) => {
  const { fillColor, strokeColor } = useAppSelector((state) => state.main);

  return (
    <ToolsStyled>
      {items.map((item) => (
        <BtnIcon
          title={item.title}
          icon={item.icon}
          handler={item.handler}
          active={item.id === selected}
          key={item.id}
        />
      ))}

      {color && (
        <ColorPick
          labelID="stroke_color"
          icon={icons.colorpick}
          action={setStrokeColor}
          stateColor={strokeColor}
        />
      )}

      {color && (
        <ColorPick
          labelID="fill_color"
          icon={icons.colorfill}
          action={setFillColor}
          stateColor={fillColor}
        />
      )}
    </ToolsStyled>
  );
};

export default Tools;
