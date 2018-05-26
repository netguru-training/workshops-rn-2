import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'
import { get7DaysTemperature } from '../../redux/apiData/actions'

const mapStateToProps = (state) => {
  return {
    daysData: state.daysData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load7DaysWeatherData: () => {
      const fn = get7DaysTemperature()
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
