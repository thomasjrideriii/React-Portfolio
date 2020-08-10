import axios from 'axios';

export default {
    user: function() {
        return axios.get("https://api.github.com/users/thomasjrideriii")
    },

    projects: function () {
        return axios.get("https://api.github.com/users/thomasjrideriii")
    }
}