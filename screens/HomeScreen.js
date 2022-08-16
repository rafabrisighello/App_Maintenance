import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button , Dimensions , Image} from 'react-native';
import logo from '../assets/kindpng_2741579.png';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo} style={styles.image} resizeMode='stretch' />
            </View>
            <View style={styles.footer}>
                <Text> Sign in with account </Text>
                <Button
                    title="Login"
                    onPress={() => navigation.navigate('Login')}
                    color='#3279a8'
                />
            </View>
        </View>
    );
}

const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c9296',
        width: maxWidth
    },
    image: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        width: maxWidth
    }
});

export default HomeScreen;