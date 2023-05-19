import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";
import { constants } from "../utils/constants";
import Styles from '../config/styles';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { usersList, usersData } = useSelector((state) => state.user)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let payload = {
            currentPage: 1,
            records: 8
        }
        dispatch(getUserRequest(payload));
    }, [])

    useEffect(() => {
        if (usersList && usersList.length) {
            setUsers(usersList);
        }
        else {
            setUsers([]);
        }
    }, [usersList])


    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={Styles.list.listItem} onPress={() => navigation.navigate('Detail', {id: item.id})}>
                <View>
                    <Image source={{ uri: item.avatar }}
                        style={Styles.list.avatar} />
                </View>
                <View>
                    <Text>
                        <Text style={Styles.list.itemName}>{item.first_name}</Text>
                        <Text>{" "}</Text>
                        <Text style={Styles.list.itemName}>{item.last_name}</Text>
                    </Text>
                    <Text >{item.email}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const loadMore = () => {
        if (usersData && Object.keys(usersData).length) {
            if (usersData.page < usersData.total_pages) {
                let payload = {
                    currentPage: usersData.page + 1,
                    records: 8
                }
                dispatch(getUserRequest(payload))
            }
        }
    }

    return (
        <SafeAreaView style={Styles.list.container}>
            <View style={Styles.list.innerContainer}>
                <Text style={Styles.list.title}>{constants.USERSLIST}</Text>
                <FlatList data={users}
                    renderItem={renderItem}
                    onEndReached={loadMore}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default HomeScreen;