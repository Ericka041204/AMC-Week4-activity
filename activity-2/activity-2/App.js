import React from 'react';
import {StyleSheet,Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
  <Text style={styles.title}>
  <Text style={styles.boldText}>Ericka </Text>
  <Text style={styles.italicText}>Daigo </Text>
  </Text>
  </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'lightblue',
  },
  title: {
    borderWidht: 4,
    borderColor: '#20232a',
    borderRaduis: 6,
    backgroundColor: 'violet',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic',
  }
});

export default App;