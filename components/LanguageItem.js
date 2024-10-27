import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ logo, lang }) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.text}>{lang}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 200,
        height: 200,
        marginRight: 20,
    },
    text: {
        fontSize: 28,
    },
});

export default LanguageItem;