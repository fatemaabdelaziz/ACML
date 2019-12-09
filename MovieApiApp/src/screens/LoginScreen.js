import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';

class LoginScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 31 }}>PopCorn</Text>
          <Input
            label="Email"
            labelStyle={{ fontSize: 16, lineHeight: 24, color: 'black' }}
            containerStyle={{ marginTop: 20 }}

          />
          <Input
            label="Password"
            labelStyle={{ fontSize: 16, lineHeight: 24, color: 'black' }}
            containerStyle={{ marginTop: 20 }}
          />
          <Button
            type='solid'
            title='Login'
            titleStyle={{ fontSize: 16, textTransform: 'uppercase', padding: 15, fontWeight: 'bold' }}
            buttonStyle={{ borderRadius: 90 }}
            containerStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.navigate('Home')}
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