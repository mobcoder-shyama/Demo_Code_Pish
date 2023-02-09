import AsyncStorage from '@react-native-async-storage/async-storage';



export const storeStringData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (e) {
    return false;
  }
};

export const storeObjectData = async (key,value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (e) {
    return false;
  }
};

export const getStringData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value.toString() : null;
  } catch (e) {
    // console.log('Error reading string data from Async');
    return null;
  }
};

export const getObjectData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // console.log('Error reading string data from Async');
    return null;
  }
};

export const clearAll = async () => {
  try {
    
    await AsyncStorage.clear();
    return true;
  } catch (e) {
    // console.log('Error during clear all data from Async');
  }
  return false;
};
