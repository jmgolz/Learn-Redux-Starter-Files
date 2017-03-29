//reducer takes in: Action, copy of current state
function posts(state = [], action){
    console.log("Post will change");
    console.log(state, action);
    return state;
}

export default posts;