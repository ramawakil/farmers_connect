import {Route, Routes} from "react-router-dom";
import Login from "./app/pages/login";
import AppNavBar from "./app/components/AppNavBar";
import UserContext from "./app/context/userContext";
import {useEffect, useState} from "react";
import authApi from './app/api/auth';
import FarmerHome from "./app/pages/farmer/farmerHome";
import HomePage from "./app/pages/home";
import CompanyHome from "./app/pages/companyEmployee/companyHome";
import FarmLeaderHome from "./app/pages/farmLeader/farmLeaderHome";
import Profile from "./app/pages/profile";
import {styled} from "@mui/styles";
import {Toolbar} from "@mui/material";
import AppLoadingScreen from "./app/components/AppLoadingScreen";
import LoadingContext from "./app/context/loadingContext";


const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),

        marginLeft: `0px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

function App() {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);


    return (
        <>
            <LoadingContext.Provider value={{ loading, setLoading }}>
            <UserContext.Provider value={{user, setUser}}>
                {/* here we should have three basic routes for farmer | farm Leader | Company Employee  */}
                <AppNavBar/>
                <AppLoadingScreen loading={loading} />
                <Toolbar />
                <Main open={false}>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/farmer/*' element={<FarmerHome/>}/>
                    <Route path='/company/*' element={<CompanyHome/>}/>
                    <Route path='/farmer-leader' element={<FarmLeaderHome/>}/>
                    <Route path='/profile' element={<Profile/>}/>

                </Routes>
                </Main>
            </UserContext.Provider>
            </LoadingContext.Provider>
        </>
    );
}

export default App;
