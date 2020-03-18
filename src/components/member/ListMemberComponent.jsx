import React, { Component } from 'react'
import MemberDataService from '../../service/MemberDataService';

class ListMembersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            message: null
        };
        this.deleteMemberClicked = this.deleteMemberClicked.bind(this)
        this.updateMemberClicked = this.updateMemberClicked.bind(this)
        this.addMemberClicked = this.addMemberClicked.bind(this)
        this.refreshMembers = this.refreshMembers.bind(this)
    }

    componentDidMount() {
        this.refreshMembers();
    }

    refreshMembers() {
        MemberDataService.retrieveAllMembers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ members: response.data })
                }
            )
    }

    deleteMemberClicked(id) {
        MemberDataService.deleteMember(id)
            .then(
                response => {
                    this.setState({ message: `Delete of member ${id} Successful` })
                    this.refreshMembers()
                }
            )

    }

    addMemberClicked() {
        this.props.history.push(`/member`)
    }

    updateMemberClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/member/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Rooms</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nickname</th>
                                <th>Gender</th>
                                <th>Role</th>
                                <th>Day Of Birth</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.members.map(
                                    member =>
                                        <tr key={member.id}>
                                            <td>{member.id}</td>
                                            <td>{member.nickName}</td>
                                            <td>{member.gender ? 'MALE' : 'FEMALE'}</td>
                                            <td>{member.role}</td>
                                            <td>{member.dob}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateMemberClicked(member.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteMemberClicked(member.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addMemberClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListMembersComponent