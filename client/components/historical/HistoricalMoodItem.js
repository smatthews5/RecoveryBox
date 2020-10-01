import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import colors from '../../styles/colors';
import { BoldAppText } from '../../styles/text';

function HistoricalMoodItem({ onMoodsRemove, mood }) {
  return (
    <View
      key={mood}
      style={{
        marginTop: -10,
        flexDirection: 'row',
        minHeight: 30,
        alignItems: 'center',
      }}
    >
      <BoldAppText
        key={mood}
        style={{ marginTop: -10, marginRight: 10, fontSize: 15 }}
      >
        {mood}
      </BoldAppText>
      <TouchableOpacity
        style={styles.removeIcon}
        onPress={() => onMoodsRemove()}
      >
        <Image
          style={styles.remove}
          source={require('../../assets/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  remove: {
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

export default HistoricalMoodItem;
