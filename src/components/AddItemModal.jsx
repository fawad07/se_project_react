import React from 'react';

import ModalWithForm from "./ModalWithForm";

const AddItemModal = (onModalCloseButtonClick, isOpen, onAddItem) => {

    return(
        <ModalWithForm

            titleText="New Garment"
            buttonText="Add Garment"
            activeModal={isOpen}
            handleOnClose={onModalCloseButtonClick}
            isOpen={activeModal === "Add-Garment"}
        >
            <label htmlFor="name" className="modal__label">
                Name
                <input
                    type="text"
                    className="modal__input"
                    id="name"
                    placeholder="Name"
                />
            </label>
            <label htmlFor="imageURL" className="modal__label">
                Image
                <input
                    type="url"
                    className="modal__input"
                    id="imageURL"
                    placeholder="image url"
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
                    />
                    Cold
                </label>
            </fieldset>
		</ModalWithForm>

    );
}

export default AddItemModal;