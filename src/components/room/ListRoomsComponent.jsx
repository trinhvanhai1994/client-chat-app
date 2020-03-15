import React, { Component } from 'react'
import RoomDataService from '../../service/RoomDataService';

class ListRoomsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            message: null
        }
        this.deleteRoomClicked = this.deleteRoomClicked.bind(this)
        this.updateRoomClicked = this.updateRoomClicked.bind(this)
        this.addRoomClicked = this.addRoomClicked.bind(this)
        this.refreshRooms = this.refreshRooms.bind(this)
    }

    componentDidMount() {
        this.refreshRooms();
    }

    refreshRooms() {
        RoomDataService.retrieveAllRooms()//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ rooms: response.data })
                }
            )
    }

    deleteRoomClicked(id) {
        RoomDataService.deleteRoom(id)
            .then(
                response => {
                    this.setState({ message: `Delete of room ${id} Successful` })
                    this.refreshRooms()
                }
            )

    }

    joinRoomClicked(id) {
        this.props.history.push(`/rooms/member/${id}`)
    }

    addRoomClicked() {
        this.props.history.push(`/rooms`)
    }

    updateRoomClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/rooms/${id}`)
        this.refreshRooms()
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
                                <th>Name</th>
                                <th>Author</th>
                                <th>Status</th>
                                <th>Join</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rooms.map(
                                    room =>
                                        <tr key={room.id}>
                                            <td>{room.id}</td>
                                            <td>{room.name}</td>
                                            <td>{room.author}</td>
                                            <td>{room.status}</td>
                                            <td><button className="btn btn-success" onClick={() => this.joinRoomClicked(room.id)}>Join</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.updateRoomClicked(room.id)}>Update</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteRoomClicked(room.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addRoomClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListRoomsComponent