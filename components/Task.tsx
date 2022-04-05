import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProps } from '../screens/types';

import { TaskPropTypes } from './types';

export default function Task({
  id,
  text,
  finished,
  confirmDelete,
}: TaskPropTypes): React.ReactElement {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View
          style={[
            styles.square,
            finished ? { backgroundColor: '#55bcf6' } : {},
          ]}
        />
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.actionBtns}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Details', {
              taskId: id,
            })
          }
        >
          <View style={styles.edit} />
        </TouchableOpacity>
        <TouchableOpacity onPress={confirmDelete}>
          <View style={styles.delete} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 20,
    borderRadius: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    marginRight: 15,
    borderRadius: 5,
    borderColor: '#55bcf6',
    borderWidth: 2,
    opacity: 0.4,
  },
  itemText: {
    maxWidth: '80%',
  },
  actionBtns: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    width: 12,
    height: 12,
    borderColor: 'orange',
    borderWidth: 2,
    borderRadius: 5,
  },
  delete: {
    width: 12,
    height: 12,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
});
