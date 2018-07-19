import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Words from './components/Words';

export default function routes(){
    return <Switch>
         <Route path='/' exact render={() => {
             return (
                 <div>
                     <h1>Welcome To The Word Bank</h1>
                 </div>
             )
         }}/>
        <Route path='/Login' component={Login}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Words' component={Words}/>
    </Switch>
}