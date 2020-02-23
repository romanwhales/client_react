import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';


import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import reduxThunk from 'redux-thunk';


const store = createStore(reducers,{
    auth: {
        authenticated: localStorage.getItem('token')
    }
},applyMiddleware(reduxThunk)) 

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
     <App >
        <Route path = "/" exact component={Welcome}/>
        <Route path = "/signup" exact component={SignUp}/>
        <Route path = "/feature" exact component={Feature}/>
        <Route path = "/signout" exact component={Signout}/>
        <Route path= "/signin" exact component={Signin}/>
    </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)