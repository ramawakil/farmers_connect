import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import lottie from 'lottie-web';
import loaderAnimation from '../../app/animations/loader.json';
import authApi from "../api/auth";
import {useNavigate} from "react-router-dom";
import UserContext from "../context/userContext";


function HomePage(props) {
    const {user, setUser} = React.useContext(UserContext);
    const anime = React.useRef(null);
    const navigate = useNavigate();


    const whichUser = async () => {
        // reroute according to label
        if (user.is_farmer) {
            navigate('/farmer');
        } else if (user.is_company) {
            navigate('/company');
        } else if (user.is_leader) {
            navigate('/farmer-leader');
        }
    }

    const fetchUser = async () => {
        try {
            const res = await authApi.fetchUser();
            setUser(res.data);
        } catch (e) {
            window.location = "/login";
        }
    };


    React.useEffect(() => {


        // initialize animation
        lottie.loadAnimation({
            container: anime.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: loaderAnimation,
        });
       fetchUser();

    }, []);

    React.useEffect(() => {
        if (user) {
            whichUser();
        }

    }, [user]);




    return (
        <Container maxWidth='sm'>
            <Box sx={{
                alignItems: 'center',
                textAlign: 'center',
            }}>
                <div ref={anime}></div>
            </Box>
            <Typography variant='subtitle1' gutterBottom textAlign='center'>
                Please wait ...
            </Typography>
        </Container>
    );
}

export default HomePage;