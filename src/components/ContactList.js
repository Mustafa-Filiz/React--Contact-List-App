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
    CircularProgress,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useFetchContacts } from '../utils/Firebase';

const useStyles = makeStyles({
    contactList: {
        width: 600,
        padding: 20,
    },
});

const ContactList = () => {
    const classes = useStyles();

    const { contactList, loading } = useFetchContacts();
    console.log(loading ? 'loading' : contactList);

    return (
        <Paper elevation={12} className={classes.contactList}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Contact List
            </Typography>
            <List>
                {loading ? (
                    <CircularProgress />
                ) : (
                    contactList.map((contact) => {
                        return (
                            <ListItem key={contact.id}
                                secondaryAction={
                                    <Box>
                                        <IconButton
                                            edge="end"
                                            aria-label="edit"
                                        >
                                            <Edit color="success" />
                                        </IconButton>
                                        <IconButton
                                            edge="end"
                                            aria-label="delete"
                                        >
                                            <Delete color="error" />
                                        </IconButton>
                                    </Box>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar alt={contact.name} src="#" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={contact.name}
                                    secondary={contact.phone}
                                />
                            </ListItem>
                        );
                    })
                )}
            </List>
        </Paper>
    );
};

export default ContactList;
