import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go To Login"
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#b0c4de',
    justifyContent: 'center',
  },
});
