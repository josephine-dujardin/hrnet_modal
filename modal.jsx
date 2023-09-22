import React, { useEffect, useState } from 'react';

/**
 * A modal component for creating an employee profile.
 *
 * @param {Object} props - The component's props.
 * @param {string} props.firstName - The employee's first name.
 * @param {string} props.lastName - The employee's last name.
 * @param {string} props.department - The department in which the employee works.
 * @param {string} props.street - The street address of the employee.
 * @param {string} props.city - The city of the employee.
 * @param {string} props.state - The state of the employee.
 * @param {string} props.zipCode - The ZIP code of the employee.
 * @param {function} props.onSubmit - A callback function to be called on form submission.
 *
 * @returns {JSX.Element} - The rendered modal component.
 */
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

    /**
     * Validates the form fields.
     *
     * @function
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
     *
     * @function
     * @returns {void}
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
        React.createElement('div', { className: 'modal-container' },
            React.createElement('button', { className: 'save', onClick: handleFormSubmit }, 'Save'),
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
