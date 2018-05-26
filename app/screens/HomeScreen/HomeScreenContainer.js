import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import { getTemperature } from '../../redux/apiData/actions'
import { daysData } from '../../redux/apiData/reducer'

const mapStateToProps = (state) => {
  return {
    stuff: state,
    daysData: state.daysData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadWeatherData: () => {
      const fn = getTemperature()
      fn(dispatch)
    }
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  // we need to merge for example `navigation` property
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps
  }
}

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(HomeScreen)

export default HomeScreenContainer
