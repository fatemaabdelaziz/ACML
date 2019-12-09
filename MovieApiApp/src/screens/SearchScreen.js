import React, { Component } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, SafeAreaView, Text, ScrollView } from 'react-native';
import axios from 'axios';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_name: ''
    }
  }
  //https://api.themoviedb.org/3/movie/27576?api_key=8563a98bf612db1aa0f03cc509a04722&language=en-US
  onSearchPress() {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8563a98bf612db1aa0f03cc509a04722&language=en-US&query=${this.state.movie_name}&include_adult=true`)
      .then(res => {
        console.log(res.data.results)
        this.props.navigation.navigate('Results', {
          data: res.data.results
        })
      })
      .catch(err => console.log(err))
  }
  onFavoritesPress() {
    let favoriteMovies = [];
    axios.post(`https://movie-back.herokuapp.com/favorites/userFavorites`, { "uid": "wbl9e8YpAWQtnNM62ik8JXlyAqE2" }).then(res => {
      console.log({ "HERE: ": res.data.userFavorites.length > 0 })
      if (res.data.userFavorites.length > 0) {
        let userFavorites = res.data.userFavorites
        console.log(userFavorites)
        userFavorites.map(oneFav => {
          axios.get(`https://api.themoviedb.org/3/movie/${oneFav}?api_key=8563a98bf612db1aa0f03cc509a04722&language=en-US`)
            .then(res => {
              console.log(res.data)
              favoriteMovies.push(res.data)
            })
            .catch(err => console.log(err))
        })
        this.props.navigation.navigate('Results', {
          data: favoriteMovies
        })
      }
      else {
        this.props.navigation.navigate('Results', {
          data: favoriteMovies
        })
      }
    })


  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 31 }}>PopCorn</Text>
          <Input
            label="Enter the movie"
            labelStyle={{ fontSize: 16, lineHeight: 24, color: 'black' }}
            containerStyle={{ marginTop: 20 }}
            onChangeText={(text) => this.setState({ movie_name: text })}
            value={this.state.movie_name}
          />
          <Button
            type='solid'
            title='Search'
            titleStyle={{ fontSize: 16, textTransform: 'uppercase', padding: 15, fontWeight: 'bold' }}
            buttonStyle={{ borderRadius: 90 }}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onSearchPress.bind(this)}
          />
          <Button
            type='solid'
            title='My Favorites'
            titleStyle={{ fontSize: 16, textTransform: 'uppercase', padding: 15, fontWeight: 'bold' }}
            buttonStyle={{ borderRadius: 90, backgroundColor: 'red' }}
            containerStyle={{ marginTop: 20 }}
            onPress={this.onFavoritesPress.bind(this)}
          />
        </View>
      </SafeAreaView >
    )
  }
}

export default SearchScreen;