import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            tel: '',
            privilage: ''
        };
    }
    

    addFormIsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

        var newUser = {};
        newUser.id = this.state.id;
        newUser.name = this.state.name;
        newUser.tel = this.state.tel;
        newUser.privilage = this.state.privilage;  
       // console.log(newUser); 
    }
    
    displayForm = () => {
        if (this.props.isDisplayForm) {
            return (
                <div className="col-12">
                    <div className="um-user-adding-wrap">
                        <div className="card text-left">
                            <h4 className="card-header text-center">Add new</h4>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input className="form-control" type="text" name="name" id="name" placeholder="Name"
                                            onChange={(event) => this.addFormIsChange(event)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tel">Tel</label>
                                        <input className="form-control" type="tel" name="tel" id="tel" placeholder="Tel"
                                                onChange={(event) => this.addFormIsChange(event)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="privilage">Privilage</label>
                                        <select name="privilage" id="privilage" className="custom-select"
                                                onChange={(event) => this.addFormIsChange(event)}
                                        >
                                            <option value={0}>Admin</option>
                                            <option value={1}>Mod</option>
                                            <option value={2}>User</option>
                                        </select>
                                    </div>
                                    <input type="reset" value="Add" className="btn btn-primary btn-block"
                                        onClick={(name, tel, privilage) => this.props.getNewUserData(this.state.name, this.state.tel, this.state.privilage)}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>          
            );
        }
        else {
            return;
        }
    }
    
    render() {
        
        return (
                <div>
                        {this.displayForm()}
                </div>          
        );
    }
}

export default AddUser;