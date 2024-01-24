import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledButton,
    ButtonText,
    StyledTextInput,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
} from './../components/styles';

const Welcome = () => {

    return (
        <>
        <StatusBar style="light" />
        <StyledContainer>
          <StatusBar style="dark" />
            <InnerContainer>

                <WelcomeImage resizeMode="cover" source={require('./../assets/images/skinlogo.png')} />

            <WelcomeContainer> 

            <PageTitle Welcome={true}> ยินดีต้อนรับเข้าสู่บริการรักษาทางไกล รพ.โรคผิวหนังเขตร้อนภาคใต้ จ.ตรัง </PageTitle>
                <Avatar resizeMode="cover" source={require('./../assets/images/user.png')} />  
                <SubTitle Welcome={true}> Fullname: Alpha Beta Gamma </SubTitle>
                <SubTitle Welcome={true}> Role: Citizen Gold </SubTitle>
                <SubTitle Welcome={true}> HN: 000001 </SubTitle>
                <SubTitle Welcome={true}> Active: Yes </SubTitle>
                    <StyledFormArea>
                       
                <Line />
                <StyledButton onPress={()=> {}}>
                    <ButtonText>ออกจากระบบ</ButtonText>
                        </StyledButton>
                    
                    </StyledFormArea>
                </WelcomeContainer>
                    </InnerContainer>
        </StyledContainer>
        </>
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
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={24} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Welcome;