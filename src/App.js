// Pages, Components
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        {["/game/:id", "/"].map(pathname => {
          return (
            <Route key={pathname} path={pathname} element={<Home />} />
          )
        })}
      </Routes>
    </div>
  );
}

export default App;
