import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
           // id: // this.props.userEditting.id ,
            name: '',
            tel: '',
            privilage: ''
        }
    }
    
    editFormIsChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
        // console.log(this.props.userEditting);
        // console.log(this.state);
    }

    editBtnClick = () => {
        this.props.changeIsDisplayEditForm();

        var userEditted = {};
        userEditted.id = this.state.id; // đoạn này id vẫn undefined vì mình chưa tạo được giá trị ban đầu cho state 
        userEditted.name = this.state.name;
        userEditted.tel = this.state.tel;
        userEditted.privilage = this.state.privilage;
        this.props.getUserEdited(userEditted);
    }

    displayEditForm = () => {
        if ( this.props.isDisplayEditForm) {
            return (
                
                <div className="col-12">
                    <div className="um-user-adding-wrap">
                        <div className="card text-left">
                            <h4 className="card-header text-center">Edit User</h4>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input className="form-control" type="text" name="name" id="name" placeholder="Name"
                                            defaultValue = {this.props.userEditting.name}
                                            onChange={(event)=> this.editFormIsChange(event)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tel">Tel</label>
                                        <input className="form-control" type="tel" name="tel" id="tel" placeholder="Tel"
                                                defaultValue = {this.props.userEditting.tel}
                                                onChange={(event)=> this.editFormIsChange(event)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="privilage">Privilage</label>
                                        <select name="privilage" id="privilage" className="custom-select"
                                                defaultValue = {this.props.userEditting.privilage}
                                                onChange={(event)=> this.editFormIsChange(event)}
                                        >
                                            <option value={0}>Admin</option>
                                            <option value={1}>Mod</option>
                                            <option value={2}>User</option>
                                        </select>
                                    </div>
                                    <input type="reset" value="Update" className="btn btn-success btn-block"
                                        onClick={()=> this.editBtnClick()}
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
       // console.log(this.props.userEditting);
        
        return (
            <div>
                { this.displayEditForm() }
            </div>
        );
    }
}

export default EditUser;