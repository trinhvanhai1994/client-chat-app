import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RoomDataService from '../../service/RoomDataService';

class RoomComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            author: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        console.log(this.state.id)
        if (this.state.id === undefined) {
            return
        }

        RoomDataService.retrieveRoom(this.state.id)
            .then(response => this.setState({
                name: response.data.name,
                author: response.data.author
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a Name'
        } else if (values.name.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        if (!values.author) {
            errors.author = 'Enter a Author'
        } else if (values.name.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Author'
        }

        return errors

    }

    onSubmit(values) {
        let room = {
            id: this.state.id,
            name: values.name,
            author: values.author,
            targetDate: values.targetDate
        }

        RoomDataService.createRoom(room)
            .then(() => this.props.history.push('/rooms/all'))

        console.log(values);
    }

    render() {

        let { name, author, id } = this.state

        return (
            <div>
                <h3>Room</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, name, author }}
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
                                        <label>Author</label>
                                        <Field className="form-control" type="text" name="author" />
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

export default RoomComponent