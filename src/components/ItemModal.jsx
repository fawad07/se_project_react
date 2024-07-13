import "./ItemModal.css";

function ItemModal( {activeModal, card, onModalCloseButtonClick }) {
    return (
        <div className={`modal ${ activeModal === "preview" ? "modal_opened" : " "}` }>
            <div className="modal__content modal__content_type-image">
                <button type="button"
                         className="modal__close"
                         onClick={ onModalCloseButtonClick }>
                </button>
                <img src={card.link} alt={card.name} className="modal__image" />
                <div className="modal__footer">
                    <h2 className="modal__caption">{card.name}</h2>
                    <p className="modal__weather">Weather: {card.weather}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;