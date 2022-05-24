import {Route, Routes} from "react-router-dom";
import Login from "./app/pages/login";
import AppNavBar from "./app/components/AppNavBar";
import UserContext from "./app/context/userContext";
import {useEffect, useState} from "react";


function App() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        authFetch();
    }, []);

    const authFetch = async () => {
        const jwt = localStorage.getItem('tokenKey');
    }

  return (
    <UserContext.Provider value={{ user, setUser }}>
    {/* here we should have three basic routes for farmer | farm Leader | Company Employee  */}
      <AppNavBar/>
        <Routes>
          <Route path="/" element={<Login/>}/>

      </Routes>
    </UserContext.Provider>
  );
}

export default App;
