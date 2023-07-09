import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

interface SiginProps {
  navigation: any;
}

export default function Signin({navigation}: SiginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const createUser = () => {
    console.log('check', email, password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  useEffect(() => {
    console.log('data', email, password);
  }, [email, password]);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.elevation}>
          <TextInput
            style={styles.textField}
            placeholder="E-mail"
            placeholderTextColor={'#0A0A0A'}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.elevation}>
          <TextInput
            style={styles.textField}
            placeholder="Password"
            placeholderTextColor={'#0A0A0A'}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={styles.forgotPasswordTextContainer}>
        <Text style={styles.forgotPasswordText}>
          Oops! I forgot my password
        </Text>
      </View>
      <View>
        <Button title="Sign-in" color="#ED6C50" onPress={() => createUser()} />
      </View>
      <View style={{alignItems: 'center', marginTop: 48}}>
        <Button title="I need to sign-up!" color="#0A0A0A" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 331,
    padding: 20,
  },
  textField: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    textAlign: 'center',
    color: 'black',
    fontWeight: '400',
  },
  elevation: {
    paddingBottom: 16,
    elevation: 200,
    shadowColor: '#52006A',
  },
  forgotPasswordTextContainer: {
    alignItems: 'center',
    marginTop: 33,
    marginBottom: 33,
  },
  forgotPasswordText: {
    color: '#191919',
    fontSize: 12,
  },
});
