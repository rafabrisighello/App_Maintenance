import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import { CardModel } from './card';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Item = ({ nome, especialidade }) => (
    <View style={styles.cardView}>
        <CardModel header={nome} info={especialidade} />
    </View>
);

const ItemSeparatorView = () => {
    return (
        <View style = {styles.itemSeparator}/>
    );
};

export const SearchBar = ({clicked, setClicked, search, setSearch, data}) => {

    const [filteredData, setFilteredData] = useState(data);

    const renderItem = ({ item }) => (
        <Item nome={item.nome} especialidade={item.especialidade} />
    );

    const searchFilter = (text) => {

        if (text) {
            const newData = data.filter((item) => {
                const itemData = item.nome ? item.nome.toUpperCase() : ''.toUpperCase();
                const searchData = text.toUpperCase();
                return itemData.indexOf(searchData) > -1;
            });
            setFilteredData(newData);
            setSearch(text);
        }
        else {
            setFilteredData(data);
            setSearch(text);
        }
    };

    return (
        <View style = {styles.container}>
                <View style = {styles.searchBar_unclicked}>
                    <Icon name="search" size={50} color="#000" />
                    <TextInput
                        style={styles.input}
                        placeholder="Busca"
                        value={search}
                        onChangeText={(text) => searchFilter(text)}
                        onFocus={() => { setClicked(true); }}
                    />
                    {
                        clicked && (
                            <View>
                                <TouchableOpacity onPress={() => {
                                    Keyboard.dismiss();
                                    setClicked(false);
                                    setSearch("");
                                    setFilteredData(data);
                                }}>
                                    <Icon name="close" size={50} color="#000" />
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </View>
                <View style = {styles.searchList}>
                    <FlatList
                        ListHeaderComponent={<></>}
                        data={filteredData}
                        renderItem={renderItem}
                        ItemSeparatorComponent = {ItemSeparatorView}
                        ListFooterComponent={<></>}
                    />
                </View>
        </View>
    );
}

const maxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        justifyContent: "center",
        alignItems: "center",
        width: 0.96 * maxWidth
    },
    searchList: {
        flex: 5,
        margin: 10
    },
    searchBar_unclicked: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        width: 0.96 * maxWidth,
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar_clicked: {
        flex: 1,
        margin: 10,
        flexDirection: "row",
        width: 0.96 * maxWidth,
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        fontSize: 20,
        margin:10,
        width: 0.7 * maxWidth,
    },
    itemSeparator: {
        margin: 5
    }
});