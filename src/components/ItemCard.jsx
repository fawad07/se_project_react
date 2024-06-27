
function ItemCard( { props }) {
   console.log(props.name);            //debugging statement
  return ( 
        <div>
            <h2> {props.name}</h2>
            <img src={props.link} alt={props.name} />  
        </div>
    );
}

export default ItemCard;