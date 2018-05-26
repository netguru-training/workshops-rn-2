import { connect } from 'react-redux'
import HomeScreen from './HomeScreen'

const mapStateToProps = (state) => {
  return {
    stuff: state
  }
}

const mapDispatchToProps = (/* dispatch */) => {
  return {
    // onAddEvent: (dateAsString) => {
    //   dispatch(showAddEventScreen(dateAsString))
    // }
    
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
