import React, { FC } from "react";
import styled from "styled-components";

import Header from "../header";
import Canvas from "../canvas";

import { colors } from "../../colors/colors";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 1280px;
  min-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;

  color: ${colors.dark};
`;

const App: FC = () => {
  return (
    <AppContainer>
      <Header />

      <Canvas />
    </AppContainer>
  );
};

export default App;
