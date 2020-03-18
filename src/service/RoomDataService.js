import axios from 'axios'

const API_URL = 'http://localhost:8080'
const INSTRUCTOR_API_URL = `${API_URL}/rooms`;
const header = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTg0NTIxNzU1LCJleHAiOjE1ODUxMjY1NTV9.J-8zDlE_RmBVBZ-U8Ad5w1xFHttYOZGtY-Dcu2lEfAys08VEgxsVk-uNKOu3eLL8zaD-S7i7Oi7bwFMnw54OTQ';
const options = {
    headers: {'Authorization': header}
};

class RoomDataService {

    retrieveAllRooms() {
        return axios.get(`${INSTRUCTOR_API_URL}`, options)
    }

    retrieveRoom(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`, options);
    }

    deleteRoom(id) {
        return axios.delete(`${INSTRUCTOR_API_URL}/${id}`, options);
    }

    updateRoom(id, room) {
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, room, options);
    }

    createRoom(room) {
        return axios.post(`${INSTRUCTOR_API_URL}`, room, options);
    }
}

export default new RoomDataService()