import "./ItemCard.css";


function ItemCard( { props, onCardClick }) {
  // console.log(props.name);            //debugging statement
   const cardClickPreview = () => {
    onCardClick(props);
    //console.log(`inside item card func:`, props);     //debugging
    //console.log(props.imageUrl);    //debugging
   }

  return ( 
        <div className="cards__container">
            <h2 className="cards__title"> {props.name}</h2>
            <img src={props.imageUrl} 
                      alt={props.name} 
                      className="cards__image" 
                      onClick={ cardClickPreview } />  
        </div>
    );
}

export default ItemCard;