import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {Router, Route, Link } from 'react-router-dom';
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/streamEdit'
import history from '../history'

const App =() =>{
    return (
        <div className="ui cointainer">
            <Router history={history}>
             <div>
                <Header />
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
                <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
                <Route path="/streams/show" exact component={StreamShow}></Route>
             </div>
            </Router>
        </div>
    )
}
export default App;