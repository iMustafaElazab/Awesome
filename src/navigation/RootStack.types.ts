import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  splash: undefined;
  login: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type {RootStackParamList, RootStackScreenProps};
