import React, { useEffect, useState } from 'react';

/**
 * A modal component for creating an employee profile.
 * @returns {JSX.Element} - The rendered modal component.
 */
function Modal() {

    const [isOpen, setIsOpen] = useState(false);

    /**
     * Opens the modal.
     *
     * @function
     * @returns {void}
     */
    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        /**
         * Adds or removes the 'modal-open' class to the body element based on the modal state.
         *
         * @function
         * @returns {void}
         */
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [isOpen]);

    /**
     * Closes the modal.
     *
     * @function
     * @returns {void}
     */
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        React.createElement('div', { className: 'modal-container' },
            React.createElement('button', { className: 'save', onClick: openModal }, 'Save'),
            isOpen && (
                React.createElement('div', { className: 'modal' },
                    React.createElement('div', { className: 'modal-content' },
                        React.createElement('span', { className: 'close', onClick: closeModal }, '\u00D7'), // \u00D7' represents the '×' character
                        React.createElement('p', { className: 'modal-text' }, 'Employee Created!')
                    )
                )
            )
        ));
}

export default Modal;
