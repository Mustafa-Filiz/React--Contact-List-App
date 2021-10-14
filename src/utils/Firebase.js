import { initializeApp } from 'firebase/app';
import {
    getDatabase,
    ref,
    push,
    onValue,
    remove,
    child,
    update,
} from 'firebase/database';
import { useEffect, useState } from 'react';

const firebaseConfig = {
    apiKey: 'AIzaSyBGoVhzwHxbpl10TK-GJUvDTJ-dvwW1aXc',
    authDomain: 'react--contact-list-app.firebaseapp.com',
    projectId: 'react--contact-list-app',
    storageBucket: 'react--contact-list-app.appspot.com',
    messagingSenderId: '247807283858',
    appId: '1:247807283858:web:236a1b293a13ab23c78c4b',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const addContact = (contact) => {
    push(ref(database, 'contacts'), contact);
};

export const useFetchContacts = () => {
    const [contactList, setContactList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const contactRef = ref(database, 'contacts');
        onValue(contactRef, (snapshot) => {
            const data = snapshot.val();
            const dataArr = [];
            for (let id in data) {
                dataArr.push({ id, ...data[id] });
            }
            setContactList(dataArr);
            setLoading(false);
        });
    }, []);

    return { contactList, loading };
};

export const deleteContact = (id) => {
    remove(child(ref(database, 'contacts'), id));
};

export const updateContact = (contact) => {
    update(child(ref(database, 'contacts'), contact.id), contact);
};
