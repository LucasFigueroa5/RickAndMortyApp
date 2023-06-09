import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import '../Card/Card.css'


const Favorites = ({onClose}) => {
  const { myFavorites } = useSelector(state => state);
  return (
    <div>
      {
        myFavorites.map((character) => (
          <Card
          name={character.name} 
          id={character.id}
          key={character.id}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
          onClose={onClose}
          showCloseButton={false}
          />))
      }    
      
    </div>
  );
};

export default Favorites;



// <div className='cards-container'>
//       {myFavorites.map((character, index) => {
//         const { name, gender, image, status, origin, species, id } = character;

//         return (
//           <div key={index} className='fav-cont'>
//             <div className='card-container'>
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <img className="image" src={image} alt="" />
//                   <h2 className="image-title">{name}</h2>
//                 </div>
//                 <div className="flip-card-back">
//                   <h2>More Info</h2>
//                   <NavLink
//                     to={{
//                       pathname: `/detail/${id}`,
//                       state: { data: { name, gender, image, status, origin, species } }
//                     }}
//                   >
//                     <FontAwesomeIcon
//                       icon={faCircleInfo}
//                       className="info-icon"
//                       style={{ animation: 'bounce' }}
//                     />
//                   </NavLink>
//                 </div>
//               </div>
//             </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>