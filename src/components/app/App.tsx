import React, { FC } from "react";
import styled from "styled-components";

import Header from "../header";

import { colors } from "../../colors/colors";

const AppContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  min-width: 1024px;
  margin: 0 auto;
  color: ${colors.dark};
`;

const App: FC = () => {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
};

export default App;
