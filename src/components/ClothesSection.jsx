import { defaultClothingItems } from "../utils/constants.js";
import ItemCard from "./ItemCard.jsx";

import "./ClothesSection.css";

function ClothesSection({ handleCardClick, clothingItems, handleAddClick }) {
    return (
        <div className="clothes-section">
            <div className="clothes-section__data">
                <p className="clothes-section__items"> YOUR ITEMS</p>
                <button className="clothes-section__button"
                        onClick={handleAddClick}>
                        + Add New
                </button>
            </div>

            <div className="clothes-section__list">
                <ul className="cards__list">
                {clothingItems
                /*
                    .filter((item) => {
                        return item.weather === data.type;
                    })
                    */
                    .map((item) => {
                        return (
                            <ItemCard
                                key={item._id}
                                props={item}
                                onCardClick={handleCardClick}
                                clothingItems={clothingItems}
                            ></ItemCard>
                        );
                    })}
                ;
                </ul>
            </div>
        </div>
    );
}

export default ClothesSection;