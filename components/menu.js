import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text, Dimensions, TouchableOpacity } from 'react-native';


export const MenuModel = () => {

    return( 
        <Text>Menu</Text>
    );
};

export default MenuModel;

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const menuWidth = maxWidth - 40;
const menuHeight = maxHeight * 0.1;

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 200,
    },
    anchor: {
        width: menuWidth,
        height: menuHeight,
        backgroundColor: '#d1dfeb',
        borderRadius: 5,
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 4,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10
    }
});