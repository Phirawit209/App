import React, { useState, useEffect }from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

// Formik
import { Formik } from "formik";

// Icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

// Keyboard avoiding view
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

// // API
// import { axios } from "axios";

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
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

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);

    return ( 
        <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/skinlogo.png')} /> 
                <PageTitle> ระบบบริการรักษาทางไกล - Telemedicine {'\n'}
                โรงพยาบาลโรคผิวหนังเขตร้อนภาคใต้ จังหวัดตรัง </PageTitle>
                <SubTitle> เข้าสู่ระบบ </SubTitle>

                <Formik
                    initialValues={{username:'', password: ''}}
                    onSubmit={(values) => {
                       console.log(values);
                       navigation.navigate("Welcome");
                    }}
                >

                    {({ handleChange, handleBlur, handleSubmit, values}) =>(
                    <StyledFormArea>
                        <MyTextInput 
                            label="Username"
                            icon="person"
                            placeholder="กรุณาป้อนชื่อผู้ใช้งาน"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            label="Password"
                            icon="lock"
                            placeholder="**********"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        
            <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                    <ButtonText>เข้าสู่ระบบ</ButtonText>
                    </StyledButton>
                    <Line  />
                <StyledButton google={true} onPress={handleSubmit}>
                    <Fontisto name="google" color={primary} size={24} />
                        <ButtonText google={true} color={darkLight}>Sign in with Google</ButtonText>
                </StyledButton>

                <ExtraView>
                    <ExtraText>ท่านยังไม่ได้สมัครสมาชิกใช่หรือไม่?</ExtraText>
                    <TextLink onPress={() => navigation.navigate('Signup')}>
                        <TextLinkContent>สมัครสมาชิก</TextLinkContent>
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

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (<View>
            <LeftIcon>
                <Octicons name={icon} size={24} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;