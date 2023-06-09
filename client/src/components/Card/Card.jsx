import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";
import { faCircleInfo, faCircleXmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

const cardName = {
  color: "rgb(178, 223, 40)",
  padding: "0 20px 0 20px",
};

export default function Card(props) {
  const { name, gender, image, status, origin, species, id, showCloseButton } = props;
  
  const myFavorites = useSelector(state => state.myFavorites)
  
  const dispatch = useDispatch();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
  }, [myFavorites, props.id]);

  return (
    <div className="card-container">
      <div className="btns-cont">
        {
          isFav ? (
            <button 
              className="btn-fav btn-true"
              onClick={handleFavorite}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          ) : (
            <button 
              className="btn-fav btn-false"
              onClick={handleFavorite}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          )
        }
        {showCloseButton && (
          <button
            className="btn-close"
            onClick={() => {
              props.onClose(id);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} shake />
          </button>
        )}
      </div>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img className="image" src={image} alt="" />
            <h2 className="image-title" style={cardName}>
              {name}
            </h2>
          </div>
          <div className="flip-card-back">
            <h2>More Info</h2>
            <Link
              to={`/detail/${props.id}`}
              state={{ data: { name, gender, image, status, origin, species } }}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                bounce
                className="info-icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}