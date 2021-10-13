import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Counter = props => {

    //Array destructuring
    const[num,setNumber]=useState(0);

    //const [degiskenAdi,degiskenDegistirmeFonks]=useState(baslangicDegeri)


    // //useState'den dönene bir array var [degisken,fonksyion]
    // const arr=[
    //     {id:0},
    //     ()=>{},
    // ]

    // //Aşağıdaki ikisi şey aynı
    // const [obj,func]=arr;
    // const obj=arr[0];
    // const func=arr[1];

    const onPress_Increase=()=>{
        console.log('Arttıra basıldı')
        console.log('eski deger',num);
        setNumber(num+1);
        console.log('yeni deger',num); //senkron çalışmadığı için yeni değeri göstermiyecek async gibi 
    }
    const onPress_Decrease=()=>{
        console.log('Azalta basıldı')
        
        if(num>-15){
            setNumber(num-1);
        }
    }
    const renderNumPad=()=>{
        let numComponent=[];
        for (let i = 0; i < 10; i++) {
            numComponent.push(
                <Text key={i}>1</Text>
            )
            
        }
        return numComponent;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{num}</Text>
            <View style={styles.buttonsContainer}>

            <View>
                {renderNumPad}
            </View>

                <TouchableOpacity style={styles.touchable} onPress={onPress_Increase}>
                    <Text style={styles.buttonText}>ARTTIR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={onPress_Decrease}>
                    <Text style={styles.buttonText}>AZALT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberText: {
        fontSize: 200,
        color: 'lightgreen',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    touchable: {
        height: 50,
        width: 150,
        backgroundColor: 'orange',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
    },
})

export default Counter;
