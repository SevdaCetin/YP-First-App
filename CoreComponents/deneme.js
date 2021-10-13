import React from 'react';
import { Text, StyleSheet, View, TextInput,TouchableOpacity } from 'react-native';

const ShoppingList = props => {
    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput}
            placeholder="yazmaya başlayın"
            placeholderTextColor="rgba(0,0,0,0.3)"   />
            <TouchableOpacity style={styles.button}>
                <Text>Buraya Dokun</Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textInput:{
        width:200,
        height:50,
        padding:10,
        backgroundColor:'pink',
        borderRadius:10,
        margin:5,
    },
    button:{
        backgroundColor:'rgb(200,200,200)',
        padding:10,
        borderRadius:10,
    }
});

export default ShoppingList;
