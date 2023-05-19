import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";

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
            <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('Detail', {id: item.id})}>
                <View>
                    <Image source={{ uri: item.avatar }}
                        style={styles.avatar} />
                </View>
                <View>
                    <Text>
                        <Text style={styles.itemName}>{item.first_name}</Text>
                        <Text>{" "}</Text>
                        <Text style={styles.itemName}>{item.last_name}</Text>
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
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Users List</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9d2ff'
    },
    innerContainer: {
        width: '90%',
        alignSelf: 'center',
        marginBottom: 40
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginVertical: 25,
        alignSelf: 'center'
    },
    listItem: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        elevation: 5,
        width: '99%',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingLeft: 10,
        paddingVertical: 18,
        marginBottom: 30,
        borderColor: '#d8d8d8',
        flexDirection: "row"
    },
    itemName: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        marginRight: 15
    }
});

export default HomeScreen;