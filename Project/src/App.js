import { Route , Routes , BrowserRouter } from "react-router-dom";

import SignUp from './Signup';
import Login from "./login";
import Home from "./Home";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/log" element={<Login/>}/>
    <Route path="/up" element={<SignUp/>}/>
    </Routes>
    );
}

export default App;