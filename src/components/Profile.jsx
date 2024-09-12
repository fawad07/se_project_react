import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";


function Profile({ handleCardClick, clothingItems, handleAddClick}) {
    return(
        <div className="profile">
            <section className="profile__sidebar">
                <SideBar></SideBar>

            </section>

            <section className="profile__clothe-items">
                <ClothesSection 
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems} 
                    handleAddClick={handleAddClick}>
                </ClothesSection>
            </section>

        </div>
    );
}

export default Profile