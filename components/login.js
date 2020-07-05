import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const login = ({navigation}) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = val => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
  
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={StyleSheet.action}>
          <TextInput
            placeholder="Your email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => textInputChange(val)}
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 15,
            },
          ]}>
          Password
        </Text>
        <View style={StyleSheet.action}>
         
          <TextInput
            placeholder="Your password"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange(val)}
          />
          
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[
              styles.signIn,
              {
                borderColor: '#fa8072',
                borderWidth: 1,
                marginTop: -0,
                marginLeft: 180,
              },
            ]}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fa8072',
                },
              ]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default login;


const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#009387',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer: {
    flex: 1,
    backgroundColor: '#b0c4de',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 90,
    height: 40,
    marginRight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:3,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
