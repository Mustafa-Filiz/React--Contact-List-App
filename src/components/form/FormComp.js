import { AccountCircleRounded, Phone } from '@mui/icons-material';
import { Button, ButtonGroup, InputAdornment, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    formContainer: {
        width: 400,
    },
});

const FormComp = () => {
    const classes = useStyles();

    return (
        <Box className={classes.formContainer}>
            <form
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
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Phone />
                            </InputAdornment>
                        ),
                    }}
                />
                <ButtonGroup variant="contained" fullWidth>
                    <Button>Add</Button>
                    <Button color="secondary" disabled>
                        Update
                    </Button>
                </ButtonGroup>
            </form>
        </Box>
    );
};

export default FormComp;
