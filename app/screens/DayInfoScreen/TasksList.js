// TasksList
import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList } from 'react-native'
import styles from './TasksList.styles'
import DailyTaskElement from '../../components/DailyTaskElement/DailyTaskElement'
import { CardSection } from '../../components'


const {
  containerStyle, tasksListStyle, taskHeaderStyle, taskHeaderContainerStyle
} = styles

const TasksList = ({ tasks }) => {
  return (
    <View style={containerStyle}>
      <View style={taskHeaderContainerStyle}>
        <Text style={taskHeaderStyle}>Tasks</Text>
      </View>
      <FlatList
        style={tasksListStyle}
        data={tasks}
        renderItem={({ item }) => {
          return (
            <CardSection>
              <DailyTaskElement
                title={item.title}
                description={item.description}
                done={item.done}
                onComplete={() => {
                  console.log('Complete pressed') // FIXME add task completion  #35
                }}
              />
            </CardSection>

          )
        }}
        keyExtractor={(item) => {
          return String(item.id)
        }}
      />
    </View>
  )
}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired
    })
  )
}
export default TasksList
