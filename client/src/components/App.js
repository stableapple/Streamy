import React, { Component } from 'react';
import {Router, Route, Link, Switch } from 'react-router-dom';
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/streamEdit'
import history from '../history'
import 'bootswatch/dist/darkly/bootstrap.min.css'

const App =() =>{
    return (
        <div className="ui cointainer">
            <Router history={history}>
             <div>
                <Header />
                <Switch>
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
                <Route path="/streams/:id" exact component={StreamShow}></Route>
                </Switch>
             </div>
            </Router>
        </div>
    )
}
export default App;