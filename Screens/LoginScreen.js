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
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import fontSize from '../constants/fontSizes';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginBtnPressed = () => {
    if (validateEmail(username)) {
      console.log('Button pressed!');
      console.log('You have entered: ');
      console.log(username + ' ' + password);
    } else {
      Alert.alert(
        'Eroare autentificare',
        'Adresa de e-mail nu respecta formatul standard. (<username>@totalsoft.ro)',
        [
          {
            text: 'Anulare',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: true},
      );
    }
  };

  const validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <Image
        source={require('../img/strip.png')}
        style={{width: '100%', height: 10}}
      />
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
            placeholder="Utilizator"
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
            placeholder="Parola"
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
            onPress={handleLoginBtnPressed}>
            <Text style={styles.loginBtnText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotPassword}>
          <Text>Ai uitat parola?</Text>
        </View>
      </View>
      <View style={styles.bottom}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.backgroundPrimary,
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
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
    backgroundColor: colors.btnPrimary,
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
  loginBtnText: {fontSize: fontSize.btnFontSize},
  bottom: {
    flex: 1,
    /*flex: 1, justifyContent: 'flex-end', marginTop: 90*/
  },
});

export default LoginScreen;
