//import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
    async saveItem(key, value) {
        //try {
        //    await AsyncStorage.setItem(key, value);
        //} catch (error) {
        //    console.log('AsyncStorage Error: ' + error.message);
        //}
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
          } catch (e) {
            // saving error
          }
    },
    async getItem(key) {
        //try {
        //    var val = await AsyncStorage.getItem(key);
        //    //console.log(val)
        //    return val;

        //} catch (error) {
        //    console.log('AsyncStorage Error: ' + error.message);
        //    return null;
        //}

        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;

          } catch (e) {
            // error reading value
          }
    }
};

export default deviceStorage;