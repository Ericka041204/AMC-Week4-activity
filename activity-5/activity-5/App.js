import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'Morning' },

{ id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', 
    title: 'eating' },

{ id: '58694a0f-3da1-471f-bd96-145571e29d72', 
    title: 'Social Media' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'Taking a bath' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'playing Games' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'Bonding with friends' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'Playing with my dog' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'tambay' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'Watching Movie' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'eating with friends' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'bebetime' },

{ id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 
    title: 'Sleep' },
];

type ItemProps = { title: string, id: string };

const Item = ({ title, id }: ItemProps) => {
const [isSelected, setIsSelected] = useState(false);
const colors = ['lightgreen', 'lightblue', 'red', 'lightviolet'];
const colorIndex = DATA.indexOf(DATA.find(item => item.id === id)) % colors.length; //get the index and use modulo to cycle through colors

return (
<TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
<View style={[styles.item, isSelected && { backgroundColor: colors[colorIndex] }]}>
<Text style={styles.title}>{title}</Text>
</View>
</TouchableOpacity>
);
};

const App = () => (
<SafeAreaProvider>
<SafeAreaView style={styles.container}>
<FlatList
data={DATA}
renderItem={({ item }) => <Item title={item.title} id={item.id} />}
keyExtractor={item => item.id}
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
backgroundColor: 'violet',
padding: 20,
marginVertical: 8,
marginHorizontal: 20,
},
title: {
fontSize: 18,
},
});

export default App;