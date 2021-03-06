const initialState = {
    instruments: [],
    stage: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_INSTRUMENTS":
            return {
                ...state,
                    instruments: action.instruments
            }
        case "ADD_INSTRUMENT":
            return{
                ...state,
                instruments: [...state.instruments, action.newInstrument]
            }
        //TODO: DELETE INSTRUMENT
        case "DELETE_INSTRUMENT":
            const instrumentID = action.deletedInstrument;
            return {
                ...state,
                instruments: state.instruments.filter(instrument => instrument.Id !== instrumentID)
            }
        case "ADD_TO_STAGE":
            return {
                ...state,
                stage: [...state.stage, action.stageInstrument]
            }
        default:
            return state;
    }
}

export default mainReducer;