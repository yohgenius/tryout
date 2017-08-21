import React, { Component } from 'react';
import { Alert, AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '1', firstName: 'Devin', lasName: 'Judi'},
            {key: '2', firstName: 'Jackson', lasName: 'Michael'},
            {key: '3', firstName: 'James', lasName: 'Jam'},
            {key: '4', firstName: 'Joel', lasName: 'Dude'},
            {key: '5', firstName: 'John', lasName: 'Lenard'},
            {key: '6', firstName: 'Jillian', lasName: 'Jallien'},
            {key: '7', firstName: 'Tommy', lasName: 'Thompson'},
            {key: '8', firstName: 'Julie', lasName: 'Judi'},
          ]}
          renderItem={({item}) => <Text style={styles.item} onPress={() => { Alert.alert('You have tapped a name')}}>{item.firstName} {item.lasName}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
