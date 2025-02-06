import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, SectionList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const morningData = [
{ title: 'Breakfast' },
{ title: 'Taking a bath' },
{ title: 'Social Media' },
{ title: 'Playing with my dog' },
];

const afternoonData = [
{ title: 'Playing Games' },
{ title: 'Eating' },
{ title: 'Bonding with friends' },
{ title: 'Eating with friend' },
];

const eveningData = [
{ title: 'Tambay' },
{ title: 'Watching Movie' },
{ title: 'Dinner' },
{ title: 'Playing games' },
{ title: 'Sleep' },
];


const DATA = [
{ title: 'Morning', data: morningData },
{ title: 'Afternoon', data: afternoonData },
{ title: 'Evening', data: eveningData },
];


type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
<View style={styles.item}>
<Text style={styles.title}>{title}</Text>
</View>
);

const App = () => (
<SafeAreaProvider>
<SafeAreaView style={styles.container}>
<SectionList
sections={DATA}
keyExtractor={(item, index) => item.title + index} // Updated keyExtractor
renderItem={({ item }) => <Item title={item.title} />}
renderSectionHeader={({ section: { title } }) => (
<Text style={styles.sectionHeader}>{title}</Text>
)}
/>
</SafeAreaView>
</SafeAreaProvider>
);

const styles = StyleSheet.create({
container: {
flex: 1,
marginTop: StatusBar.currentHeight || 0,
},
item: {
backgroundColor: '#f9c2ff',
padding: 20,
marginVertical: 8,
marginHorizontal: 16,
},
title: {
fontSize: 16,
},
sectionHeader: {
paddingTop: 2,
paddingLeft: 10,
paddingRight: 10,
paddingBottom: 2,
fontSize: 18,
fontWeight: 'bold',
backgroundColor: 'rgba(240,240,240,1.0)',
},
});

export default App;