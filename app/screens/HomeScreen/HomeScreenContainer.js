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

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

export default HomeScreenContainer
