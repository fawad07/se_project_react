import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";


function Profile({ handleCardClick }) {
    return(
        <div className="profile">
            <section className="profile__sidebar">
                <SideBar></SideBar>

            </section>

            <section className="profile__clothe-items">
                <ClothesSection handleCardClick={handleCardClick}> </ClothesSection>
            </section>

        </div>
    );
}

export default Profile