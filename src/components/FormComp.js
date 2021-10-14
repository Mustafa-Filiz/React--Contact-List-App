import { AccountCircleRounded, Phone } from '@mui/icons-material';
import {
    Button,
    ButtonGroup,
    InputAdornment,
    Paper,
    TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    formContainer: {
        width: 400,
        padding: 20,
    },
});

const FormComp = ({ contact, setContact, handleFormSubmit }) => {
    const classes = useStyles();


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setContact({...contact, [name] : value.toUpperCase() })
    }

    return (
        <Paper elevation={12} className={classes.formContainer}>
            <form
                onSubmit={handleFormSubmit}
                style={{
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}
            >
                <TextField
                    variant="filled"
                    label="Name"
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={handleInputChange}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleRounded />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    variant="filled"
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={contact.phone}
                    onChange={handleInputChange}
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Phone />
                            </InputAdornment>
                        ),
                    }}
                />
                <ButtonGroup variant="contained" fullWidth>
                    <Button type="submit" disabled={contact?.id ? true : false}>Add</Button>
                    <Button type="submit" color="secondary" disabled={contact?.id ? false : true}>
                        Update
                    </Button>
                </ButtonGroup>
            </form>
        </Paper>
    );
};

export default FormComp;
