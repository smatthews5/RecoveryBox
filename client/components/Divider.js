import React from 'react';
import { View, StyleSheet } from 'react-native';

function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});

export default Divider;
