import "./ModalWithForm.css";

function ModalWithForm({
	children,
	buttonText,
	titleText,
	onModalCloseButtonClick,
	isOpen,
	onSubmit
}) {
	return (
		<div className={`modal ${isOpen ? "modal_opened" : " "}`}>
			<div className="modal__content">
				<h2 className="modal__title">{titleText}</h2>
				<button
					type="button"
					className="modal__close"
					onClick={onModalCloseButtonClick}
				></button>
				<form className="modal__form" onSubmit={onSubmit}>
					{children}
					<button className="modal__submit" type="submit">
						{" "}
						{buttonText}
					</button>
				</form>
			</div>
		</div>
	);
}

export default ModalWithForm;
