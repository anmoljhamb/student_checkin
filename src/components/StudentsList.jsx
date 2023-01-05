import React from "react";
import StudentCard from "./StudentCard";
import "./StudentsList.css";

const StudentsList = ({ students }) => {
    return (
        <div className="studentsList">
            <h3>
                Students Online{": "}
                <span id="studentNumber">{Object.keys(students).length}</span>
            </h3>
            <div className="list">
                <ul>
                    {Object.keys(students).map((key) => {
                        const student = students[key];
                        return (
                            <li key={student.rollNumber}>
                                <StudentCard student={student} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default StudentsList;
