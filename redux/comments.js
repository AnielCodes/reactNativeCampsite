import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const comment = action.payload;
            // return {...state, comments: state.comments.concat(comment)};
            return [
                ...state,
                {
                  id: state[state.length - 1].id + 1,
                  name: action.payload,
                }
              ]            
            default:
            return state;
    }
};