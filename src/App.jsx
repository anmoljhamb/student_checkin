import { useEffect, useState } from "react";
import "./App.css";
import { CheckInForm, CurrentTime, StudentsList } from "./components";

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        console.log("onStudentsChange: ", students);
    }, [students]);

    return (
        <div className="App">
            <CheckInForm studentsState={[students, setStudents]} />
            <CurrentTime />
            <StudentsList students={students} />
        </div>
    );
}

export default App;
