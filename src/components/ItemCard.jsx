import "./ItemCard.css";


function ItemCard( { props }) {
   console.log(props.name);            //debugging statement
  return ( 
        <div className="cards__container">
            <h2 className="cards__title"> {props.name}</h2>
            <img src={props.link} alt={props.name} className="cards__image" />  
        </div>
    );
}

export default ItemCard;