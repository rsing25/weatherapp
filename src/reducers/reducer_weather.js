import { FETCH_WEATHER } from '../actions/index'

export default function(state = null, action) {

    console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:
        return  action.payload.data ;
    }
    console.log('state', state);
    return state;
}