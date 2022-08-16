import { StyleSheet, Text, View, Button, FlatList, Dimensions, ScrollView} from 'react-native';
import { Footer } from '../components/footer.js';
import { TextInfo } from '../components/textInfo.js';

const GerTecnicosScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style = {styles.scrollArea}>
                <TextInfo header="test" content="text" />
                <TextInfo header="test" content="text" />
                <TextInfo header="test" content="text" />
                <TextInfo header="test" content="text" />
            </View>
            <Footer style={styles.footer} />
        </View>
    );
}

const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollArea: {
        flex: 4,
    },
    footer: {
        flex: 1.5
    },
});

export default GerTecnicosScreen;