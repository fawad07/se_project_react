import React, {useState} from 'react';

import ModalWithForm from "./ModalWithForm";

const AddItemModal = ( {onModalCloseButtonClick, activeModal, onAddItem}) => {

    const [ name, setName ] = useState('');
    /*const [ url, setUrl ] = useState('');*/
    const [ imageUrl, setImageUrl ] = useState('');
    const [ weather, setWeather ] = useState('');

    const handleNameChange = (e) => {
        console.log(e.target.value);    //debugging
        setName(e.target.value);
    };

    const handleUrlChange = (e) => {
        console.log(e.target.value);    //debugging
        setImageUrl(e.target.value);
    };

    const handleWeatherChange = (e) => {
        console.log(e.target.value);    //debugging
        setWeather(e.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onAddItem({ name, imageUrl, weather });
        setName(' ');
        setImageUrl(' ');
        setWeather(' ');
    };

    return(
        <ModalWithForm
            titleText="New Garment"
            buttonText="Add Garment"
            activeModal= {activeModal}      /*{isOpen}*/
            onModalCloseButtonClick={onModalCloseButtonClick}
            isOpen={activeModal === "Add-Garment"}
            onSubmit={handleOnSubmit}
        >
            <label htmlFor="name" className="modal__label">
                Name
                <input
                    type="text"
                    className="modal__input"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </label>
            <label htmlFor="imageURL" className="modal__label">
                Image
                <input
                    type="url"
                    className="modal__input"
                    id="imageURL"
                    placeholder="image url"
                    value={imageUrl}
                    onChange={handleUrlChange}
                />
            </label>
            <fieldset className="modal__radio-btns">
                <legend className="modal__legend">
                    Select Weather Type:
                </legend>
                <label
                    htmlFor="hot"
                    className="modal__label modal__label_type_radio"
                >
                    <input
                        type="radio"
                        className="modal__radio-input"
                        id="hot"
                        name="radio"
                        value="hot"
                        onChange={handleWeatherChange}
                    />
                    Hot
                </label>
                <label
                    htmlFor="warm"
                    className="modal__label modal__label_type_radio"
                >
                    <input
                        type="radio"
                        className="modal__radio-input"
                        id="warm"
                        name="radio"
                        value="warm"
                        onChange={handleWeatherChange}
                    />
                    Warm
                </label>
                <label
                    htmlFor="cold"
                    className="modal__label modal__label_type_radio"
                >
                    <input
                        type="radio"
                        className="modal__radio-input"
                        id="cold"
                        name="radio"
                        value="cold"
                        onChange={handleWeatherChange}
                    />
                    Cold
                </label>
            </fieldset>
		</ModalWithForm>

    );
}

export default AddItemModal;