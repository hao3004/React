import React, { Component } from 'react';

class TableDataRow extends Component {

    userPrivilageShow = () => {
        // switch (this.props.userPrivilage) {
        //     case '0':
        //         return 'Admin';
        //         break;

        //     case 1:
        //         return 'Mod';
        //         break;

        //     case 0:
        //         return 'User';
        //         break;
        
        //     default:
        //         return 'User';
        //         break;
        // }    WHY?? 
        if (this.props.userPrivilage === 0 ) {
            return 'Admin';
        }
        else if (this.props.userPrivilage === 1) {
            return 'Mod';
        }
        else {
            return 'User';
        }
    }

    onEditClick = () => {
        this.props.getUserEditting();
        this.props.changeIsDisplayEditForm();
    }

    // onClick={(value) => this.props.getUserEditting(value)
    //this.props.isDisplayEditForm
    displayEditBtn = () => {
        if (this.props.isDisplayEditForm) {
            return;
        }
        else {
            return (
                <button className="btn btn-success" onClick={() => this.onEditClick()}
                >Edit</button>
            );
        }
    } 

    deleteBtnClick = (id) => {
        this.props.deleteBtnClick(id)
    }

    render() {
        
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.userTel}</td>
                <td>{this.userPrivilageShow()}</td>
                <td>
                <div className="btn-group">
                    { this.displayEditBtn() }
                    <button className="btn btn-danger"
                        onClick={(id) => this.deleteBtnClick(this.props.userId)}
                    >Xóa</button>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;