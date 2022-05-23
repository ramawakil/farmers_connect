import {Route, Routes} from "react-router-dom";
import Login from "./app/pages/login";
import AppNavBar from "./app/components/AppNavBar";

function App() {
  return (
    <>
    {/* here we should have three basic routes for farmer | farm Leader | Company Employee  */}
      <AppNavBar/>
        <Routes>
          <Route path="/" element={<Login/>}/>

      </Routes>
    </>
  );
}

export default App;
