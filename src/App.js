import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./view/LoginPage";
import { UploadPage } from "./view/UploadPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/uploads" element={<UploadPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
