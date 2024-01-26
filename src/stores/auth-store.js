import {
    createStore
} from 'harlem';

const STATE = {
    isConnected: false, 
    user: { id: 1}

}

//Object.preventExtensions(STATE)


const {
    state, 
    getter,
    mutation,
    action,
    ...store
} = createStore('auth', STATE);

//NOTE GETTERS
const fullName = getter('fullname', state => `${state.user.firstname} ${state.user.lastname}`);

const isConnected = getter('connected', state => state.isConnected)

const userGetter = getter('user-info', state => state.user)

//NOTE MUTATIONS
const setFirstName = mutation('set-first-name', (state, payload) => {
    state.user.firstname = payload;
});

const setLastName = mutation('set-last-name', (state, payload) => {
    state.user.lastname = payload;
});


//NOTE ACTIONS
//----------------------------LOGIN-----------------------
const loginUser = action('login-user', async (data, mutate) => {
    console.log('🛍️ [harlem-auth-store : loginUser action]')
    const response = await fetch(import.meta.env.API_URL, {
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        },
        method: "POST",
        body: JSON.stringify(data)

    });
    const user = await response.json();

    mutate(state => {
        state.user = user;
    });
});

//----------------------------REGISTER-----------------------
const signupUser = action('signup-user', async (data, mutate) => {
    console.log('🛍️ [harlem-auth-store : singupUser action]')
    const response = await fetch(import.meta.env.API_URL, {
        headers: {
            "Content-Type":"application/json;charset=utf-8"
        },
        method: "POST",
        body: JSON.stringify(data)

    });
    const user = await response.json();

    mutate(state => {
        state.user = user;
    });
});


export {
    createStore,
    fullName,
    isConnected,
    setFirstName,
    setLastName,
    loginUser,
    signupUser,
    userGetter

}