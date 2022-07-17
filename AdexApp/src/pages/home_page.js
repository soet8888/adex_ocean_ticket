import React, { useState, useEffect, useContext } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import routes from '../routes/routes';
import { getTickets } from "../api";
import withUser from '../hooks/with_user';
import { getLocalStorage } from "../storage";
import storeKeys from '../constants/storeKeys';
function HomePage(props) {
    const { navigation } = props;
    const [state, setState] = useState({ status: 'loading', data: [] });
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getTickets().then(res => {
                setState({ status: 'loaded', data: res.data || [] })
            });
            getLocalStorage(storeKeys.userKey).then(res => {
                if (props.setUser) props.setUser(res ? JSON.parse(res) : null)
            });
        });
        return unsubscribe;
    }, [navigation]);
    useEffect(() => {
        getTickets().then(res => {
            setState({ status: 'loaded', data: res.data || [] })
        })
    }, []);
    useEffect(() => {
        getLocalStorage(storeKeys.userKey).then(res => {
            if (props.setUser) props.setUser(res ? JSON.parse(res) : null)
        });
    }, [])

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
                data={state.data}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Empty />}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate({
                            name: routes.ticketDetail,
                            params: { ticket: item },
                        });
                    }}>
                        <View style={styles.listItem}>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={[styles.listItemText, { fontSize: 15, fontWeight: 'bold' }]}>{item.name}</Text>
                                <Text style={[styles.listItemText, { color: 'gray', fontStyle: 'italic' }]}>Sales end on {new Date(item.saleDate).toDateString()}</Text>
                                <Text
                                    style={[styles.listItem, { color: 'black' }]}
                                    numberOfLines={4}
                                    ellipsizeMode={"tail"}
                                    onTextLayout={({ nativeEvent: { lines } }) => {
                                        const width = lines[lines.length - 1].width
                                        const height = lines[lines.length - 1].y
                                        // setMoreTop(height)
                                        // setMoreLeft(width)
                                    }}
                                >
                                    {item.desc}
                                </Text>
                            </View>
                            <Text style={[{ marginLeft: 'auto', color: 'green' }]}>SG${item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
export default withUser(HomePage);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
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
})
