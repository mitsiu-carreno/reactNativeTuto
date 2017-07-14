import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends React.Component{
  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

class Blink extends React.Component{
  constructor(props){
    super(props);
    this.state = { showText : true};    //Use state for data that is going to change

    //Toggle the state every second
    setInterval(() =>{
      this.setState(previousState =>{
        return {showText : !previousState.showText };
      })
    }, 1000);
  }

  render(){
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
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
        <Text style={styles.bigRed}>Hi love, my kary</Text>
        <Greeting name="kary" />
        <Greeting name="mitsiu" />
        <Blink text="i love u" />
        <View style={{width : 50, height : 50, backgroundColor : 'powderblue'}}></View>
        <View style={{width : 100, height : 100, backgroundColor : 'skyblue'}}></View>
        <View style={{width : 150, height : 150, backgroundColor : 'steelblue'}}></View>
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
  bigRed : {
    color: 'red',
    fontWeight : 'bold',
    fontSize: 30,
  }
});
