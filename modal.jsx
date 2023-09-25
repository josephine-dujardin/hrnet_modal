import React from 'react';

/**
 * A modal component for creating an employee profile.
 *
 * @param {Object} props - The component's props.
 * @param {boolean} props.isOpen - Indicates whether the modal is open or closed.
 * @param {function} props.openClose - A callback function to toggle the modal's open/close state.
 * @param {string} props.content - The content to display within the modal.
 *
 * @returns {JSX.Element} - The rendered modal component.
 */
function Modal({ isOpen, openClose, content }) {

    /**
     * Opens the modal.
     *
     * @function
     * @returns {void}
     */
    const toggleModal = () => {
        openClose();
    };

    return (
        React.createElement('div', { className: 'modal-container' },
            isOpen && (
                React.createElement('div', { className: 'modal' },
                    React.createElement('div', { className: 'modal-content' },
                        React.createElement('span', { className: 'close', onClick: toggleModal }, '\u00D7'), // \u00D7' represents the '×' character
                        React.createElement('p', { className: 'modal-text' }, content)
                    )
                )
            )
        ));
}

export default Modal;
