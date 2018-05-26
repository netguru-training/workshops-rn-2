import { combineReducers } from 'redux'
import { apiData, daysData } from './apiData/reducer'

export default combineReducers({
  apiData,
  daysData
})
