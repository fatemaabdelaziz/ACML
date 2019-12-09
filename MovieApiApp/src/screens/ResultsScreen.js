import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, SafeAreaView, Text, ScrollView, FlatList } from 'react-native';
import SingleMovieView from '../components/SingleMovieView';

class ResultsScreen extends Component {

  renderItem({ item }) {
    return (
      <SingleMovieView item={item} />
    )
  }
  render() {
    let data = this.props.navigation.getParam('data');
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, }}>
          <Text style={{ fontSize: 21, marginLeft: 10 }}>Search Results</Text>
          <FlatList
            data={data}
            renderItem={this.renderItem.bind(this)}
            style={{ marginTop: 20 }}
          />
        </View>
      </SafeAreaView >
    )
  }
}

export default ResultsScreen;