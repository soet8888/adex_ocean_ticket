import { getLocalStorage, setLocalStorage } from "./storage";
import storeKeys from "./constants/storeKeys";
const getIPandPort = async () => {
    const serverconfig = await getLocalStorage(storeKeys.serverKey);
    if (serverconfig) {
        const { ip, port } = JSON.parse(serverconfig)
        return { ip, port }
    }
    return null
}
export const getTickets = async () => {
    const serverconfig = await getIPandPort();
    if (!serverconfig) return { success: false, msg: "Server configuration not setup" }
    const { ip, port } = serverconfig;
    const url = new URL(`http://${ip}:${port}/api/tickets`);
    console.log('url', url)
    try {
        const resText = await fetch(url);
        const res = await resText.json();
        if (res && res.data) {
            return { success: true, data: res.data || [] }
        }
    } catch (error) {
        console.error(error)
        return { success: false }
    }
}
export const getCustomer = async (customerId) => {
    const serverconfig = await getIPandPort()
    if (!serverconfig) return { success: false, msg: "Server configuration not setup" }
    const { ip, port } = serverconfig;
    const url = `http://${ip}:${port}/api/customer/${customerId}`;
    try {
        const resText = await fetch(url);
        const res = await resText.json();
        if (res && res.data) {
            return { success: true, data: res.data || [] }
        }
    } catch (error) {
        console.error(error)
        return { success: false }
    }
}
export const createCustomer = async (data) => {
    const serverconfig = await getIPandPort()
    if (!serverconfig) return { success: false, msg: "Server configuration not setup" }
    const { ip, port } = serverconfig;
    const url = `http://${ip}:${port}/api/customer`;
    try {
        const resText = await fetch(url, {
            method: 'POST',
            headers: {
                ['Content-Type']: 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
        const res = await resText.json();
        if (res && res.data) {
            await setLocalStorage(storeKeys.userKey, res.data);
            return { success: true, data: res.data || null }
        }
    } catch (error) {
        // console.log(error)
        return { success: false };
    }
    return { success: false }
}

export const createOrder = async (data) => {
    const serverconfig = await getIPandPort();
    if (!serverconfig) return { success: false, msg: "Server configuration not setup" }
    const { ip, port } = serverconfig;
    const url = `http://${ip}:${port}/api/order`;
    try {
        const resText = await fetch(url, {
            method: 'POST',
            headers: {
                ['Content-Type']: 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
        const res = await resText.json();
        if (res && res.data) {
            return { success: true, data: res.data || null }
        }
    } catch (error) {
        // console.log(error)
        return { success: false };
    }
    return { success: false }
}
export const updateOrder = async (orderId, data) => {
    const serverconfig = await getIPandPort()
    if (!serverconfig) return { success: false, msg: "Server configuration not setup" }
    const { ip, port } = serverconfig;
    const url = `http://${ip}:${port}/api/order`;
    try {
        const resText = await fetch(url, {
            method: 'PUT',
            headers: {
                ['Content-Type']: 'application/json'
            },
            body: JSON.stringify({ ...data })
        })
        const res = await resText.json();
        if (res && res.data) {
            return { success: true, data: res.data || null }
        }
    } catch (error) {
        // console.log(error)
        return { success: false };
    }
    return { success: false }
}