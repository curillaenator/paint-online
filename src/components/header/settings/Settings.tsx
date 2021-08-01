import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../../../colors/colors";

import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";

import { setLineWidth } from "../../../redux/reducers/main";

const SettingsStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;

  .input-label {
    cursor: pointer;
  }

  .input-input {
    width: 5rem;
    height: 100%;
    padding: 0 1rem;
    border-radius: 1rem;
    border: 2px solid ${colors.gray};
    transition: 0.08s linear;

    &:focus {
      border: 2px solid ${colors.peach};
    }
  }
`;

const Settings: FC = () => {
  const dispatch = useAppDispatch();
  const lineWidth = useAppSelector((state) => state.main.lineWidth);

  return (
    <SettingsStyled>
      <label className="input-label font_title" htmlFor="lineWidth">
        Толщина линии (от 1 до 4):
      </label>
      <input
        className="input-input"
        type="number"
        min="1"
        max="4"
        id="lineWidth"
        value={lineWidth}
        onChange={(e) => dispatch(setLineWidth(e.target.value))}
      />
    </SettingsStyled>
  );
};

export default Settings;
