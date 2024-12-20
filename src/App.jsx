import "./App.css";
import { Route, BrowserRouter, Routes, Outlet } from "react-router-dom";
import { Header } from "./Components/Header";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Footer from "./Components/Footer";
import News from "./Pages/News/News";
import Careers from "./Pages/Careers/Careers";
import Privacy from "./Pages/Privacy/Privacy";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="aboutus" element={<AboutUs />}></Route>
            <Route path="news" element={<News />}></Route>
            <Route path="careers" element={<Careers />} />
            <Route path="privacypolicy" element={<Privacy />} />
            <Route path="termsconditions" element={<TermsConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const Layout = () => {
  return (
    <div id="app" className=" overflow-x-hidden ">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};
