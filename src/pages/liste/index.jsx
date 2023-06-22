import './liste.css';
import logo from "../../assets/logo.png";
import Header from '../../components/header';
import addUser from "../../assets/add-user.png";
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
// import employeesData from '../../data/employeesData.json';

const Liste = () => {
    // const employees = employeesData.employeesData;
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        /**
         * Retrieves the employees from local storage on component mount.
         */
        const storedEmployees = JSON.parse(localStorage.getItem('employees'));
        if (Array.isArray(storedEmployees)) {
            setEmployees(storedEmployees);
        } else {
            setEmployees([]);
        }
    }, []);

    // Columns titles for DataTable
    const columns = [
        { name: 'First Name', selector: (row) => row.firstName, sortable: true },
        { name: 'Last Name', selector: (row) => row.lastName, sortable: true },
        { name: 'Start Date', selector: (row) => row.startDate, sortable: true },
        { name: 'Department', selector: (row) => row.department, sortable: true },
        { name: 'Date of Birth', selector: (row) => row.dateOfBirth, sortable: true },
        { name: 'Street', selector: (row) => row.street, sortable: true },
        { name: 'City', selector: (row) => row.city, sortable: true },
        { name: 'State', selector: (row) => row.state, sortable: true },
        { name: 'Zip Code', selector: (row) => row.zipCode, sortable: true },
        {
            name: 'Actions',
            cell: (row) => (
                // Button to delete an employee
                <div>
                    <button className='delete-btn' onClick={() => handleDelete(row)}>Supprimer</button>
                </div>
            ),
        },
    ];

    const handleDelete = (employee) => {
        // Display a confirmation dialog for deleting the employee
        if (window.confirm('Are you sure you want to delete this employee?')) {
            // Remove the employee from the employees array
            const updatedEmployees = employees.filter((emp) => emp.id !== employee.id);
            setEmployees(updatedEmployees);
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
            // Display a confirmation message 
            console.log("Delete employee", employee);
        }
    };

    return (
        <>
            {/* Header component with logo, title, icon link, and text */}
            <Header logo={logo} title={"icon made by Icon mania"} iconlink={"https://www.flaticon.com/authors/icon-mania"} link={"/"} icon={addUser} text={"Create new Employee"} />
            <div className="container-list">
                <h2 className="title">Current Employees</h2>
                <div className="main">
                    <DataTableExtensions
                        columns={columns}
                        data={employees}
                        print={false}
                        export={false}
                        filterPlaceholder="Search"
                    >
                        <DataTable
                            title="Parameter List"
                            noHeader
                            pagination
                            highlightOnHover
                        />
                    </DataTableExtensions>
                </div>
            </div>
        </>
    );
};

export default Liste;
