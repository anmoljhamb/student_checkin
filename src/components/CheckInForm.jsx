import React from "react";
import { useState } from "react";
import "./CheckInForm.css";
import FormInput from "./FormInput";

const CheckInForm = () => {
    const initalForm = {
        name: "",
        rollNumber: "",
        checkInTime: "",
        checkOutTime: "",
    };

    const [form, setForm] = useState(initalForm);

    const inputs = [
        {
            id: 1,
            name: "rollNumber",
            type: "number",
            placeholder: "Roll Number",
            label: "Roll Number",
            errorMessage: "",
            required: true,
        },
        {
            id: 2,
            name: "name",
            type: "text",
            placeholder: "Student Name",
            label: "Student Name",
            errorMessage: "",
            required: true,
        },
        {
            id: 3,
            name: "checkInTime",
            type: "datetime-local",
            placeholder: "Check In Time",
            label: "Check In Time",
            errorMessage: "",
            required: true,
        },
        {
            id: 4,
            name: "checkOutTime",
            type: "datetime-local",
            placeholder: "Check Out Time",
            label: "Check Out Time",
            errorMessage: "",
            required: true,
        },
    ];

    const handleOnChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        setForm(initalForm);
    };

    return (
        <div className="studentForm">
            <form onSubmit={handleOnSubmit}>
                <h1>Register</h1>
                {inputs.map((el) => (
                    <FormInput
                        key={el.id}
                        {...el}
                        value={form[el.name]}
                        onChange={handleOnChange}
                    />
                ))}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default CheckInForm;