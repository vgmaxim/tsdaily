import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require('../img/Untitled.png')}
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={styles.inputField}>
          <Icon name="mail" size={20} />
          <TextInput
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            style={{flex: 1}}
            value={username}
            onChangeText={character => setUsername(character)}
          />
        </View>
        <View style={styles.inputField}>
          <Icon name="key" size={20} />
          <TextInput
            placeholder="Password"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
            style={{flex: 1}}
            value={password}
            onChangeText={character => setPassword(character)}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              console.log('Button pressed!');
              console.log('You have entered: ');
              console.log(username + ' ' + password);
            }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotPassword}>
          <Text>Ai uitat parola?</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {backgroundColor: 'lavender', flex: 1},
  container: {marginTop: 60, marginHorizontal: 60},
  logo: {justifyContent: 'center', alignItems: 'center'},
  inputField: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 5,
  },
  btnLogin: {
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 0,
    width: 120,
    height: 30,
    borderRadius: 20,
    marginTop: 15,
  },
  forgotPassword: {
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0,
    marginTop: 40,
    alignItems: 'center',
  },
});

export default Login;
