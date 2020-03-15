import React, { Component } from 'react';
import ListRoomsComponent from './room/ListRoomsComponent';
import ListMembersComponent from './member/ListMemberComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RoomComponent from './room/RoomComponent';
import MemberComponent from './member/MemberComponent';

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListRoomsComponent} />
                        <Route path="/rooms/all" exact component={ListRoomsComponent} />
                        <Route path="/rooms/member/:id" component={MemberComponent} />
                        <Route path="/members/all" exact component={ListMembersComponent} />
                        <Route path="/rooms" component={RoomComponent} />
                        <Route path="/rooms/:id" component={RoomComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default RouterApp