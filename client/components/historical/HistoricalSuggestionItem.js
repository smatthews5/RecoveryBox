import React, { useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import colors from '../../styles/colors';
import { MediumAppText, BoldAppText } from '../../styles/text';

function HistoricalSuggesitonItem({ onSuggestionRemove, suggestion }) {
  return (
    <View
      key={suggestion}
      style={{
        marginTop: -10,
        flexDirection: 'row',
        minHeight: 30,
        alignItems: 'center',
      }}
    >
      <BoldAppText
        key={suggestion}
        style={{ marginTop: -10, marginRight: 10, fontSize: 15 }}
      >
        {suggestion}
      </BoldAppText>
      <TouchableOpacity
        style={styles.removeIcon}
        onPress={() => onSuggestionRemove()}
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

export default HistoricalSuggesitonItem;
