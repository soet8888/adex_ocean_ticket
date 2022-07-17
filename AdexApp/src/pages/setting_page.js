import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Button
} from "react-native";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import LoadingIndicator from "../components/loading_indicator";
import { getLocalStorage, setLocalStorage } from "../storage";
import storeKeys from '../constants/storeKeys'
import withUser from "../hooks/with_user";
import routes from "../routes/routes";

const schema = Yup.object().shape({
    ip: Yup.string()
        .required('Server IP address is required.'),
    port: Yup.number()
        .required('Server Port number is required.'),
});
const initData = {
    ip: "",
    port: ""
}
function SettingPage(props) {
    const [error, setError] = useState();
    const [formData, setFormData] = useState(initData)
    const [authState, setAuthState] = useState({ status: 'loading' })
    const { navigation, user } = props;
    useEffect(() => {
        getLocalStorage(storeKeys.serverKey).then(res => {
            if (res) {
                const { port, ip } = JSON.parse(res);
                setFormData({ ip, port })
            }
        })
    }, [])
    const onSubmit = async (values) => {
        let { ip, port } = values;
        const host = `${ip}:${port}`
        console.log('host', host)
        await setLocalStorage(storeKeys.serverKey, { ip, port });
        navigation.navigate(routes.home)
    }
    const handleLogout = async () => {
        await setLocalStorage(storeKeys.userKey, null);
        if (props.setUser) props.setUser(null);
    }
    return (
        authState.status !== "loading" ?
            <LoadingIndicator /> :
            < View style={styles.container} >
                <Formik
                    validationSchema={schema}
                    initialValues={formData}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, dirty }) => (
                        <View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*IP:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('ip')}
                                    onBlur={handleBlur('ip')}
                                    placeholder="192.168.77.2"
                                    keyboardType='numeric'
                                    placeholderTextColor="black"
                                    value={values.ip}
                                />
                                {errors.ip && touched.ip ? (
                                    <Text style={styles.errorText}>{errors.ip}</Text>
                                ) : null}
                            </View>

                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Port:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="4000"
                                    keyboardType='numeric'
                                    placeholderTextColor="black"
                                    onChangeText={handleChange('port')}
                                    onBlur={handleBlur('port')}
                                    value={values.port}
                                />
                                {errors.port && touched.port ? (
                                    <Text style={styles.errorText}>{errors.port}</Text>
                                ) : null}
                            </View>
                            {dirty && <View style={styles.loginBtn}>
                                <Button disabled={!dirty} color={'gray'} style={styles.loginBtn} onPress={handleSubmit} title="save" />
                                {error && <Text style={styles.errorText}>{error}</Text>}
                            </View>
                            }
                        </View>
                    )}
                </Formik>
                {(user && user.user) && <View style={styles.loginBtn}>
                    <Button onPress={handleLogout} title="logout" color="red" />
                </View>
                }

            </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        marginRight: 5
    },
    inputView: {
        borderRadius: 5,
        width: "100%",
        minWidth: '70%',
        padding: 5,
    },
    TextInput: {
        backgroundColor: '#e3e1da',
        width: '100%',
        borderRadius: 5,
        padding: 5,
        margin: 5,
        color: 'black',
        minWidth: '70%'
    },
    labelText: {
        color: 'gray'
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
    },
    loginBtn: {
        width: '100%',
        minWidth: '70%',
        padding: 5,
        marginLeft: 6,
        marginTop: 20,
    },
    logoutBtn: {

    }
});
export default withUser(SettingPage)