import React from "react";

const StudentCard = ({ student }) => {
    const convertTime = (time) => {
        time = new Date(time);
        return time.toLocaleString();
    };

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
                <span>: {convertTime(student.checkInTime)}</span>
            </div>
            <div className="checkOutTime">
                <p>Check Out Time: </p>
                <span>: {convertTime(student.checkOutTime)}</span>
            </div>
        </div>
    );
};

export default StudentCard;
