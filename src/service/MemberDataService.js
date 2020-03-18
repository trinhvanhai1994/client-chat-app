import axios from 'axios'

const API_URL = 'http://localhost:8080';
const ROOT_API = `${API_URL}/members`;
const header = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTg0NTIxNzU1LCJleHAiOjE1ODUxMjY1NTV9.J-8zDlE_RmBVBZ-U8Ad5w1xFHttYOZGtY-Dcu2lEfAys08VEgxsVk-uNKOu3eLL8zaD-S7i7Oi7bwFMnw54OTQ';
const options = {
    headers: {'Authorization': header}
};

class MemberDataService {

    retrieveAllMembers() {
        return axios.get(`${ROOT_API}`, options)
    }

    retrieveMember(id) {
        return axios.get(`${ROOT_API}/${id}`, options);
    }

    deleteMember(id) {
        return axios.delete(`${ROOT_API}/${id}`, options);
    }

    updateMember(id, member) {
        return axios.put(`${ROOT_API}/${id}`, member, options);
    }

    createMember(member) {
        return axios.post(`${ROOT_API}`, member, options);
    }
}

export default new MemberDataService()