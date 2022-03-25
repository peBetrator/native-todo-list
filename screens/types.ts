import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type StackParamList = {
  Home: undefined;
  Details: { taskId: number };
};

export type NavigationProps = NativeStackNavigationProp<StackParamList>;
