# Modal Component for HRnet Application

## Description
The modal dialog created with React component, to confirm when new employee records are created.

## Prerequisites:

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation
- Clone the repo and run the command: `$ cd hrnet_modal`
- Install the npm packages (described in package.json): `$ npm install`
- Launch the application: `$ npm start`
- Open http://localhost:3000 to view it in your browser.

## Usage
This component is designed for use within a React application (it comes from the [HRnet application] (https://github.com/josephine-dujardin/hrnet)).
You can use it in your own application and add functions and styling for further customization.

## Components

### Modal
A component that represents a simple modal window.

#### Usage
```jsx
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
