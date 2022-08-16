import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Footer } from '../components/footer.js';
import Tecnicos from '../model/tecnicos.js';
import { SearchBar } from '../components/searchBar.js';

const DadosTecnicos = Tecnicos;

const TestScreen = ({ navigation }) => {

    const [clicked, setClicked] = useState(false);
    const [search, setSearch] = useState('');

    return (
        <View style = {styles.container}>
            <View style={styles.searchBar}>
                <SearchBar clicked={clicked} setClicked={setClicked} search={search} setSearch={setSearch} data={DadosTecnicos} />
            </View>
            { !clicked ? (
                <View style={styles.footer}>
                    <Footer />
                </View>
            ) :
            <View>
            </View>
            }
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
    searchBar: {
        flex: 4
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c9296',
        width: maxWidth
    },
});

export default TestScreen;