import React, { FC } from "react";
import styled from "styled-components";

import BtnIcon from "../../buttons/btnIcon";

import { IToolsItem } from "../../../types/types";

const ToolsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface ITools {
  items: IToolsItem[];
}

const Tools: FC<ITools> = ({ items }) => {
  return (
    <ToolsStyled>
      {items.map((item) => (
        <BtnIcon
          title={item.title}
          icon={item.icon}
          handler={item.handler}
          key={item.id}
        />
      ))}
    </ToolsStyled>
  );
};

export default Tools;
