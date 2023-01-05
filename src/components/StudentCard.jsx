import React from "react";

const StudentCard = ({ student }) => {
    return (
        <div className="studentInfo">
            <div className="studentRoll">
                <p>Roll Number</p>
                <span>: {student.rollNumber}</span>
            </div>
            <div className="studentName">
                <p>Name</p>
                <span>: {student.name}</span>
            </div>
            <div className="checkInTime">
                <p>Check In Time</p>
                <span>: {student.checkInTime}</span>
            </div>
            <div className="checkOutTime">
                <p>Check Out Time: </p>
                <span>: {student.checkOutTime}</span>
            </div>
        </div>
    );
};

export default StudentCard;
