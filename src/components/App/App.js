import "../../css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../Login/Login";
import Form from "../form/form";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
