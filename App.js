/* eslint-disable no-undef */
/* eslint-disable max-len */
import List from './components/List';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <View style={styles.listContainer}>
        <List></List>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require('./assets/catAdopt2.jpg')}/>
      <Text style={styles.headertext}> There are currently 1435 homeless cats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#0EFF2E',
  },
  headertext: {
    position: 'absolute',
    backgroundColor: 'gray',
    top: 20,
    right: 0,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  listContainer: {
    flex: 2,
  },

});


export default App;

