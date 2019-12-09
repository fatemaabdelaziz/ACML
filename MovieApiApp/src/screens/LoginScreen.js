import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import axios from 'axios'
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }


  onClickListener = async viewId => {
    let userDetails = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post(`https://movie-back.herokuapp.com/user/signin`, userDetails).then(res => {
      if (res.data.user) {
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
          />
        </View>
      </SafeAreaView >
    )
  }
}

export default LoginScreen;