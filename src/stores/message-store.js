import {
    createStore
} from 'harlem';

const STATE = {
    type: '', 
    content: '',
    title: ''

}

//Object.preventExtensions(STATE)


const {
    state, 
    getter,
    mutation,
    action,
    ...store
} = createStore('message', STATE);




//NOTE MUTATIONS
const setType = mutation('set-type', (state, payload) => {
    state.type = payload;
});

const setTitle = mutation('set-title', (state, payload) => {
    state.title = payload;
});

const setContent = mutation('set-title', (state, payload) => {
    state.content = payload;
});


//NOTE ACTIONS

const setNewMessage = action('set-new-message', async (data, mutate) => {

    mutate(state => {
        state.title = data.title;
        state.content = data.content;
        state.type = data.type;
    });
});


export {
    createStore,
    setContent,
    setNewMessage,
    setTitle,
    setType,
    state
}