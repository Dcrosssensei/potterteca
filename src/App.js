import React from "react";
//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//StyledComponents
import { HouseTheme } from "./styles/Theme";
import { Layout } from "./components/Layout";

//COMPONENTS
import Home from "./pages/Home";
import Books from "./pages/Books";
import Characters from "./pages/Characters";
import Spells from "./pages/Spells";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AboutMe from "./pages/AboutME";

function App() {
  //state house
  const house = useSelector((state) => state.reduxPotter.house);
  return (
    <BrowserRouter>
      <HouseTheme house={house}>
        <Modal />
        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </Layout>
      </HouseTheme>
    </BrowserRouter>
  );
}

export default App;
