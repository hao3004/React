import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
    deleteBtnClick = (id) => {
        this.props.deleteBtnClick(id);
    }

    mappingUserData = () => this.props.userData.map( (value,key) => (
            <TableDataRow key={key} index={key} 
                userId={value.id} 
                userName={value.name} 
                userTel={value.tel}
                userPrivilage={value.privilage}
                getUserEditting={(user) => this.props.getUserEditting(value)}
                isDisplayEditForm={this.props.isDisplayEditForm}
                changeIsDisplayEditForm={() => this.props.changeIsDisplayEditForm()}
                deleteBtnClick = { (id) => this.deleteBtnClick(id)}
        
            />
        )
    )
    
    render() {
        
        return (
            <div className="col">
                <div className="um-user-list-wrap">
                    <table className="um-user-list table table-striped table-hover">
                        <tbody><tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Tel.</th>
                            <th>Privilage</th>
                            <th>Option</th>
                        </tr>
                        { this.mappingUserData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableData;