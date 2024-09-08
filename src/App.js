import PeoplePage from "./pages/PeoplePage/PeoplePage";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PersonPage from "./pages/PersonPage/PersonPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import FavoritePage from "./pages/FavoritePage/FavoritePage";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/fail" element={<ErrorMessage />} />
          <Route path="/favorites" element={<FavoritePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
