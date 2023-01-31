
import messaging from '@react-native-firebase/messaging';

const getToken = async () => {
    try {
      const token = await messaging().getToken();
      if (token) return token;
    } catch (error) {
      console.log(error);
    }
  };
  
const getFCMToken = async () => {
    try {
      const authorized = await messaging().hasPermission();
      const fcmToken = await getToken();
  
      if (authorized) return fcmToken;
  
      await firebase.messaging().requestPermission();
      return fcmToken;
    } catch (error) {
      console.log(error);
    }
  };
  
  export { getFCMToken };

