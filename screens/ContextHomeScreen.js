
import { StyleSheet, Text, View, Button, Dimensions, FlatList} from 'react-native';
import { CardModel } from '../components/card.js';
import { TextEntry } from '../components/textEntry.js';
import { Footer } from '../components/footer.js';
import { SearchBar } from '../components/searchBar.js';
import { useState, useEffect } from 'react';
import Tecnicos from '../model/tecnicos.js';
import { ActivityIndicator } from 'react-native-paper';

const DadosTecnicos = Tecnicos;

const Item = ({ nome, especialidade }) => {
    <View style={styles.cardView}>
        <CardModel header={nome} info={especialidade} />
    </View>
};

const ContextHomeScreen = ({navigation}) => {

    const [clicked, setClicked] = useState(false);
    const [search, setSearch] = useState('');

    const renderItem = ({ item }) => {
        <Item nome={item.nome} especialidade={item.especialidade} />
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <SearchBar clicked={clicked} setClicked={setClicked} search={search} setSearch={setSearch} data = {DadosTecnicos}/>
            </View>
            <View style={styles.scrollArea}>
                <FlatList
                    ListHeaderComponent={<></>}
                    data={DadosTecnicos}
                    renderItem={renderItem}
                    ListFooterComponent={<></>}
                />
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
}

const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchBar: {
        flex: 1
    },
    scrollArea: {
        flex: 2,
        justifyContent: 'center',
        width: maxWidth
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8c9296',
        width: maxWidth
    },
    cardView: {
        marginTop: 10,
        marginBottom: 10
    },
});

export default ContextHomeScreen;