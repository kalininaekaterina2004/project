import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import LanguageItem from './components/LanguageItem';

const langs = [
    { id: '1', lang: 'JavaScript', logo: require('./assets/js-logo.png') , experience: '2 года' },
    { id: '2', lang: 'HTML', logo: require('./assets/html-logo.png'), experience: '2 года' },
    { id: '3', lang: 'CSS', logo: require('./assets/css-logo.png'), experience: '2 года' },
    { id: '4', lang: 'C#', logo: require('./assets/c#-logo.png'), experience: '1 год' },
    { id: '5', lang: 'Java', logo: require('./assets/java-logo.png') , experience: '1 год' },

];

function App () {
    return (
        <View style={styles.сontainer}>
            <FlatList
                data={langs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <LanguageItem logo={item.logo} lang={item.lang} experience={item.experience} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    сontainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingTop: 20,
    },
});

export default App;
