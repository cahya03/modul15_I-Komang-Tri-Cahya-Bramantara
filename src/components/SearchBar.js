import { Header } from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div Name="container">
        <Header />
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Search Book</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(typing) => setText(typing.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={() => {
                  navigate("/search/" + text);
                }}
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
};
