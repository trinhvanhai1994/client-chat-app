import axios from 'axios'

const API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${API_URL}/rooms`

class RoomDataService {

    retrieveAllRooms() {
        return axios.get(`${INSTRUCTOR_API_URL}`);
    }

    retrieveRoom(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`);
    }

    deleteRoom(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`);
    }

    updateRoom(id, room) {
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, room);
    }

    createRoom(room) {
        return axios.post(`${INSTRUCTOR_API_URL}`, room);
    }
}

export default new RoomDataService()