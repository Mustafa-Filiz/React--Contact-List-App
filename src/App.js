import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import FormComp from './components/FormComp';
import { addContact } from './utils/Firebase';

const useStyles = makeStyles({
    App: {
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(https://picsum.photos/1600/900)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});

const initialValues = { name: '', phone: '' };

function App() {
    const [contact, setContact] = useState(initialValues);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addContact(contact)
        setContact(initialValues);
    };

    const classes = useStyles();
    return (
        <Box className={classes.App}>
            <FormComp
                contact={contact}
                setContact={setContact}
                handleFormSubmit={handleFormSubmit}
            />
            <ContactList />
        </Box>
    );
}

export default App;
