import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
}

export default App;
