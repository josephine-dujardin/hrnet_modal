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
``` 

#### Usage
Import the Modal component on your project
```jsx
import { Modal } from '@josephine-dujardin/hrnet_modal';
``` 
You can then use it within your project, as in the following example:

```jsx
import React, { useState } from 'react';
import { Modal } from '@josephine-dujardin/hrnet_modal';

function Home() {
    const [openModal, setOpenModal] = useState(false);

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <div className="container">
            <h2 className="home-title">Create Employee</h2>
            <form action="#" id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input
                    id="first-name"
                    type="text"
                />

                <label htmlFor="last-name">Last Name</label>
                <input
                    id="last-name"
                    type="text"
                />

                <button
                    className="modal-btn"
                    type="button"
                    onClick={() => setOpenModal(true)}
                >
                    Save
                </button>
            </form>

            {/* Modal component */}
            <Modal
                isOpen={openModal}
                openClose={handleModalClose}
                content={"Employee created"}
            />
        </div>
    );
}

export default Home;
``` 