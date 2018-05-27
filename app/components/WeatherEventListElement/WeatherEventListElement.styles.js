const styles = {
  containerStyle: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 5,
    borderColor: '#f5f5f6',
    paddingHorizontal: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  currentWeatherEventContainerStyle: {
    flex: 5
  },
  currentEventsNumberStyle: {
    textAlign: 'center',
    fontSize: 12
  },
  addEventContainerStyle: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 20
  },
  addButton: {
    flex: 1,
    width: 32,
    height: 32,
    resizeMode: 'contain'
  }
}

export default styles
