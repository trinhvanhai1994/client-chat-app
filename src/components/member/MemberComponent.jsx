import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MemberDataService from '../../service/MemberDataService';

class MemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            roomId: this.props.match.params.id,
            nickName: '',
            gender: '',
            role: '',
            dob: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        console.log(this.state.id)
        if (this.state.id === undefined) {
            return
        }

        MemberDataService.retrieveMember(this.state.id)
            .then(response => this.setState({
                nickName: response.data.nickName,
                roomId: response.data.roomId,
                gender: response.data.gender,
                role: response.data.role,
                dob: response.data.dob
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.nickName) {
            errors.nickName = 'Enter a Name'
        } else if (values.nickName.length < 5) {
            errors.nickName = 'Enter atleast 5 Characters in Nickname'
        }
        if (!values.role) {
            errors.role = 'Enter a Author'
        } else if (values.role.length < 3) {
            errors.role = 'Enter atleast 5 Characters in Role'
        }

        return errors
    }

    onSubmit(values) {
        let member = {
            roomId: this.state.id,
            nickName: values.nickName,
            gender: values.gender,
            role: values.role,
            dob: values.dob,
            targetDate: values.targetDate
        }

        MemberDataService.createMember(member)
            .then(() => this.props.history.push('/members/all'))

        console.log(values);
    }

    render() {

        let { roomId, nickName, gender, role, dob } = this.state

        return (
            <div>
                <h3>Member</h3>
                <div className="container">
                    <Formik
                        initialValues={{ roomId, nickName, gender, role, dob }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        // validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Nickname</label>
                                        <Field className="form-control" type="text" name="nickName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Gender</label>
                                        <Field className="form-control" type="text" name="gender" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Role</label>
                                        <Field className="form-control" type="text" name="role" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Day of birth</label>
                                        <Field className="form-control" type="text" name="dob" />
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

export default MemberComponent