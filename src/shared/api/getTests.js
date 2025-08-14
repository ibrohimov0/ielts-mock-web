import { axiosInstance } from "./axiosInstance";

export default function getTests() {
    return axiosInstance.get("/tests").then(res => res.data).catch(err => {
        console.error("Tests fetch error", err);
        throw err
    })
}