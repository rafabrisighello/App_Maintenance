import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import { Footer } from '../components/footer.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export const MenuScreen = (props) => {

    const navigation = useNavigation();

    return( 
        <View style = {styles.container}>
            <View style = {styles.top}>
                <View style = {styles.menuItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                        <Icon name='check-circle' size={80} color='#000' />
                        <Text> MenuItem </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('ContextHome')}>
                        <Icon name='check-circle' size={80} color='#000' />
                        <Text> MenuItem </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.bottom}>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('GerTecnicos')}>
                        <Icon name='check-circle' size={80} color='#000' />
                        <Text> MenuItem </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigation.navigate('GerTecnicos')}>
                        <Icon name='check-circle' size={80} color='#000' />
                        <Text> MenuItem </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer style = {styles.footer}/>
        </View>
    );
}

export default MenuScreen;

const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: maxWidth
    },
    top: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuItem: {
        width: maxWidth / 2,
        height: maxHeight / 4,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1.5
    }
});