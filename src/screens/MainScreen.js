import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { ImageCard } from "../ImageCard";

export default class MainScreen extends Component {
  state = {
    data: [],
    page: 1
  };

  componentDidMount = () => {
    this.makeRemoteRequest();
  };

  makeRemoteRequest = () => {
    const { page } = this.state;
    const url = "https://api.pexels.com/v1/curated?per_page=80&page=" + page;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization:
          "563492ad6f9170000100000184c3bbd290f54ca6ae3bc0780991748f"
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: page === 1 ? response.photos : [...this.state.data, ...response.photos],
        });
      })
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  goToBigImage = url => {
    this.props.navigation.navigate("Image", { url: url });
  };

  render() {
    const src = this.state.data;
    return (
      <View>
        <View style={styles.list}>
          <FlatList
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            data={src}
            renderItem={({ item }) => (
              <ImageCard data={item} key={item.id} onOpen={this.goToBigImage} />
            )}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
        </View>
      </View>
    );
  }
}

MainScreen.navigationOptions = {
  headerTitle: "Photo Gallery"
};

const styles = StyleSheet.create({
  list: {
    marginTop: 8,
    marginBottom: 20
  }
});
