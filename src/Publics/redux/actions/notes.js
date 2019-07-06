import axios from 'axios';

const urlNotes = `http://192.168.6.178:4000/notes`;

export const fetch = (search ='', sort='', limit=10) => {
    return {
        type: "FETCH_NOTE",
        payload: axios.get(`${urlNotes}?search=${search}&sort=${sort}&limit=${limit}`)
    }
}

export const addNote = (data) => {
    return {
        type: "ADD_NOTE",
        payload: axios.post(urlNotes, data)
    }
}