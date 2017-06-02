import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ManHinhA from "./src/mainA"

class Calculator extends Component {
  render(){
    return(
      <ManHinhA/>
    )
  }
}


AppRegistry.registerComponent('Calculator', () => Calculator);
