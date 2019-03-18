import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

class NumButtons extends React.Component{
  constructor() {
super()
this.onButtonPress= this.onButtonPress.bind()
  }

 onButtonPress= ()=>{

  this.props.onPressButton(this.props.title)
 }
render() {
  return (

    <TouchableOpacity
    style={this.props.styleButton}
    onPress={this.onButtonPress}
    underlayColor='#fff'>
    <Text style={this.props.styleText} >{this.props.title}</Text>
    </TouchableOpacity>

  )
  }
}

export default NumButtons;
