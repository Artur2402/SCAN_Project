import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import Authorization from "./Components/Authorization/Auth";
import Search from "./Components/Search/Search";
import Result from "./Components/Result/Result";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const routesData = [
  { path: "*", element: <Main /> },
  {path: "/error", element: <Error/>},
  { path: "/auth", element: <Authorization /> },
  { path: "/search", element: <Search /> },
  { path: "/result", element: <Result /> },
];

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <main>
            <Routes>
              {routesData.map((route, index) => (
                  <Route key={index} path={route.path} element={route.element}/>
              ))}
            </Routes>
          </main>
          <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
