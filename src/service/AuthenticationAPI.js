import axios from 'axios'
const API_BASE_URL = 'http://localhost:8080/api';
const header = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTg0NTIxNzU1LCJleHAiOjE1ODUxMjY1NTV9.J-8zDlE_RmBVBZ-U8Ad5w1xFHttYOZGtY-Dcu2lEfAys08VEgxsVk-uNKOu3eLL8zaD-S7i7Oi7bwFMnw54OTQ';
const options = {
    headers: {'Content-Type': 'application/json'}
}
class AuthenticationAPI {

    // login(loginRequest) {
    //     return axios.post(`${API_BASE_URL} + "/auth/sign-in"`, loginRequest);
    // }

    signup(signupRequest) {
        return axios.post(`${API_BASE_URL}` + "/auth/sign-up", signupRequest, options);
    }
    //
    // deleteMember(id) {
    //     return axios.delete(`${API_BASE_URL}/${id}`);
    // }
    //
    // updateMember(id, member) {
    //     return axios.put(`${API_BASE_URL}/${id}`, member);
    // }
    //
    // createMember(member) {
    //     return axios.post(`${API_BASE_URL}`, member);
    // }
}

export default new AuthenticationAPI()

