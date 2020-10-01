import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../styles/colors';
import { MediumAppText } from '../../styles/text';

function HistoricalUnusedSuggesitonItem({ onSuggestionAdd, name }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <MediumAppText style={{ marginTop: -10, marginRight: 10, fontSize: 12 }}>
        {name}
      </MediumAppText>
      <TouchableOpacity
        style={[styles.removeIcon, { backgroundColor: colors.green }]}
        onPress={() => {
          onSuggestionAdd(name);
        }}
      >
        <Image style={styles.add} source={require('../../assets/add.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    height: 9,
    width: 9,
  },
  removeIcon: {
    backgroundColor: colors.lightGray,
    opacity: 1,
    width: 12,
    height: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -15,
  },
});

export default HistoricalUnusedSuggesitonItem;
