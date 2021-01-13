import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamList from './streams/StreamList'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/streamEdit'

const App =() =>{
    return (
        <div className="ui cointainer">
            <BrowserRouter >
             <div>
                <Header />
                <Route path="/" exact component={StreamList}></Route>
                <Route path="/streams/new" exact component={StreamCreate}></Route>
                <Route path="/streams/edit" exact component={StreamEdit}></Route>
                <Route path="/streams/delete" exact component={StreamDelete}></Route>
                <Route path="/streams/show" exact component={StreamShow}></Route>
             </div>
            </BrowserRouter>
        </div>
    )
}
export default App;