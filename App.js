import React, { Component } from 'react';
import { FlatList, Text, StyleSheet, View, TextInput, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Title from './Title';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: [
        {id : 1, todo: 'thing1', checked: false},
        {id : 2, todo: 'thing2', checked: false},
        {id : 3, todo: 'thing3', checked: false}
      ],
      text: 'test' 
    };
  }
renderItem = ({item}) => {
  return  <View style={styles.rowcontainer}>
            <Text>
              {item.todo}
            </Text>
            <Button
              title="Remove"
              onPress={() => {
                this.removeItem(item)
                }} 
            />
            <CheckBox
            title="completed"
            checked={item.checked}
            onPress={() => {this.toggleItemcompleted(item.id)}} 
            />
          </View>
}

toggleItemcompleted = (id) => {
  todosList = this.state.todos;
  let updatedList = todosList.map((todoObj)=>{
    if(id === todoObj.id){
      return {...todoObj, checked: !todoObj.checked}
    } else return todoObj
  })
  console.log(updatedList)
  this.setState({todos : updatedList})
}

addItem = (task) => {
 todosList = this.state.todos;
 todosList.push({todo: task, checked: false});
 this.setState({todos: todosList})
 console.log(this.state.todos)
}
removeItem = (taskObj) => {
 todosList = this.state.todos;
 todosList.pop(taskObj);
 this.setState({todos: todosList})
 console.log(this.state.todos)
}
removeCompletedItems = () => {
  let todosArray = this.state.todos
  let filterArray = todosArray.filter((todoObj)=>{
    if (todoObj.checked){
    return false }
    else {
      return true
    }
  })
  this.setState({todos : filterArray})
}

  render() {
    return (
      <View style={styles.container}>
        <Title/>
        <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Button
        title="Submit"
        onPress={() => {
          this.addItem(this.state.text)
          }} 
        /> 
        <FlatList
          extraData={this.state}
          // style={styles.container}
          contentContainerStyle={styles.row}
          data={this.state.todos}
          renderItem={this.renderItem}
        />
        <Footer
        deleteCompleted = {this.removeCompletedItems}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent : 'center'
  },
  row: {
    backgroundColor: "lightgrey"
  },
  textInput: {
    height: 50,
    width: 200,
    backgroundColor: "yellow",
    textAlign: 'center'
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center'
  },
  

})
