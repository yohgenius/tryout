import React from 'react';
import { StyleSheet, Text, AppRegistry, View } from 'react-native';

const contacts = {[
    {
        id: 1,
        firstName: "Amy",
        lastName: "Taylor",
        title: "CEO",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "amy@fakemail.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/amy_taylor.jpg"
    },
    {
        id: 2,
        firstName: "Anup",
        lastName: "Gupta",
        title: "VP of Engineering",
        managerId: 1,
        managerName: "Amy Taylor",
        phone: "617-123-4567",
        mobilePhone: "617-987-6543",
        email: "anup@fakemail.com",
        picture: "https://s3-us-west-1.amazonaws.com/sfdc-demo/people/anup_gupta.jpg"
    }
};


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Boss!</Text>
        <Text>Hello, Boss!</Text>
        <Text>Hello, Boss!</Text>
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
