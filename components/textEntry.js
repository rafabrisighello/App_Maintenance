import React from 'react';
import { View, StyleSheet, Text, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TextEntry = (props) => {

    const { header, defaultText } = props;

    return(
        <View style = {styles.textBox}>
            <Text style = {styles.textHeader}>{header}</Text>
            <TextInput style = {styles.textContent} defaultValue={defaultText} />
        </View>
    );
}

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const inputWidth = maxWidth - 40;
const inputHeight = maxHeight * 0.10;

const styles = StyleSheet.create({
    textBox: {
        width: inputWidth,
        height: inputHeight,
        backgroundColor: '#d1dfeb',
        borderRadius: 5,
        borderColor: '#026ebd',
        borderLeftWidth: 5,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 4,
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10
    },
    textHeader: {
        flex: 1,
        fontSize: 18,
        fontWeight: "700",
        paddingLeft: 10
    },
    textContent: {
        flex: 1,
        fontSize: 16,
        color: '#555',
        fontWeight: '500',
        paddingLeft: 10
    }
});