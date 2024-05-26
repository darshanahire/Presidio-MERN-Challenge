import axios from "axios"

const exportedObject = {

    // baseURL: "http://localhost:5000/",
    baseURL: "/",

    async getAllProperties() {
        const res = await axios.post(this.baseURL + "getallproperties");
        return res;
    },

    async seeProperty(id) {
        const res = await axios.post(this.baseURL + "seeproperty", { id });
        return res;
    },

    async login(userData) {
        const res = await axios.post(this.baseURL + "login",userData);
        return res;
    },

    async signup(userData) {
        const res = await axios.post(this.baseURL + "signup",userData);
        return res;
    },
    async addProperty(propertyData) {
        const res = await axios.post(this.baseURL + "addproperty",propertyData);
        return res;
    },
    
    async getUser(rentifyuser) {
        const res = await axios.post(this.baseURL + "getuser", { rentifyuser });
        return res;
    },
    async seeProperty(id) {
        const res = await axios.post(this.baseURL + "seeProperty", { id });
        return res;
    },

 
};

export default exportedObject;

