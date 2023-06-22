import React, { useEffect, useState } from 'react';

function Modal(props) {
    const {
        firstName,
        lastName,
        department,
        street,
        city,
        state,
        zipCode,
        onSubmit
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    /**
     * Opens the modal.
     */
    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        /**
         * Adds or removes the 'modal-open' class to the body element based on the modal state.
         */
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isOpen]);

    /**
     * Closes the modal.
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    /**
     * Validates the form fields.
     * @returns {boolean} - Indicates whether the form is valid.
     */
    const validateForm = () => {
        return (
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            department.trim() !== '' &&
            street.trim() !== '' &&
            city.trim() !== '' &&
            state.trim() !== '' &&
            zipCode.trim() !== ''
        );
    };

    /**
     * Handles the form submission.
     * If the form is valid, it calls the onSubmit function and opens the modal.
     * Otherwise, it closes the modal.
     */
    const handleFormSubmit = () => {
        if (validateForm()) {
            onSubmit();
            openModal();
        } else {
            closeModal();
        }
    };

    return (
        <div className="modal-container">
            <button className="save" onClick={handleFormSubmit}>Save</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p className="modal-text">Employee Created!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;
