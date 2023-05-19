import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { useSelector } from "react-redux";
import { constants } from "../utils/constants";
import Styles from '../config/styles'

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
        <View style={Styles.details.container}>
            <View style={{flex: 1}}>
                <View style={Styles.details.header}> 
                    <View style={{marginTop: 60}}>
                        <TouchableOpacity style={Styles.details.backIcon} onPress={()=> navigation.goBack()}>
                            <Image source={require('../../assets/back.png')} style={{width: 25, height: 20}}/>
                        </TouchableOpacity>
                        <Text style={Styles.details.headerTitle}>{constants.USERDETAILS}</Text>
                    </View>
                </View>
                <Image source={{uri: avatar}} style={Styles.details.avatar}/>
                <View style={Styles.details.details}>
                    <View style={Styles.details.detailItems}>
                        <Text style={Styles.details.itemsTitle}>{constants.FIRSTNAME}</Text>
                        <Text style={Styles.details.itemsValue}>{firstName}</Text>
                    </View>
                    <View style={Styles.details.detailItems}>
                        <Text style={Styles.details.itemsTitle}>{constants.LASTNAME}</Text>
                        <Text style={Styles.details.itemsValue}>{lastName}</Text>
                    </View>
                    <View style={Styles.details.detailItems}>
                        <Text style={Styles.details.itemsTitle}>{constants.EMAIL}</Text>
                        <Text style={Styles.details.itemsValue}>{emailId}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({});

export default DetailScreen;