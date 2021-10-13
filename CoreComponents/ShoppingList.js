import React from 'react';
import { Text,CheckBox, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const ShoppingList = props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}
                    placeholder="Yazmaya başlayın..."/>
                </View>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.btnText}>EKLE</Text>
                </TouchableOpacity>

                <Text style={styles.textContainer}>Alınacaklar</Text>

                <View style={styles.boxContainer}>
                    <View style={styles.boxItem}>
                        {/* kutucuk */}
                    </View>                          
                            <Text style={styles.textItem} >Ekmek</Text>                      
                            <TouchableOpacity>
                                {/* button */}
                                <Text style={styles.btnDelete}>Sil</Text>
                            </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItem}>
                        {/* kutucuk */}
                    </View>                          
                            <Text style={styles.textItem} >Süt</Text>                      
                            <TouchableOpacity>
                                {/* button */}
                                <Text style={styles.btnDelete}>Sil</Text>
                            </TouchableOpacity>
                </View>
                <View style={styles.boxContainer}>
                    <View style={styles.boxItem}>
                        {/* kutucuk */}
                    </View>                          
                            <Text style={styles.textItem} >Elma</Text>                      
                            <TouchableOpacity>
                                {/* button */}
                                <Text style={styles.btnDelete}>Sil</Text>
                            </TouchableOpacity>
                </View>
                    
               </View>
               
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {

    },
    container: {
        padding:2,
        margin:5,
        
    },
    headerContainer: {

    },
    headerText: {
        textAlign:'center',
        color:'orange',
        marginBottom:20,
        borderColor:'rgba(0,0,0,0.1)',

        borderWidth:1,
        padding:30,
        fontSize: 20,
        fontWeight: "bold"
    },
    textInput:{       
        borderRadius:5,
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:1,
        width:400,
        height:50,
        padding:10,
        borderRadius:10,
        margin:5,
    },
    button:{
        backgroundColor:'orange',
        textAlign:'center',
        alignItems:'center',
        margin:5,        
        padding:10,
        borderRadius:10,
    },
    btnText:{
        fontSize: 15,
        fontWeight: "bold",
        color:'white',
    },
    textContainer:{
        color:'orange',
        margin:10,
        fontSize: 15,
        fontWeight: "bold",
    },
    boxContainer:{
        flexDirection:'row',
        margin:2,
    },
    boxItem:{
        borderRadius:5,
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:1,
        //marginRight:5,
        margin:5,
        height:20,
        width:20,
        //flexGrow:0.1,
    },
    textItem:{
        margin:5,
        flexGrow:1,
    },
    btnDelete:{
        backgroundColor:'red',
        width:45,
        textDecorationColor:'white',
        color:'white',       
        borderWidth:2,
        borderRadius:3,
        borderColor:'red',
        textAlign:'center',
        //flexGrow:0.1,
    }
});

export default ShoppingList;
