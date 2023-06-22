import React, { useEffect, useState } from 'react';

const Modal = () => {

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

    return (
        <div className="modal-container">
            <button className="save" onClick={openModal}>Save</button>
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
