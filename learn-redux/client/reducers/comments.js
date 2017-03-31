//reducer takes in: Action, copy of current state
function postComments(state=[], action){
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {user: action.author, text: action.comment}]; //return copy of state with new comment
        case 'REMOVE_COMMENT':
            //return state without the deleted comment
            return [
                ...state.slice(0, action.i),
                ...state.slice(action.i + 1)
            ];

        default:
            return state;
    }    
    
    return state;
}

function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
        return {
            ...state, //take current state
            [action.postId]: postComments(state[action.postId], action) //overwrite post in state with new one
        }
    }
    return state;
}


export default comments;