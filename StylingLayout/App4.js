import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

// Dimension API kullanımı
const dimensions = Dimensions.get('screen');
const width = dimensions.width;
const height = dimensions.height;

//Flex, flexShrink 
const App = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>ANASAYFA</Text>
            </View>
            <View style={styles.campaignsContainer}>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
            </View>
            <View style={styles.products} />
            <View style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex:1,
    },
    header: {
        backgroundColor: 'pink',
        //flex:10,
        height:width * 0.2,
    },
    campaignsContainer: {
        backgroundColor: 'white',
        //flex:30,
        height:width * 0.2,
        //flexGrow:0.5,
    },
    products: {
        backgroundColor: 'orange',
        //flex:45,

        //flexGrow:0.5,

        //flexShrink example
        height:width * 2,
        flexShrink:1,
    },
    footer: {
        backgroundColor: 'lightgreen',
        //flex:15,
        height:width * 0.2,
    },
});

export default App;