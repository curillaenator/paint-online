import React, { FC } from "react";
import styled from "styled-components";

import BtnIcon from "../../buttons/btnIcon";
import ColorPick from "../colorPick";

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

      {color && <ColorPick />}
    </ToolsStyled>
  );
};

export default Tools;
