import { createStore } from 'redux';
import { combineReducers } from 'redux';
import dailyInfoReducer from './dailyInfoReducer';
import settingsReducer from './settingsReducer';
import userReducer from './userReducer';
import quoteReducer from './quoteReducer';
import historicalDataReducer from './historicalDataReducer';
import helperReducer from './helperReducer';
import calendarHistoricalDayReducer from './calendarHistoricalDayReducer';

const rootReducer = combineReducers({
  user: userReducer,
  dailyInfo: dailyInfoReducer,
  settings: settingsReducer,
  dailyQuote: quoteReducer,
  historicalData: historicalDataReducer,
  helper: helperReducer,
  calendarHistoricalDay: calendarHistoricalDayReducer,
});

const store = createStore(rootReducer);

export default store;
