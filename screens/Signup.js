import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity } from "react-native";

// Formik
import { Formik } from "formik";

// Icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

// Keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

import {
    StyledContainer,
    InnerContainer,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    Colors,
    StyledTextInput,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent
} from './../components/styles';

// Colors
const { brand, darkLight, primary } = Colors;

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2023, 0, 1));
    
    // Actual Date of Birth
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>
                <SubTitle> สมัครสมาชิก </SubTitle>
                
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
                )}

                <Formik
                    initialValues={{username:'',
                                    email: '',
                                    password: '',
                                    confirmpassword: '',
                                    firstname: '',
                                    lastname: '',
                                    citizen: '',
                                    phone: '',
                                    dateofBirth: '',
                                }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, icon }) =>(
                    <StyledFormArea>
                        <MyTextInput 
                            label="Username"
                            icon ="person"
                            placeholder="กรุณาป้อนชื่อผู้ใช้งาน"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            keyboardType="email-address"
                        />
                        <MyTextInput 
                            label="Email"
                            icon="mail"
                            placeholder="กรุณาป้อนอีเมล"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                         <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="**********"
                            placeholderTextColor={darkLight}
                            onChangPasswordeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput 
                            label="Confirm Password"
                            icon="lock"
                            placeholder="**********"
                            placeholderTextColor={darkLight}
                            onChangPasswordeText={handleChange('confirmpassword')}
                            onBlur={handleBlur('confirmpassword')}
                            value={values.confirmpassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput 
                            label="Firstname"
                            icon="person"
                            placeholder="กรุณาป้อนชื่อจริง"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('firstname')}
                            onBlur={handleBlur('firstname')}
                            value={values.firstname}
                            keyboardType="email-address"
                        />
                        <MyTextInput 
                            label="Lastname"
                            icon="person"
                            placeholder="กรุณาป้อนนามสกุล"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('lastname')}
                            onBlur={handleBlur('lastname')}
                            value={values.lastname}
                            keyboardType="email-address"
                        />
                         <MyTextInput 
                            label="Citizen ID"
                            icon="credit-card"
                            placeholder="กรุณาป้อนหมายเลขบัตรประชาชน"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('citizen')}
                            onBlur={handleBlur('citizen')}
                            value={values.citizen}
                            keyboardType="email-address"
                        />
                         <MyTextInput 
                            label="Phone Number"
                            icon="megaphone"
                            placeholder="กรุณาป้อนหมายเลขโทรศัพท์"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            keyboardType="email-address"
                        />
                        <MyTextInput 
                            label="Date of Birth"
                            icon="calendar"
                            placeholder="YYYY - MM - DD"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateofBirth')}
                            onBlur={handleBlur('dateofBirth')}
                            value={dob ? dob.toDateString(): ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        />

            <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>สมัครสมาชิก</ButtonText>
                        </StyledButton>
                    <Line  />
                
                <ExtraView>
                    <ExtraText>ท่านสมัครสมาชิกแล้วใช่หรือไม่?</ExtraText>
                    <TextLink onPress= {() => navigation.navigate('Login')}>
                        <TextLinkContent>เข้าสู่ระบบ</TextLinkContent>
                    </TextLink>
                </ExtraView>
                    </StyledFormArea>
                    )}
                </Formik>
                    </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (<View>
            <LeftIcon>
            <Octicons name={icon} size={24} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && <TouchableOpacity onPress={showDatePicker} >
                <StyledTextInput {...props} />

                </TouchableOpacity>}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20}  color={darkLight} s/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;