import React, { Component } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Header,Button } from 'react-native-elements';

export default class Footer extends Component {
    render() {
      return (
        <Header
          containerStyle={styles.container}
          centerComponent={
            <Button 
              title="Remove Completed Items"
              buttonStyle={styles.Button}
              onPress={() => {
                this.props.deleteCompleted();
              }}
            >
            </Button>
          }
        >
        </Header>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: .33,
      backgroundColor: 'grey',      
    },
    Button:{
      width: 300
    }
  
  })

  