import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
class SingleMovieView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      fav: false
    }
  }
  render() {
    let { item } = this.props;
    return (
      <TouchableOpacity onPress={() => this.setState({ clicked: !this.state.clicked })} onLongPress={()=> this.setState({fav: !this.state.fav})}>
        <View style={{ borderWidth: 1, borderColor: 'black', borderRadius: 15, marginBottom: 10, marginLeft: 10, marginRight: 10 }}>
          <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' }}>
              <Text style={{ marginLeft: 10, fontSize: 18, fontWeight: 'bold' }}>{item.original_title}</Text>
              <Icon
                name={this.state.fav ? "heart" : "heart-outlined"} type="entypo"
                onPress={() => this.setState({ fav: !this.state.fav })}
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
}

export default SingleMovieView;