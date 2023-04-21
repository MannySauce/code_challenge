import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNav from './src/navigation/AppNav';
import { View } from 'react-native'
export default function App() {
  return (
    <AppNav></AppNav>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
