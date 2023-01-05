import "./App.css";
import { CheckInForm, CurrentTime, StudentsList } from "./components";

function App() {
    return (
        <div className="App">
            <CheckInForm />
            <CurrentTime />
            {/* <StudentsList /> */}
        </div>
    );
}

export default App;
