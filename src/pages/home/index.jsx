import "./home.css";
import Header from '../../components/header';
import logo from "../../assets/logo.png";
import group from "../../assets/group.png";
import React, { useState } from 'react';
import Modal from "../../components/modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import optionsData from '../../data/optionsData.json';

const Home = () => {
    // State variables
    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    // Form validation function
    const validateForm = () => {
        return (
            firstName !== '' &&
            lastName !== '' &&
            department !== '' &&
            street !== '' &&
            city !== '' &&
            state !== '' &&
            zipCode !== ''
        );
    };

    // Options from data source
    const departmentOptions = optionsData.departmentOptions;
    const stateOptions = optionsData.state;

    // Save employee function
    const saveEmployee = () => {
        if (validateForm()) {
            const employee = {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth.toLocaleDateString(),
                startDate: startDate.toLocaleDateString(),
                department: department,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode
            };
            const updatedEmployees = [...employees, employee];
            setEmployees(updatedEmployees);
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
            resetForm();
        }
    };

    // Reset form function
    const resetForm = () => {
        setFirstName('');
        setLastName('');
        setDateOfBirth(new Date());
        setStartDate(new Date());
        setDepartment('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
    };

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        saveEmployee();
        resetForm();
    };

    // Modal submit handler
    const handleModalSubmit = () => {
        saveEmployee();
        resetForm();
    };

    return (
        <>
            <Header logo={logo} title={"icon made by yaicon"} iconlink={"https://www.flaticon.com/authors/yaicon"} link={"/liste"} icon={group} text={"View Current Employees"} />
            <div className="container">
                <h2 className="home-title">Create Employee</h2>
                {/* Form to create an employee */}
                <form action="#" id="create-employee" onSubmit={handleSubmit}>
                    <label htmlFor="first-name">First Name</label>
                    <input
                        id="first-name"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        id="last-name"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePicker id="date-of-birth" selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker id="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <label htmlFor="state">State</label>
                        <select
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            {stateOptions.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        {departmentOptions.map((option) => (
                            <option key={option}>{option}</option>
                        ))}
                    </select>
                    {/* Modal component with form data passed as props */}
                    <Modal
                        firstName={firstName}
                        lastName={lastName}
                        department={department}
                        street={street}
                        city={city}
                        state={state}
                        zipCode={zipCode}
                        onSubmit={handleModalSubmit}
                    />
                </form>
            </div>
        </>
    );
};

export default Home;
