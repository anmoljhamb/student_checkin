import React from "react";
import { useState } from "react";
import "./CheckInForm.css";
import FormInput from "./FormInput";
import FormValidator from "../validators";

const CheckInForm = ({ studentsState, studentsRef }) => {
    const [students, setStudents] = studentsState;
    const [disabled, setDisabled] = useState(false);

    const initalForm = {
        name: "",
        rollNumber: "",
        checkInTime: "",
        checkOutTime: "",
    };

    const [form, setForm] = useState(initalForm);

    const errors = {
        name: "A name cannot have any special characters, and needs to be 1 letter and more.",
        rollNumber:
            "The Given rollNumber already exists. If used again, it will rewrite the original one.",
        checkInTime: "CheckIn Time cannot be more than the checkout time.",
        checkOutTime:
            "Checkout Time cannot be less than equal to current time.",
    };

    const Inputs = [
        {
            id: 0,
            name: "rollNumber",
            type: "number",
            placeholder: "Roll Number",
            label: "Roll Number",
            errorMessage: "",
            required: true,
        },
        {
            id: 1,
            name: "name",
            type: "text",
            placeholder: "Student Name",
            label: "Student Name",
            errorMessage: "",
            required: true,
        },
        {
            id: 2,
            name: "checkInTime",
            type: "datetime-local",
            placeholder: "Check In Time",
            label: "Check In Time",
            errorMessage: "",
            required: true,
        },
        {
            id: 3,
            name: "checkOutTime",
            type: "datetime-local",
            placeholder: "Check Out Time",
            label: "Check Out Time",
            errorMessage: "",
            required: true,
        },
    ];

    const [inputs, setInputs] = useState(Inputs);

    const handleOnChange = (event) => {
        const tempForm = { ...form, [event.target.name]: event.target.value };
        const formValidator = new FormValidator(tempForm, studentsRef.current);
        let expr = formValidator.validate(event.target.name);

        if (event.target.name == "checkOutTime") {
            expr = expr || formValidator.validate("checkInTime");
        }

        setDisabled(!expr);

        if (!expr) {
            console.log("Invalid For ", event.target.id, event.target.name);
            setInputs((oldInput) => {
                oldInput[event.target.id].errorMessage =
                    errors[event.target.name];
                return oldInput;
            });
        } else {
            setInputs((oldInputs) => {
                if (event.target.name == "checkOutTime")
                    oldInputs[2].errorMessage = "";
                oldInputs[event.target.id].errorMessage = "";
                return oldInputs;
            });
        }

        setForm(tempForm);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Form: ", form);

        setStudents(() => {
            studentsRef.current = { ...students, [form.rollNumber]: form };
            return studentsRef.current;
        });

        setTimeout(() => {
            // Set a timeout to remove the currently added student when it's time expires.
            setStudents(() => {
                console.log(
                    `Deleting Student ${form.rollNumber} from `,
                    studentsRef.current
                );
                delete studentsRef.current[form.rollNumber];
                console.log("Deleted, students: ", studentsRef.current);
                return { ...studentsRef.current };
            });
        }, new Date(form.checkOutTime) - new Date());

        setForm(initalForm);
    };

    return (
        <div className="studentForm">
            <form onSubmit={handleOnSubmit}>
                <h1>Student Check In</h1>
                {inputs.map((el) => (
                    <FormInput
                        key={el.id}
                        {...el}
                        value={form[el.name]}
                        onChange={handleOnChange}
                    />
                ))}
                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    );
};

export default CheckInForm;
