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
};

export default Modal;
