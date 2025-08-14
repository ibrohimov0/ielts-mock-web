import { axiosInstance } from "./axiosInstance";

export const GetTests = async() => {
    const res = await axiosInstance.get('/tests');
    return res.data;
}