import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity, Button } from "react-native";
import withUser from '../hooks/with_user';
import { getCustomer } from "../api";
import routes from "../routes/routes";

function OrderPage(props) {
    const { user, navigation } = props;
    const [state, setState] = useState({ status: "loading", data: [] })
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (user && user.user) {
                getCustomer(user.user?.id).then(res => {
                    setState({ status: 'loaded', data: res.data["Orders"] || [] })
                });
            }
        });
        return unsubscribe;
    }, [navigation, user]);
    useEffect(() => {
        if (user && user.user) {
            getCustomer(user.user?.id).then(res => {
                setState({ status: 'loaded', data: res.data["Orders"] || [] })
            });
        }
    }, [user]);
    const Empty = () => {
        return (
            <View style={[styles.container, { alignItems: 'center' }]}>
                <Text style={{ color: 'black', fontStyle: 'italic' }}>
                    Empty Record
                </Text>
                <Text style={{ color: 'red', fontWeight: 'bold', padding: 5 }}>Please check server IP & PORT!</Text>
                <View style={styles.btn}>
                    <Button title="Go To Server Config" onPress={() => {
                        navigation.navigate(routes.setting)
                    }} />
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={state.data || []}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Empty />}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate({
                            name: routes.ticket,
                            params: { ticket: item["Ticket"], order: item },
                        });
                    }}>
                        <View style={styles.listItem}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={[styles.listItemText, { fontSize: 15, fontWeight: 'bold' }]}>{item.Ticket?.name}</Text>
                                <Text style={[styles.listItemText, { color: 'gray', fontStyle: 'italic', marginTop: 2 }]}>Date {new Date(item.createdAt).toDateString()}</Text>
                                <Text
                                    style={[styles.listItem, { color: 'black' }]}
                                    numberOfLines={4}
                                    ellipsizeMode={"tail"}
                                >
                                    {item.note}
                                </Text>
                            </View>
                            <Text style={[{ marginLeft: 'auto', color: 'green' }]}>{item.status}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default withUser(OrderPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 5,
        margin: 4,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 'auto',
        elevation: 0.2,
    },
    listItemText: {
        color: 'black'
    },
    btn: {
        padding: 10,
        alignItems: 'center',
    }
})