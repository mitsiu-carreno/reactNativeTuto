import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends React.Component{
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri : "https://scontent.fmex6-1.fna.fbcdn.net/v/t35.0-12/20049367_1442193079181496_103158801_o.jpg?oh=95b7007feffd41189c0c701526c0c969&oe=59695126"
    };
    return (
      <View style={styles.container}>
        <Image source = {pic} style={{width:193, height:210}} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Hi love, my kary</Text>
        <Greeting name="kary" />
        <Greeting name="mitsiu" />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
