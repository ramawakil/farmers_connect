import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: '#03A9F4',
            light: '#B3E5FC',
            dark: '#0288D1',
            text: '#000000',
        },
        accent: {
            main: '#FF9800',
            light: '#FFB74D',
            dark: '#F57C00',
            text: '#212121',
        },
        secondary: {
            main: '#4CAF50',
            light: '#81C784',
            dark: '#388E3C',
            text: '#212121',
            button: {
                main: '#4CAF50',
                light: '#81C784',
                dark: '#388E3C',
                text: '#ffffff',
            },
        },
        background: {
            default: '#fafafa',
            cloud: '#d8d7d3'
        },
        icon: {
            main: '#757575',
        },
        white: {
            main: '#FFFFFF',
        },
    },

});


export default theme;