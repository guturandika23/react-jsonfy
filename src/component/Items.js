import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Items extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/items';
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => this.setState({ data: data }));
      }

    render(){
        const { data } = this.state;

        return(
            <div>
                <nav>
                    <Mui.AppBar>
                        <Mui.Toolbar>
                            <Mui.Typography>
                    <div class="nav-wrapper red accent-4">
                    <ul class="left hide-on-med-and-down">
                        <li><a href="/">Users</a></li>
                        <li><a href="/Comments">Comments</a></li>
                        <li><a href="/Posts">Posts</a></li>
                        <li><a href="/Albums">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Categories">Categories</a></li>
                        <li><a href="/Brands">Brands</a></li>
                        <li><a href="/Items">Items</a></li>
                    </ul>
                    </div>
                    </Mui.Typography>
                    </Mui.Toolbar>
                    </Mui.AppBar>
                    </nav>
                <Mui.Container Fixed>
                <h2>Data Json Items</h2><br/><hr/>
                <table>
                    <thead>
                        <tr class="card-panel indigo">
                            <td>id</td>
                            <td>name</td> 
                            <td>descriptions</td>
                        </tr>
                    </thead>
                    {data.map(todo =>
                    <tbody>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td> 
                            <td>{todo.descriptions}</td>
                        </tr>
                    </tbody>
                    )}
                </table>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Items;