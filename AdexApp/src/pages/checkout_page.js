import React, { useState } from 'react'
import withUser from '../hooks/with_user';
import { View, Text, StyleSheet, Button, TextInput, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { createCustomer, createOrder } from "../api";
import routes from '../routes/routes';
import { uuidv4 } from "../util";
import ticket from './ticket';
const formSchema = yup.object().shape({
    prefix: yup.string().nullable().required("Prefix is required"),
    firstName: yup.string().nullable().required("FirstName is required"),
    lastName: yup.string().nullable().required("SureName is required"),
    email: yup.string().nullable().required("Email is required"),
    //  gender: yup.string().nullable().required("Gender is required"),
    age: yup.number().nullable().required("Age is required"),
    nationality: yup.string().nullable().required("Nationality is required"),
    company: yup.string().nullable().required("Company/Organisation is required"),
    jobTitle: yup.string().nullable().required("Job Title is required"),
});
const initFormData = {
    prefix: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    age: "",
    nationality: "",
    company: "",
    jobTitle: "",
    phone: ""
}
const prefixList = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Mx.', 'Dr.', 'Prof.', 'Rev.']

function CheckoutPage(props) {
    const { navigation, route, user, setUser } = props
    const { params } = route
    const [formData, setFormData] = useState(user?.user ? user.user : initFormData);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false)
    const onSubmit = async (values) => {
        setSubmitting(true)
        const res = await createCustomer(values)
        if (res.success) {
            setUser(res.data);
            const qrCode = uuidv4();
            const status = "pending";
            const TicketId = params?.ticket?.id;
            const CustomerId = res.data.id;
            const note = "";
            const ores = await createOrder({
                qrCode, status, TicketId, CustomerId, note
            })
            if (ores.success) {
                navigation.navigate({
                    name: routes.ticket,
                    params: { ticket: params.ticket, order: ores.data },
                });
            }
        }
        setSubmitting(false)
        // console.log('res', res)
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{params?.ticket?.name} </Text>
            <View>
                <Formik
                    validationSchema={formSchema}
                    initialValues={formData}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, dirty, isValid }) => (
                        <View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Prefix:</Text>
                                <Picker
                                    style={styles.TextInput}
                                    selectedValue={values.prefix}
                                    onValueChange={(itemValue, itemIndex) => handleChange('prefix')(itemValue)}
                                >
                                    {prefixList.map((val, i) => (<Picker.Item key={`prefix_${i}`} label={val} value={val} />))}
                                </Picker>
                                {errors.prefix && touched.prefix ? (
                                    <Text style={styles.errorText}>{errors.prefix}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*FirstName:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    placeholder="first name"
                                    placeholderTextColor="black"
                                    value={values.firstName}
                                />
                                {errors.firstName && touched.firstName ? (
                                    <Text style={styles.errorText}>{errors.firstName}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Surename:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    placeholder="sure name "
                                    placeholderTextColor="black"
                                    value={values.lastName}
                                />
                                {errors.lastName && touched.lastName ? (
                                    <Text style={styles.errorText}>{errors.lastName}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Email:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    placeholder="email"
                                    placeholderTextColor="black"
                                    value={values.email}
                                />
                                {errors.email && touched.email ? (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                ) : null}
                            </View>

                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>Phone:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="phone number"
                                    keyboardType='numeric'
                                    placeholderTextColor="black"
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    value={values.phone}
                                />
                                {errors.phone && touched.phone ? (
                                    <Text style={styles.errorText}>{errors.phone}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Gender:</Text>
                                <Picker
                                    style={styles.TextInput}
                                    selectedValue={values.gender}
                                    onValueChange={(itemValue, itemIndex) => handleChange('gender')(itemValue)}
                                >
                                    <Picker.Item label={"Male"} value={'male'} />
                                    <Picker.Item label={"Female"} value={'female'} />
                                    <Picker.Item label={"Other"} value={'other'} />
                                </Picker>
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Age:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="age"
                                    keyboardType='numeric'
                                    placeholderTextColor="black"
                                    onChangeText={handleChange('age')}
                                    onBlur={handleBlur('age')}
                                    value={values.age}
                                />
                                {errors.age && touched.age ? (
                                    <Text style={styles.errorText}>{errors.age}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Nationality:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('nationality')}
                                    onBlur={handleBlur('nationality')}
                                    placeholder="nationality"
                                    placeholderTextColor="black"
                                    value={values.nationality}
                                />
                                {errors.nationality && touched.nationality ? (
                                    <Text style={styles.errorText}>{errors.nationality}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*Company:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('company')}
                                    onBlur={handleBlur('company')}
                                    placeholder="company"
                                    placeholderTextColor="black"
                                    value={values.company}
                                />
                                {errors.company && touched.company ? (
                                    <Text style={styles.errorText}>{errors.company}</Text>
                                ) : null}
                            </View>
                            <View style={styles.inputView}>
                                <Text style={styles.labelText}>*JobTitle:</Text>
                                <TextInput
                                    style={styles.TextInput}
                                    onChangeText={handleChange('jobTitle')}
                                    onBlur={handleBlur('jobTitle')}
                                    placeholder="jobTitle"
                                    placeholderTextColor="black"
                                    value={values.jobTitle}
                                />
                                {errors.jobTitle && touched.jobTitle ? (
                                    <Text style={styles.errorText}>{errors.jobTitle}</Text>
                                ) : null}
                            </View>
                            <View style={styles.btn}>
                                <Button disabled={!isValid || submitting} style={styles.loginBtn} onPress={handleSubmit} title={submitting ? "submitting..." : "Place Order"} />
                                {error && <Text style={styles.errorText}>{error}</Text>}
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    )
}
export default withUser(CheckoutPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        backgroundColor: "#fff",
    },
    inputView: {
        borderRadius: 5,
        width: "100%",
        minWidth: '70%',
        color: 'black',
        padding: 5,
    },
    inputView2: {
        flex: 1,
        flexDirection: 'row'
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
        textAlign: 'left',
    },
    title: {
        padding: 2,
        textAlign: 'center',
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'
    },
    text: {
        textAlign: 'center',
        color: 'black'
    },
    btn: {
        marginBottom: 15,
    }
})