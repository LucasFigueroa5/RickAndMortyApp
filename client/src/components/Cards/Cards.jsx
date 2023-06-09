import Card from '../Card/Card';
import './Cards.css'

export default function Cards({characters, onClose}) {
   return (
      <div className='cards-container'>
         {
            characters.map((character) => (
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
            showCloseButton={true}
            />))
         }
      </div>
   )
}
