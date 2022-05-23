import React from 'react';
import {Card, CardActions, CardContent, CardHeader, Divider, Paper, Typography} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AppButton from "./AppButton";
import {makeStyles} from "@mui/styles";
import AppSpaceBetween from "./AppSpaceBetween";


const useStyles = makeStyles(theme => ({
    root: {

    },
    card: {
        minHeight: '200px',
        cursor: 'pointer',

    },
    cardAction: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardBody:{
        padding: theme.spacing(2),
        textAlign: 'center',
    },
}));

function AppCard({ avatar, title, subtitle, description, action, actionTitle, isTable = false, tableDescription = null }) {
    const classes = useStyles();

    return (
        <Paper elevation={5} className={classes.root} onClick={action} >
            <Card className={classes.card}>
                <CardHeader
                    avatar={avatar}
                    title={title}
                    subheader={subtitle}
                />
                <Divider />
                <CardContent className={classes.cardBody} >
                    <Typography variant='body2' color='text.secondary' >
                        {isTable ? (
                            tableDescription.map((item, index) => (
                                <AppSpaceBetween key={index} left={item.left} right={item.right} />
                            ))
                        ) : (description)}
                    </Typography>
                </CardContent>
            </Card>
        </Paper>
    );
}

export default AppCard;