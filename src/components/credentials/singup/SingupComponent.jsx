import React, { Component } from 'react'
import { signup } from '../../../service/AuthenticationAPI';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationAPI from '../../../service/AuthenticationAPI';

class SingupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            username: '',
            email: '',
            password: '',
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        console.log(this.state.id)
        if (this.state.id === undefined) {
            return
        }

        AuthenticationAPI.signup(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                username: response.data.username,
                email: response.data.email,
                password: response.data.password
            }))
    }

    validate(users) {
        let errors = {};
        if (!users.username) {
            errors.username = 'Enter a Name'
        } else if (users.username.length < 5) {
            errors.username = 'Enter atleast 5 Characters in Nickname'
        }
        if (!users.password) {
            errors.password = 'Enter a Author'
        } else if (users.password.length < 3) {
            errors.password = 'Enter atleast 5 Characters in Role'
        }
        return errors
    }

    onSubmit(users) {
        let member = {
            name: users.name,
            username: users.username,
            email: users.email,
            password: users.password,
            targetDate: users.targetDate
        };
        AuthenticationAPI.signup(member)
            .then(() => this.props.history.push('/members/all'));
        console.log(users);
        console.log(member);
    }

    render() {
        let { name, username, email, password } = this.state;
        return (
            <div>
                <h3>Member</h3>
                <div className="container">
                    <Formik
                        initialValues={{ name, username, email, password }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="text" name="email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="text" name="password" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default SingupComponent;