import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomePage from '../pages/home_page';
import SettingPage from '../pages/setting_page';
import TicketDetail from '../pages/ticket_detail_page';
import CheckoutPage from '../pages/checkout_page';
import OrderPage from '../pages/order_page';
import TicketPage from '../pages/ticket';

import routes from './routes';
import withUser from '../hooks/with_user';
const Stack = createNativeStackNavigator();

function Navs(props) {
    const navigationRef = useNavigationContainerRef();
    const { user } = props
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={routes.home}
            >
                <Stack.Screen
                    name={routes.home}
                    options={{
                        headerShown: true,
                        title: "Adex Ocean Vision 2022",
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigationRef.navigate(routes.setting)}>
                                <Icon
                                    name="settings"
                                    color="black"
                                    size={25}
                                    style={{ alignSelf: 'center' }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    component={HomePage}
                />
                <Stack.Screen
                    name={routes.ticketDetail}
                    options={{
                        headerShown: true,
                    }}
                    component={TicketDetail}
                />
                <Stack.Screen
                    name={routes.ticket}
                    options={{
                        headerShown: true,
                    }}
                    component={TicketPage}
                />
                <Stack.Screen
                    name={routes.checkout}
                    options={{
                        headerShown: true,
                    }}
                    component={CheckoutPage}
                />
                <Stack.Screen
                    name={routes.orders}
                    options={{
                        headerShown: true,
                    }}
                    component={OrderPage}
                />
                <Stack.Screen
                    name={routes.setting}
                    options={{
                        headerShown: true,
                        title: "Settings",
                        headerRight: () => ((user && user.user) &&
                            <TouchableOpacity onPress={() => navigationRef.navigate({ name: routes.orders })}>
                                <Icon
                                    name="account-circle"
                                    color="black"
                                    size={25}
                                    style={{ alignSelf: 'center' }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                    component={SettingPage}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default withUser(Navs)