import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Detail.css";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const Detail = (props) => {
    const {id} = useParams()
    const [character, setCharacter] = useState()
    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id]);

  let { state } = useLocation();
  const {data} = state;
  
  return (
    <div className="detail-cont">
      <div className="det-left">
        <img className="det-img" src={data.image} alt="" />
      </div>
      <div className="separador"></div>
      <div className="det-right">
        <div className="btn-detail">
        <Link to='/home'>
          <button
            className="btn-close-det"
            onClick={() => {
              props.onClose(data.id);
            }}
          >
            <FontAwesomeIcon className="btn-close-size" icon={faCircleLeft} />
          </button>
        </Link>

        </div>
        <div className="info-data">
        <h1>{data.name}</h1>
        <ul className="info-cont">
          <li>{data.species}</li>
          <hr />
          <li>{data.gender}</li>
          <hr />
          <li>{data.status}</li>
          <hr />
          <li>{data.origin}</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
