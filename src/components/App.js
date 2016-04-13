import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import { Footer } from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/visibleTodoList';

const App = () => (
    <div>

        <AppBar
            style={{backgroundColor:'#FFF'}}
            titleStyle={{color:'#36AFC3'}}
            title="TODO"
            iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <AddTodo/>
        <VisibleTodoList />
        <Footer />

    </div>
)

export default App