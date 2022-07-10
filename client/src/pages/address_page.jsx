import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import { actionCreators } from "../store/actions/user_actions";
import paths from '../routes/paths';
import { RightIcon, ArrowBackIcon } from "../assets/icons/svg_icons";
import LoadingIndicator from '../components/loading_indicator';
import { createCustomer } from "../api";
const formSchema = yup.object().shape({
    prefix: yup.string().nullable().required("Prefix is required"),
    firstName: yup.string().nullable().required("FirstName is required"),
    sureName: yup.string().nullable().required("SureName is required"),
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
    sureName: "",
    email: "",
    gender: "male",
    age: "",
    nationality: "",
    company: "",
    jobTitle: "",
    phone: ""
}
const prefixList = ['Mr.', 'Mrs.', 'Ms.', 'Miss', 'Mx.', 'Dr.', 'Prof.', 'Rev.']
const AddressPage = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const ticket = location.state;
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState(initFormData);
    const { user } = props
    useEffect(() => {
        if (!ticket) {
            navigate(paths.home)
        }
    }, [ticket]);
    useEffect(() => {
        if (user) {
            let _data = { ...user };
            if (_data.Orders) delete _data["Orders"];
            setFormData({ ..._data, sureName: _data?.lastName || "" })
        }
    }, [user])
    const handleBack = () => {
        navigate(paths.home)
    }
    const onSubmit = async (data) => {
        setSubmitting(true)
        const res = await createCustomer({ ...data, lastName: data?.sureName || "" })
        if (res.success && props.setUser) props.setUser(res.data);
        setTimeout(() => {
            setSubmitting(false);
            navigate(paths.checkout, { state: ticket })
        }, 2000)
    }
    return (
        <React.Fragment>
            <div className='w-full flex flex-row h-[calc(100%-92px)] items-center overflow-y-scroll m-auto place-content-center'>
                <Formik initialValues={formData} enableReinitialize={true} onSubmit={onSubmit} validationSchema={formSchema}>
                    {({ dirty, values, errors, touched, isValid, handleChange, handleSubmit, handleReset, setFieldValue }) => {
                        return (
                            <Form autoComplete="off">
                                <div className="px-0 mt-4 mx-0">
                                    <div onClick={handleBack} className="btn mt-40 "><ArrowBackIcon /></div>
                                    <h5 className="mb-2 mt-1 text-2xl font-bold tracking-tight text-white">{ticket?.name}</h5>
                                    <div className="px-0 mt-2 mx-0">
                                        <select className="select select-primary w-full" name="prefix" value={values.prefix} onChange={handleChange}>
                                            <option value="" disabled selected>Choose One Prefix</option>
                                            {prefixList.map((pf, i) => (<option value={pf}>{pf}</option>))}
                                        </select>
                                        {errors?.prefix && <span className="text-red-500 self-start ">{errors?.prefix}</span>}
                                    </div>
                                    <div className="px-0 mt-2 mx-0 flex flex-row">
                                        <div className="flex flex-col">
                                            <Field
                                                component="input"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                autoComplete="disabled"
                                                className="input input-primary w-full"
                                            />
                                            {errors?.firstName && <span className="text-red-500 self-start ">{errors?.firstName}</span>}
                                        </div>
                                        <div className="flex flex-col">
                                            <Field
                                                component="input"
                                                name="sureName"
                                                placeholder="Sure Name"
                                                value={values.sureName}
                                                onChange={handleChange}
                                                autoComplete="disabled"
                                                className="input input-primary ml-2 w-full"
                                            />
                                            {errors?.sureName && <span className="text-red-500 self-start ">{errors?.sureName}</span>}
                                        </div>
                                    </div>
                                    <div className="px-0 mt-2 mx-0">
                                        <Field
                                            component="input"
                                            name="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={handleChange}
                                            autoComplete="disabled"
                                            className="input input-primary  w-full"
                                        />
                                        {errors?.email && <span className="text-red-500 self-start ">{errors?.email}</span>}
                                    </div>
                                    <div className="px-0 mt-2 mx-0">
                                        <Field
                                            component="input"
                                            name="phone"
                                            placeholder="Phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            autoComplete="disabled"
                                            className="input input-primary  w-full"
                                        />
                                        {errors?.phone && <span className="text-red-500 self-start">{errors?.phone}</span>}
                                    </div>
                                    <div role="group" aria-labelledby="gender-group" className="px-0 mt-2 mx-0 flex flex-row">
                                        <label className="label">Gender</label>
                                        <label className="cursor-pointer label justify-start">
                                            <Field
                                                id={'male'}
                                                type="radio"
                                                name="gender"
                                                className="radio radio-primary min-w-[24px]"
                                                value={'male'}
                                                onChange={handleChange}
                                            />
                                            <span className="label-text pl-4">Male</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start">
                                            <Field
                                                id={'female'}
                                                type="radio"
                                                name="gender"
                                                className="radio radio-primary min-w-[24px]"
                                                value={'female'}
                                                onChange={handleChange}
                                            />
                                            <span className="label-text pl-4">Female</span>
                                        </label>
                                        <label className="cursor-pointer label justify-start">
                                            <Field
                                                id={'other'}
                                                type="radio"
                                                name="gender"
                                                className="radio radio-primary min-w-[24px]"
                                                value={'other'}
                                                onChange={handleChange}
                                            />
                                            <span className="label-text pl-4">Other</span>
                                        </label>
                                    </div>
                                    <div className="px-0 mt-2 mx-0">
                                        <Field
                                            component="input"
                                            name="age"
                                            type="number"
                                            placeholder="Age"
                                            value={values.age}
                                            onChange={handleChange}
                                            autoComplete="disabled"
                                            className="input input-primary  w-full"
                                        />
                                        {errors?.age && <span className="text-red-500 self-start ">{errors?.age}</span>}
                                    </div>
                                    <div className="px-0 mt-2 mx-0">
                                        <Field
                                            component="input"
                                            name="nationality"
                                            type="text"
                                            placeholder="Nationality"
                                            value={values.nationality}
                                            onChange={handleChange}
                                            autoComplete="disabled"
                                            className="input input-primary  w-full"
                                        />
                                        {errors?.nationality && <span className="text-red-500 self-start ">{errors?.nationality}</span>}
                                    </div>
                                    <div className="px-0 mt-2 mx-0">
                                        <Field
                                            component="input"
                                            name="company"
                                            placeholder="Company/Organisation"
                                            value={values.company}
                                            onChange={handleChange}
                                            autoComplete="disabled"
                                            className="input input-primary  w-full"
                                        />
                                        {errors?.company && <span className="text-red-500 self-start ">{errors?.company}</span>}
                                    </div>
                                    <div className="px-0 mt-2 mx-0">
                                        <Field
                                            component="input"
                                            name="jobTitle"
                                            placeholder="Job Title"
                                            value={values.jobTitle}
                                            onChange={handleChange}
                                            autoComplete="disabled"
                                            className="input input-primary  w-full"
                                        />
                                        {errors?.jobTitle && <span className="text-red-500 self-start ">{errors?.jobTitle}</span>}
                                    </div>
                                    <div className="flex flex-row p-3 w-full justify-around">
                                        <button type="submit" disabled={!dirty || submitting} className="ml-auto py-3 h-12 w-24 btn btn-primary">
                                            Next
                                            <RightIcon />
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
            <LoadingIndicator show={submitting} />
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    user: state.App.User,
});
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(actionCreators.setUser(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressPage)