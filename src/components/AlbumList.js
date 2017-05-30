import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }; //Initialize state empty state

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data })); // this shows that our state is no longer an empty state as we have defined above
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  } // the map function will loop through thte array of albums which we have fetched through api

  render() {
    console.log(this.state);

      return (
          <ScrollView>
            {this.renderAlbums()}
          </ScrollView>
      );
  }
}

export default AlbumList;
