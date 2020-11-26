import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Users extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          data : [],
        };
      }
    
      componentDidMount() {
        const apiUrl = 'https://jsonfy.com/users';
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
                    <div class="nav-wrapper">
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
                <h2>Data Json Users</h2><br/><hr/>
                <table>
                    <thead>
                        <tr class="card-panel indigo">
                            <td>id</td>
                            <td>name</td> 
                            <td>username</td>
                            <td>email</td> 
                            <td >pasword</td>
                            <td>age</td>
                            <td>website</td>
                            <td>phone</td>
                            <td>date_add</td>
                            <td>date_upd</td>
                            <td>password_md5</td>

                        </tr>
                    </thead>
                    {data.map(todo =>
                    <tbody>
                        <tr hey={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.name}</td> 
                            <td>{todo.username}</td>
                            <td>{todo.email}</td>
                            <td>{todo.pasword}</td>
                            <td>{todo.age}</td>
                            <td>{todo.website}</td>
                            <td>{todo.phone}</td>
                            <td>{todo.date_add}</td>     
                            <td>{todo.date_upd}</td>
                            <td>{todo.password_md5}</td>
                        </tr>
                    </tbody>
                    )}
                </table>
                </Mui.Container>
            </div>
        )
    }
}
    
export default Users;