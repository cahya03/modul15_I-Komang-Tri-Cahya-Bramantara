import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import { Details } from "./components/Details";
import { Search } from "./components/Search";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details/:isbn" element={<Details />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/search/:q" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
