import React from 'react';
import { View, StyleSheet, Text } from "react-native";
import QRCode from 'react-native-qrcode-svg';
import withUser from '../hooks/with_user';

function Ticket(props) {
    const { user, route } = props;
    const { params = {} } = route;
    const { ticket, order } = params;
    return (
        <View style={styles.container}>
            <View style={styles.buyer}>
                <Text style={styles.title}>{ticket?.name}</Text>
            </View>
            <View style={styles.qr}>
                <QRCode
                    value={order?.qrCode}
                    size={150}
                />
            </View>
            <View style={styles.statusText}>
                <Text style={styles.title}>{order?.status}</Text>
                <Text style={styles.title2}>Bought By {user?.user.firstName} {user?.user.lastName}</Text>
                <Text style={{ textAlign: 'center', color: 'gray' }}>{new Date(order?.createdAt).toDateString()}</Text>
            </View>
        </View>
    )
}

export default withUser(Ticket);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    qr: {
        alignItems: 'center'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        padding: 25,
    },
    title2: {
        fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'black',
        padding: 15,
    },
    buyer: {
        textAlign: 'center',
        color: "black"
    },
    statusText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'blue'
    }
})