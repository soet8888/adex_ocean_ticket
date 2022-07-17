import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";
import routes from '../routes/routes';

export default function TicketDetail({ navigation, route }) {
    const { params } = route;
    const handleCheckout = () => {
        navigation.navigate({
            name: routes.checkout,
            params
        });
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {params?.ticket?.name} </Text>
            <Text style={styles.price}> SG$ {params?.ticket?.price} </Text>
            <Text style={styles.saleText}>Sale end on {(new Date(params?.ticket?.saleDate)).toDateString()} </Text>
            <Text style={styles.desc}> {params?.ticket?.desc} </Text>
            <View style={styles.btn} >
                <Button onPress={handleCheckout} title={"checkout"} />
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: "#fff",
        borderRadius: 3
    },
    title: {
        padding: 3,
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    saleText: {
        marginTop: 3,
        color: 'gray',
        fontSize: 12,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    price: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 0,
        color: 'black'
    },
    desc: {
        padding: 4,
        marginTop: 4,
        textAlign: 'left',
        color: 'black'
    },
    btn: {
        padding: 10,
        alignItems: 'center',
    }
})
