import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class Title extends Component {
    render() {
      return (
        <Header
        centerComponent={{text: "Todo List", style:{color : 'white' , fontSize: 25}}}
        containerStyle={styles.Title}
        />
            
    
      );
    }
  }
  
  const styles = StyleSheet.create({
    Title: {
      flex: .1,
      backgroundColor : 'grey'
    },
  
  })

  