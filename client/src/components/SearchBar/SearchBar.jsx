import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faUser } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(id);
    setId("");
    navigate("/home");
  };

  return (
    <div className="search-cont">
      <form onSubmit={handleSearch}>
        <div>
          <input
            value={id}
            onChange={handleChange}
            className="searcher"
            type="search"
            placeholder="Buscar..."
          />
          <button type="submit" className="btnAdd">
            <FontAwesomeIcon
              className="btn-add"
              icon={faCirclePlus}
              beatFade
              style={{
                color: "black",
                fontSize: "2em",
              }}
            />
          </button>
        </div>
      </form>
      <button type="submit" className="btnAdd">
          Random
        </button>
    </div>
  );
}
