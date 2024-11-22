import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LanguageItem from './components/LanguageItem';

const langs = [
    { id: '1', lang: 'JavaScript', logo: require('./assets/js-logo.png') },
     { id: '2', lang: 'C#', logo: require('./assets/c#-logo.png') },
    { id: '3', lang: 'Java', logo: require('./assets/java-logo.png') },
];

function App () {
    return (
        <View style={styles.container}>
            <FlatList
                data={langs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <LanguageItem logo={item.logo} lang={item.lang} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});

export default App;
