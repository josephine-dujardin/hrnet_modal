# Modal Component for HRnet Application

## Description
The modal dialog created with React component, to confirm when new employee records are created.

## Prerequisites:

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)

## Installation
- Install the package: `$ npm i @josephine-dujardin/hrnet_modal`

## Usage
This component is designed for use within a React application (it comes from the [HRnet application] (https://github.com/josephine-dujardin/hrnet)).
You can use it in your own application and add functions and styling for further customization.

## Components

### Modal
A component that represents a simple modal window.

```jsx
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
``` 

#### Usage
Import the Modal component on your project
```jsx
import { Modal } from '@josephine-dujardin/hrnet_modal';
``` 
You can then use it within your project

```jsx
<Modal />
``` 