import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { useSelector } from "react-redux";

const DetailScreen = ({route, navigation}) => {

    const { usersList } = useSelector((state) => state.user)
    const { id } = route.params;

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(()=>{
        usersList.map((item) => {
            if (item.id === id){
                setFirstName(item.first_name)
                setLastName(item.last_name)
                setEmailId(item.email)
                setAvatar(item.avatar)
            }
        } )
    }, [])

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <View style={styles.header}> 
                    <View style={{marginTop: 60}}>
                        <TouchableOpacity style={styles.backIcon} onPress={()=> navigation.goBack()}>
                            <Image source={require('../../assets/back.png')} style={{width: 25, height: 20}}/>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>User Details</Text>
                    </View>
                </View>
                <Image source={{uri: avatar}} style={styles.avatar}/>
                <View style={styles.details}>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                        <Text style={{fontSize: 20, marginRight: 10, fontWeight: 'bold'}}>First Name: </Text>
                        <Text style={{fontSize: 20, }}>{firstName}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                        <Text style={{fontSize: 20, marginRight: 10, fontWeight: 'bold'}}>Last Name: </Text>
                        <Text style={{fontSize: 20, }}>{lastName}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{fontSize: 20, marginRight: 10, fontWeight: 'bold'}}>Email: </Text>
                        <Text style={{fontSize: 20, }}>{emailId}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9d2ff'
    },
    header: {
        height: '30%', 
        width: '100%', 
        backgroundColor: '#0a0c3b'
    },
    headerTitle:{
        color: '#fff', 
        fontSize: 25, 
        alignSelf: 'center'
    },
    backIcon:{
        position: 'absolute', 
        left: 10
    },
    avatar: {
        width: 180, 
        height: 180, 
        alignSelf:'center', 
        borderRadius: '500',
        top: -95
    },
    details:{
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
        marginTop: -40, 
        marginHorizontal: 20, 
        backgroundColor: 'white',
        padding: 20,
        width: '85%',
        borderRadius: 20,
        alignSelf: "center"
    }

});

export default DetailScreen;