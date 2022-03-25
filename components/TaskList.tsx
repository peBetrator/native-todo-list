import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useTasks } from '../hooks';
import Task from './Task';

export default function TaskList(): React.ReactElement {
  const { taskItems } = useTasks();

  return (
    <View style={styles.items}>
      {taskItems.map((text, index) => (
        <TouchableOpacity key={index}>
          <Task id={index} text={text} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    marginTop: 30,
  },
});
