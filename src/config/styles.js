import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
    list:{
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
    },
    details:{
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
        },
        detailItems: {
            flexDirection: 'row', 
            alignItems: 'center', 
            marginBottom: 20
        },
        itemsTitle:{
            fontSize: 20,
            marginRight: 10, 
            fontWeight: 'bold'
        },
        itemsValue:{
            fontSize: 20
        }
    }
})