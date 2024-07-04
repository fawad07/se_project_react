import "./ModalWithForm.css";

function ModalWithForm ({ children, buttonText, titleText, activeModal, onModalCloseButtonClick }) {
    return (
        <>
        <div className={`modal ${ activeModal === "Add-Garment" ? "modal_opened" : " "}` }>
            <div className="modal__content">
            <h2 className="modal__title">{ titleText }</h2>
            <button type="button"
                         className="modal__close"
                         onClick={ onModalCloseButtonClick }>CLOSE</button>
            <form className="modal__form">
                {children}
                <button className="modal__submit" 
                              type="submit"> { buttonText}</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default ModalWithForm