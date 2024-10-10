const initialState={
    items:[]
}


const videoReducer =(state=initialState,action)=>{

    switch(action.type){
    case 'Saveinfo':
        console.log("inside reducer: ", action.payload)
        return { ...state, items: [action.payload] };
    
    default:
        return state;
    }

}


export default videoReducer;