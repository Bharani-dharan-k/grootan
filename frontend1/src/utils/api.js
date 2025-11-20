import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:5000/api" });


export const uploadLog = (file) => {
const formData = new FormData();
formData.append("logfile", file);
return API.post("/logs/upload", formData, {
headers: { "Content-Type": "multipart/form-data" },
});
};


export const analyzeLog = (logId) => API.get(`/logs/analyze/${logId}`);
export const getAllLogs = () => API.get("/logs");