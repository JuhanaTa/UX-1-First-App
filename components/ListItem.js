import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.kittenContainer}>
      <View style={styles.cat}>
        <Image
          style={[styles.image, styles.position]}
          source={{uri: props.item.thumbnails.w160}}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.text}>{props.item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cat: {
    margin: 10,
    flex: 1,

  },
  info: {
    margin: 10,
    flex: 2,
  },
  kittenContainer: {
    backgroundColor: 'gray',
    flexDirection: 'row',
    marginTop: 10,
    flex: 1,
    borderWidth: 2,
    width: '94%',
    marginRight: '3%',
    marginLeft: '3%',
    elevation: 8,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7A0B12',
  },
  text: {
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    overflow: 'hidden',

  },
  position: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '10%',
    top: '25%',
  },
});

ListItem.propTypes = {
  item: PropTypes.object,
};

export default ListItem;
