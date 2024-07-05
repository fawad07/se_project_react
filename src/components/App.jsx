import { useState } from 'react';

import './App.css';
import Header from "./Header";
import Main from "./Main";
import ModalWithForm from "./ModalWithForm";
import ItemModal from './ItemModal';


function App() {
  const [weatherData, setWeatherData] = useState({type: "cold"});
  const [activeModal, setActiveModal] = useState(" ");
  const [selectedCard, setSelectedCard] = useState( {} );

const addButtonClick = () => {
  setActiveModal("Add-Garment");
}

const closeActiveModal = () => {
  setActiveModal( " " );
}

const cardClick = (card) => {
  setActiveModal("preview");
  setSelectedCard(card);
}

  return (
    <>
    <div className="page"> 
      <div className="page_content">
        <Header onAddButtonClick={ addButtonClick }></Header>
        <Main data={weatherData} handleCardClick={cardClick}></Main>
       </div>
       <ModalWithForm 
             titleText="New Garment" 
             buttonText="Add Garment" 
             activeModal={activeModal}
             onModalCloseButtonClick = { closeActiveModal }>        
       <label htmlFor="name" className="modal__label">Name {" "}
                    <input
                        type="text" 
                        className="modal__input" 
                        id="name"
                        placeholder="Name"
                    />
                </label>
                <label htmlFor="imageURL" className="modal__label">Image {" "}
                    <input
                        type="url" 
                        className="modal__input" 
                        id="imageURL"
                        placeholder="image url"
                    />
                </label>
                <fieldset className="modal__radio-btns">
                    <legend className="modal__legend">Select Weather  Type :</legend>
                    <label htmlFor="hot" className="modal__label modal__label_type_radio">
                        <input type="radio" 
                                    className="modal__radio-input" 
                                    id="hot"
                        /> HOT
                    </label>

                    <label htmlFor="warm" className="modal__label modal__label_type_radio">
                        <input type="radio" 
                                    className="modal__radio-input" 
                                    id="warm"
                        /> WARM
                    </label>

                    <label htmlFor="cold" className="modal__label modal__label_type_radio">
                        <input type="radio" 
                                    className="modal__radio-input" 
                                    id="cold"
                        /> COLD
                    </label>
                </fieldset>
        </ModalWithForm>    
        <ItemModal 
                    activeModal={activeModal}
                     card={selectedCard}
                     onModalCloseButtonClick = { closeActiveModal }>
        </ItemModal>
    </div>
    </>
  )
}

export default App
