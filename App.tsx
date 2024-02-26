import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import FlatCard from './components/FlatCard';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <FlatCard />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
