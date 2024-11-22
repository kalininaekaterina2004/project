import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LanguageItem = ({ logo, lang, experience }) => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.textContainer}>
            <Text style={styles.language}>{lang}</Text>
            <Text style={styles.experience}>Опыт: {experience}</Text>
        </View>
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
        width: 150,
        height: 150,
        marginRight: 20,
    },
    language: {
        fontSize: 28,
    },
    experience: {
        fontSize: 14,
        color: '#666',
      },
});

export default LanguageItem;