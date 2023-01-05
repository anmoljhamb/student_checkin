import { useEffect, useRef, useState } from "react";
import "./App.css";
import { CheckInForm, CurrentTime, StudentsList } from "./components";

function App() {
    const [students, setStudents] = useState([]);
    const studentsRef = useRef(students);

    useEffect(() => {
        console.log("onStudentsChange: ", students);
    }, [students]);

    return (
        <div className="App">
            <CheckInForm
                studentsState={[students, setStudents]}
                studentsRef={studentsRef}
            />
            <CurrentTime />
            <StudentsList students={students} />
        </div>
    );
}

export default App;
