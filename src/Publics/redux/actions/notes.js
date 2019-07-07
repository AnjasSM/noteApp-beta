import axios from 'axios';

const urlNotes = `http://192.168.6.178:4000/notes`;

export const fetch = (search ='', sort='', page=1, limit=10) => {
    return {
        type: "FETCH_NOTE",
        payload: axios.get(`${urlNotes}?search=${search}&sort=${sort}&page=${page}&limit=${limit}`)
    }
}

export const addNote = (data) => {
    return {
        type: "ADD_NOTE",
        payload: axios.post(urlNotes, data)
    }
}

export const deleteNote = (id) => {
    return {
        type: "DELETE_NOTE",
        payload: axios.post(`${urlNotes }/${id}`)
    }
}

export const updateNote = (id, data) => {
    return {
        type: "UPDATE_NOTE",
        payload: axios.post(`${urlNotes }/${id}`, data)
    }
}