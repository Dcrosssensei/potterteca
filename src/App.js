import React from "react";
import { useSelector } from "react-redux";
// const dispatch = useDispatch();

//StyledComponents
import { HouseTheme } from "./styles/Theme";
import { Layout } from "./components/Layout";

//COMPONENTS
import Home from "./pages/Home";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  //state house
  const house = useSelector((state) => state.reduxPotter.house);
  return (
    <HouseTheme house={house}>
      <Modal />
      <Header />
      <Layout>
        <Home />
      </Layout>
    </HouseTheme>
  );
}

export default App;
