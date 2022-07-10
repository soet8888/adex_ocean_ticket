import axios from 'axios';
const base_url = "http://localhost:4000/api";

export const getTickets = async () => {
    try {
        const url = base_url + `/tickets`;
        const headers = {
            ["Content-Type"]: "application/json",
            ["Authorization"]: `Bearer `
        };
        const method = "get";
        const res = await axios(url, { method, headers });
        if (res.data && res.data.data) {
            return { success: true, data: res.data.data }
        }
    } catch (error) {
        // console.log(error)
        return { success: false };
    }
    return { success: false }
}
export const createCustomer = async (data) => {
    try {
        const url = base_url + `/customer`;
        const headers = {
            ["Content-Type"]: "application/json",
            ["Authorization"]: `Bearer `
        };
        const method = "post";
        const res = await axios(url, { method, headers, data: JSON.stringify({ ...data }) });
        if (res.data && res.data.data) {
            return { success: true, data: res.data.data }
        }
    } catch (error) {
        // console.log(error)
        return { success: false };
    }
    return { success: false }
}
export const createOrder = async (data) => {
    try {
        const url = base_url + `/order`;
        const headers = {
            ["Content-Type"]: "application/json",
            ["Authorization"]: `Bearer `
        };
        const method = "post";
        const res = await axios(url, { method, headers, data: JSON.stringify({ ...data }) });
        if (res.data && res.data.data) {
            return { success: true, data: res.data.data }
        }
    } catch (error) {
        // console.log(error)
        return { success: false };
    }
    return { success: false }
}