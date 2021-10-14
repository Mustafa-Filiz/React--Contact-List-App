import { Delete, Edit } from '@mui/icons-material';
import {
    Avatar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemAvatar,
    Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    contactList : {
        width: 600,
        padding: 20
    }
})

const ContactList = () => {
    const classes = useStyles()
    return (
        <Paper elevation={12} className={classes.contactList}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Contact List
            </Typography>
            <List>
                <ListItem
                    secondaryAction={
                        <Box>
                            <IconButton edge="end" aria-label="edit">
                                <Edit />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                                <Delete />
                            </IconButton>
                        </Box>
                    }
                >
                    <ListItemAvatar>
                        <Avatar alt="Person Name" src="#" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Person Name"
                        secondary="Phone Number"
                    />
                </ListItem>
            </List>
        </Paper>
    );
};

export default ContactList;
