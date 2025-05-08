import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Master from "./Master";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Master/>}>
          <Route path="" element={<Home/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
