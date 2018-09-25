import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import TableData from './TableData';
import AddUser from './AddUser';
import UserData from './../Data/userdata.json';
import EditUser from './EditUser';

const uuidv1 = require('uuid/v1');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm: false,
            userData: [],
            keywordsTyped: ' ',
            isDisplayEditForm: false
        }
    }
    

    changeisDisplayForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm,
        }); 
    }

    getKeywordsTyped = (keywordsTyped) => {
        this.setState({
            keywordsTyped: keywordsTyped
        });
    }

    getNewUserData = (name, tel, privilage) => {
        var newUser = {};
        newUser.id = uuidv1();
        newUser.name = name;
        newUser.tel = tel;
        newUser.privilage = privilage;  
        var users = this.state.userData;
        users.push(newUser);
        this.setState({
            userData: users
        });
        localStorage.setItem('data', JSON.stringify(users));
    }

    getUserEditting = (user) => {
        this.setState({
            userEditting: user
        });
        
    }

    changeIsDisplayEditForm = () => {
        this.setState({
            isDisplayEditForm: !this.state.isDisplayEditForm,
        }); 
    }

    getUserEdited = (user) => {

        this.state.userData.forEach((value, key) => {
            if (value.name === user.name) {
                value.name = user.name;
                value.tel = user.tel;
                value.privilage = user.privilage;
            }
        })

        
    }

    deleteBtnClick = (id) => {

        var tempUsers = this.state.userData;
        tempUsers = tempUsers.filter(item => item.id !== id);
        //console.log(tempUsers);
        this.setState({
            userData: tempUsers
        });
        // tempUsers.forEach(
        //     (value, key) => {
        //         if (value.id === id) {
        //           //  console.log(value.name);
                    
        //         }
        //     }
        // )
        localStorage.setItem('data', JSON.stringify(tempUsers));
    }

    // trc khi render
    
    // componentWillMount() {
    //    // _userData 
    //     // check xem co localStorage chưa
    //     if (localStorage.getItem('userData') === null) {
    //         localStorage.setItem('userData', JSON.stringify(UserData))
    //        // localStorage.setItem('userData', [])
    //     }
    //     else {
    //         var tempUserData = JSON.parse(localStorage.getItem('userData'));
    //         this.setState({
    //             userData: tempUserData
    //         });
    //     }
    // }
    
    componentWillMount() {
        //console.log(localStorage.getItem('userData'));
        if (localStorage.getItem('data') === null) {
            localStorage.setItem('data', JSON.stringify(UserData));

        }
        
            var tempUserData = JSON.parse(localStorage.getItem('data'));
            this.setState({
                userData: tempUserData
            });
            

    }
    

    render() {
        
        var researchResult = [];

        this.state.userData.forEach( (userDataItem) => {
                if (userDataItem.name.indexOf(this.state.keywordsTyped) !== -1 ) {
                    researchResult.push(userDataItem);
                }
            }
        );

        return (
            <div className="user-managing-wrap">
                <Header></Header>
                <SearchForm isDisplayForm={this.state.isDisplayForm} changeisDisplayForm={() => this.changeisDisplayForm() }
                    getKeywordsTyped={(keywordsTyped) => this.getKeywordsTyped(keywordsTyped)}
                >
                </SearchForm>
                <div className="container">
                    <div className="row">
                        <TableData userData={ researchResult } 
                            getUserEditting={(user) => this.getUserEditting(user)}
                            isDisplayEditForm={this.state.isDisplayEditForm}
                            changeIsDisplayEditForm = { () => this.changeIsDisplayEditForm()}
                            deleteBtnClick = {(id) => this.deleteBtnClick(id)}
                            
                        ></TableData>
                        <AddUser isDisplayForm={this.state.isDisplayForm}
                            getNewUserData={(name, tel, privilage) => this.getNewUserData(name, tel, privilage)}
                        ></AddUser>
                        <EditUser isDisplayEditForm = {this.state.isDisplayEditForm}
                            changeIsDisplayEditForm = {() => this.changeIsDisplayEditForm()}
                            userEditting = {this.state.userEditting}
                            getUserEditting={(user) => this.getUserEditting(user)}
                            getUserEdited = {(user)=> this.getUserEdited(user)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;