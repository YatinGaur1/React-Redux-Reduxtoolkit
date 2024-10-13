const redux=require("redux");

const INITIAL_VALUE={
    counter:0
};
const reducer=(store=INITIAL_VALUE,action)=>{
    let new_store=store;
    if(action.type==='INCREMENT'){
        new_store={counter: store.counter+1}
    }else if (action.type==='DECREMENT'){
        new_store={counter: store.counter-1}
    }else if (action.type==='ADDITION'){
        new_store={counter:store.counter+ action.payload.number};
    }
    return new_store;
}

const store=redux.createStore(reducer);

const subscriber=()=>{
    const state=store.getState();
    console.log(state);
}

store.subscribe(subscriber);
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADDITION',payload:{number:7}});

