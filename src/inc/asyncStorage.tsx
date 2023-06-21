import AsyncStorage from '@react-native-async-storage/async-storage';

export const removeValue = async (key:string) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    alert(error);
  }
};

export const setValue = async (key:string, value:any) => {
  try {
    await AsyncStorage.setItem(key, value).then(() => {});
  } catch (error) {
    alert(error);
  }
};
export const getValue = async (key:string) => {
  try {
    let value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    alert(error);
  }
};
