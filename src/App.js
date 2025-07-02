import "./App.css";
import EmployeeFeedbackForm from "./components/EmployeeRegisterationForm";
import StudentRegisterationForm from "./components/StudentRegisterationForm";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Form management</h1>
        <div className="tabs">
          <Link to="/student" className="tab-link">
            Student
          </Link>
          <Link to="/employe" className="tab-link">
            Employe
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/student"></Navigate>} />
          <Route path="/student" element={<StudentRegisterationForm />} />
          <Route path="/employe" element={<EmployeeFeedbackForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
