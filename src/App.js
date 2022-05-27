import {Route, Routes} from "react-router-dom";
import Login from "./app/pages/login";
import AppNavBar from "./app/components/AppNavBar";
import UserContext from "./app/context/userContext";
import {useEffect, useState} from "react";
import authApi from './app/api/auth';
import FarmerHome from "./app/pages/farmer/farmerHome";
import HomePage from "./app/pages/home";


function App() {

    const [user, setUser] = useState(null);


    return (
        <>
            <UserContext.Provider value={{user, setUser}}>
                {/* here we should have three basic routes for farmer | farm Leader | Company Employee  */}
                <AppNavBar/>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/farmer/*' element={<FarmerHome/>}/>

                </Routes>
            </UserContext.Provider>
        </>
    );
}

export default App;
