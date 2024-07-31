import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { UserProvider } from "./components/UserContext";
import UserProfile from "./pages/UserProfile";
function App() {
  return (

    <UserProvider>
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user-profile" element={<UserProfile/>}/>
        </Routes>
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;
