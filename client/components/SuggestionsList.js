import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { MediumAppText } from '../styles/text';
import SuggestionItem from './SuggestionItem';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../styles/colors';

function SuggestionsList() {
  const dispatch = useDispatch();
  const suggestionListToDisplay = useSelector(
    (state) => state.settings.suggestionSettings.suggestionsList,
  );
  const navigation = useNavigation();
  const dailySuggestions = useSelector((state) => state.dailyInfo.suggestions);

  function clickHandler(list, suggestion) {
    if (!list.includes(suggestion)) {
      dispatch({
        type: 'ADDTO_SUGGESTIONS',
        payload: suggestion,
      });
    } else {
      dispatch({
        type: 'REMOVEFROM_SUGGESTIONS',
        payload: suggestion,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <MediumAppText style={{ color: colors.darkGrayFont }}>
          MY DAILY SUGGESTIONS
        </MediumAppText>
      </View>
      <View style={styles.cog}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ModifySuggestions')}
        >
          <Image
            style={styles.icons}
            source={require('../assets/settings.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.suggestionWrapper}>
        {suggestionListToDisplay.map((suggestion) => (
          <SuggestionItem
            key={suggestion}
            name={suggestion}
            clickHandler={clickHandler}
            selected={dailySuggestions.includes(suggestion) ? true : false}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cog: {
    position: 'absolute',
    right: 2,
    top: 2,
  },
  icons: {
    height: 15,
    width: 15,
  },
  suggestionWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  topcontainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default SuggestionsList;
