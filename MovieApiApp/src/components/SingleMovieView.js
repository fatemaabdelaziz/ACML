import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import axios from 'axios'
const STORAGE_KEY = '@uid';
class SingleMovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      fav: false,
      item: null
    }
  }
  componentDidMount() {
    this.checkFavorite();


  }
  checkFavorite = async () => {
    let movie = this.props.item
    const uid = await AsyncStorage.getItem(STORAGE_KEY);
    let res = await axios.post(`https://movie-back.herokuapp.com/favorites/checkMovie`, { "movieId": movie.id, "uid": uid })
    if (res.data.found) {
      this.setState({ fav: true, item: movie })
    }
    else {
      this.setState({ fav: false, item: movie })

    }
  }
  onClickListener = async favoriteItem => {
    let movie = this.props.item;
    const uid = await AsyncStorage.getItem(STORAGE_KEY);
    axios.post(`https://movie-back.herokuapp.com/favorites/addRemove`, { "movieId": movie.id, "uid": uid }).then(res => {
      console.log(res.data)
      if (res.data.added) {
        this.setState({ fav: true, item: movie })
      }
      else if (res.data.removed) {
        this.setState({ fav: false, item: movie })
      }
      else {
        alert("Error occured")
      }
    }).catch(e => {
      console.log(e.message)
      alert("Error occured")
    }
    )

  }
  render() {
    let { item } = this.state;
    if (item) {
      return (

        <TouchableOpacity onPress={() => this.setState({ clicked: !this.state.clicked })} onLongPress={() => this.onClickListener()}>
          <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
            <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
                <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>{item.original_title}</Text>
                <Icon
                  name={this.state.fav ? "heart" : "heart-outlined"}
                  onPress={() => this.onClickListener()}
                  style={{ zIndex: 1 }}
                  containerStyle={{ zIndex: 1 }}
                  iconStyle={{ zIndex: 1 }}
                />
              </View>
              {this.state.clicked && <Text style={{ marginLeft: 10, marginTop: 10 }}>{item.overview}</Text>}

              <Text style={{ marginLeft: 10, marginTop: 10, }}>Rating: {item.vote_average} ★</Text>
              <View style={{ alignItems: 'flex-end' }}>
                <Text>{item.original_language}</Text>
                <Text>{item.release_date}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    else {
      return (<View />)
    }
  }
}

export default SingleMovieView;