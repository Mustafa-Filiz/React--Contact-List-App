import { Delete, Edit, Folder } from '@mui/icons-material';
import {
    Avatar,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
    ListItemAvatar,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const ContactList = () => {
    return (
        <Grid item xs={12} md={6}>
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
        </Grid>
    );
};

export default ContactList;
