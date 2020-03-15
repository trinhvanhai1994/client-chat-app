import axios from 'axios'

const API_URL = 'http://localhost:8080'
const ROOT_API = `${API_URL}/members`

class MemberDataService {

    retrieveAllMembers() {
        return axios.get(`${ROOT_API}`);
    }

    retrieveMember(id) {
        return axios.get(`${ROOT_API}/${id}`);
    }

    deleteMember(id) {
        return axios.delete(`${ROOT_API}/${id}`);
    }

    updateMember(id, member) {
        return axios.put(`${ROOT_API}/${id}`, member);
    }

    createMember(member) {
        return axios.post(`${ROOT_API}`, member);
    }
}

export default new MemberDataService()