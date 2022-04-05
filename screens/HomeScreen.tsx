import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AddTaskInput, TaskList } from '../components';

export default function HomeScreen(): React.ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <TaskList />
      </View>
      <AddTaskInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
