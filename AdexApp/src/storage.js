import AsyncStorage from '@react-native-community/async-storage';
export const setLocalStorage = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}
export const getLocalStorage = async (key) => {
    return await AsyncStorage.getItem(key);
}
