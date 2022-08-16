import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text , Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CardModel = (props) => {

    const {header, info, taskNumber, status} = props;

    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <View style={styles.taskType}>
                    <Icon name='check-circle' size={40} color='#000'/>
                </View>
                <View style={styles.cardInfo}>
                    <Text style={styles.header}> {header}</Text>
                    <Text style={styles.info}> {info}</Text>
                </View>
                <View style={styles.taskStatus}>
                    <Icon name='report-problem' size={50} color='#000' />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;
const cardWidth = maxWidth - 40;
const cardHeight = maxHeight * 0.12;

const styles = StyleSheet.create ({
    card: {
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: '#026ebd',
        borderWidth: 3,
        elevation: 3,
        backgroundColor: '#ddd',
        width: cardWidth,
        height: cardHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskType: {
        flex: 1,
        paddingLeft: 10,

    },
    cardInfo: {
        flex:3,
        flexDirection: 'column',
        paddingTop: 0.1 * cardHeight,
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        fontSize: 18,
        fontWeight: '700'
    },
    info: {
        flex: 2,
        fontSize: 16,
        fontWeight: '500'
    },
    taskStatus: {
        flex: 1,
    }

});