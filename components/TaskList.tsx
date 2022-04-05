import {
  Alert,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useTasks } from '../hooks';
import Task from './Task';

export default function TaskList(): React.ReactElement {
  const { taskItems, editTask, completeTask } = useTasks();

  const renderConfirmDelete = (taskIndex: number) =>
    Alert.alert('Are you sure you want to delete this task', undefined, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Yes, delete', onPress: () => completeTask(taskIndex) },
    ]);

  return (
    <SafeAreaView style={styles.items}>
      <ScrollView>
        {taskItems.map(({ name, finished }, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => editTask(index, { name, finished: !finished })}
          >
            <Task
              id={index}
              text={name}
              finished={finished}
              confirmDelete={() => renderConfirmDelete(index)}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  items: { marginTop: 30 },
});
