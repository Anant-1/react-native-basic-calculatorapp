import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import NumButtons from './components/numbers.js';

export default class App extends React.Component {
constructor() {
  super()
  this.state= {calculation: '0',result: '0'}
  this.buttonPressed =this.buttonPressed.bind()
  this.evaluatePressed =this.evaluatePressed.bind()
  this.reset=this.reset.bind()
}
  buttonPressed= (title)=>{
    if(this.state.calculation == '0') {
      this.setState({calculation:title})
    }
    else {
      this.setState((prev)=>({calculation: prev.calculation + title}))

    }
  }

  evaluatePressed = ()=>{

    this.setState({result: eval(this.state.calculation).toString()})

  }

  reset=()=>{

    this.setState({calculation : '0'})

  }
  render()
  {
    return (
      <View style={styles.container}>


        <View style={styles.result}>
        <Text style={styles.resultText}>{this.state.calculation}</Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.calculationText}>{this.state.result}</Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.rowNums}>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="0"  onPressButton={this.buttonPressed}/>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="1"  onPressButton={this.buttonPressed}/>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="2"  onPressButton={this.buttonPressed}/>
          </View>
          <View style={styles.rowNums}>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="3"  onPressButton={this.buttonPressed}/>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="4"  onPressButton={this.buttonPressed}/>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="5"  onPressButton={this.buttonPressed}/>
          </View>
          <View style={styles.rowNums}>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="6"  onPressButton={this.buttonPressed}/>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="7"  onPressButton={this.buttonPressed}/>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="8"  onPressButton={this.buttonPressed}/>
          </View>
          <View style={styles.rowNums}>
          <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="9"  onPressButton={this.buttonPressed}/>
          <TouchableOpacity style={styles.button}  title="Clear"  onPress={this.reset}><Text style={styles.buttonFont}>Clear</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} title="="  onPress={this.evaluatePressed}><Text style={styles.buttonFont}>=</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
        <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="+"  onPressButton={this.buttonPressed}/>
        <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="-"  onPressButton={this.buttonPressed}/>
        <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="/"  onPressButton={this.buttonPressed}/>
        <NumButtons styleButton={styles.button} styleText={styles.buttonFont} title="*"  onPressButton={this.buttonPressed}/>
        </View>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultText: {
    fontSize:40,
    color: 'orange',
  },
  calculationText: {

    fontSize:30,
    color: 'orange',

  },
  result: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  calculation: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex:3,
    backgroundColor: 'black'
  },
  operations: {
    flex:1,
    backgroundColor: 'black'
  },
  rowNums: {

    flexDirection: 'row'

  },

  button: {
    backgroundColor:'black',
    width:94,
    height: 120,
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:0.7,
    borderColor: 'gray',
  },
  buttonFont:{
color:'orange',
fontSize:16,



  }


});
