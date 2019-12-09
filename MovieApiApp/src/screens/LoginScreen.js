import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, SafeAreaView, Text, ScrollView, AsyncStorage } from 'react-native';
import axios from 'axios'
const STORAGE_KEY = '@uid';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onClickSignUp = async signUp => {
    let userDetails = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post('https://movie-back.herokuapp.com/user/signup', userDetails).then(async res => {
      console.log(res)
      alert('You will be directed to our home page' + '\n' + ' once registeration completes successfully')
      console.log(res.data)
      if (res.data.userId) {
        await AsyncStorage.setItem(STORAGE_KEY, res.data.userId);
        this.props.navigation.navigate('Home')
      }
      else {
        axios.post(`https://movie-back.herokuapp.com/user/signin`, userDetails).then(res => {
          if (res.data) {
            console.log(res.data)
            alert("You already have an account")
          }
          else {
            alert("Please make sure that you dont have an account with same email" + '\n' + "if you already have an account click sign in")
          }
        }).catch(e => {
          console.log(e.message)
        }
        )
      }
    }).catch(e => {
      console.log(e)
      console.log(e.message)
    })
  }
  onClickListener = async signIn => {
    let userDetails = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post(`https://movie-back.herokuapp.com/user/signin`, userDetails).then(async res => {
      if (res.data.user) {
        await AsyncStorage.setItem(STORAGE_KEY, res.data.user.uid);
        this.props.navigation.navigate('Home')
      }
      else {
        alert("Wrong Credentials")
      }
    }).catch(e => {
      console.log(e.message)
    }
    )
  }
  render() {

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 31 }}>PopCorn</Text>
          <Input
            label="Email"
            labelStyle={{ fontSize: 16, lineHeight: 24, color: 'black' }}
            containerStyle={{ marginTop: 20 }}
            onChangeText={email => this.setState({ email: email })}


          />
          <Input
            label="Password"
            labelStyle={{ fontSize: 16, lineHeight: 24, color: 'black' }}
            containerStyle={{ marginTop: 20 }}
            onChangeText={password => this.setState({ password: password })}

          />
          <Button
            type='solid'
            title='Login'
            titleStyle={{ fontSize: 16, textTransform: 'uppercase', padding: 15, fontWeight: 'bold' }}
            buttonStyle={{ borderRadius: 90 }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.onClickListener()}
          // onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            type='solid'
            title='Sign Up'
            titleStyle={{ fontSize: 16, textTransform: 'uppercase', padding: 15, fontWeight: 'bold' }}
            buttonStyle={{ borderRadius: 90, backgroundColor: 'green' }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.onClickSignUp()}
          />
        </View>
      </SafeAreaView >
    )
  }
}

export default LoginScreen;