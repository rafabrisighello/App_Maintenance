import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Footer = (props) => {

    const { message, time, status } = props;

    return (
        <View style = {styles.container}>
            <View style={styles.detail}>

            </View>
            <View style={styles.info}>
                <Icon style = {styles.icon} name='check-circle' size={40} color='#000' />
                <Text style = {styles.infoText}> Test text while don't have data bank</Text>
            </View>
        </View>
    );
};

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: maxWidth,
    },
    detail: {
        flex: 1,
        backgroundColor: '#faa30c',
    },
    info: {
        flex: 14,
        flexDirection: 'row',
        backgroundColor: '#d8e0e6',
        justifyContent: 'center',
        alignText: 'center'
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoText: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});