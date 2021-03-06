import axios from 'axios';

const API = 'http://localhost:52371/api/instruments/';

//Fetch API for All Instruments
export function loadInstruments(){
    return async (dispatch) => {
        await axios.get(`${API}/all`)
        .then()
        .then(resp => { 
            dispatch(getInstruments(resp.data));
        })
        //.catch(response => {return Promise.reject(response);}) 
    }
}

export function getInstruments(instruments){
    return {
        type: "FETCH_INSTRUMENTS",
        instruments: instruments
    }
}

export function newInstrument(name, origin, year, classification){
    return((dispatch) => {
        axios.post(`${API}/new`, {
            Name: name,
            Origin: origin,
            Year: year,
            Classification: classification
        })
        .then(resp => dispatch(creatingInstrument(resp.data)))
    })
}

export function creatingInstrument(instrument){
    return {
        type: "ADD_INSTRUMENT",
        newInstrument: instrument
    }
}

export function deleteInstrument(id, history){
    return((dispatch) => {
        axios.delete(`${API}/${id}/delete`)
        .then(resp => { 
            dispatch(deletingInstrument(id));
        })
        history.push('/instruments');
    })
}

export function deletingInstrument(instrument){
    return{
        type: "DELETE_INSTRUMENT",
        deletedInstrument: instrument
    }
}

//TODO Refactor without doing another API call
//Fetch API for One Instrument
export function showInstrument(id){
    console.log(id);
    return((dispatch) => {
        axios.get(`${API}/${id}`)
        .then(resp => {
            dispatch(stageInstrument(resp.data));
        })
    })
}

export function stageInstrument(instrument){
    return {
        type: "ADD_TO_STAGE",
        stageInstrument: instrument
    }
}
