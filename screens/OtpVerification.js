import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper'
import CodeInputFiled from '../components/CodeInputField';

import  {   StyledContainer,
            TopHalf,
            IconBg,
            BottomHalf,
            PageTitle, 
            InfoText,
            EmphasizeText,
            StyledButton,
            ButtonText,
            Colors,        
        } 
from '../components/styles'; 

const { brand, green, primary, lightGreen, gray } = Colors;

// Icons
import { Octicons, Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

// // APi client
// import { axios } from 'axios';

// // API route
// import { baseAPIUrl } from '../component/shared';

// // Async storage
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // Credentials context
// import { CredentialsContext } from './../components/CredentialsContext';

// resend timer
import ResendTimer from '../components/ResendTimer';

// verification modal
import VerificationModal from './VerificationModal';

const Verification = () => {
    const [code, setCode] = useState('');
    const [pinReady, setpinReady] = useState(false);

    // verifying button
    const [verifying, setVerifying] = useState(false);


    const MAX_CODE_LENGTH = 4;

    // modal
    const [modalVisible, setModalVisible] = useState(false);
    const [verificationSuccessful, setVerificationSuccessful] = useState(false);
    const [requestMessage, setRequestMessage]= useState('');

    // resend timer
    const [timeLeft, setTimeLeft] = useState(null);
    const [targetTime, setTargetTime] = useState(null);
    const [activeResend, setActiveResend] = useState(false);

    const [resendingEmail, setResendingEmail] = useState(false);
    const [resendStatus, setResendStatus] = useState('Resend');

    let resendTimerInterval;

    const triggerTimer = (targetTimeInSecond = 30) => {
        setTargetTime(targetTimeInSecond);
        setActiveResend(false);
        const finalTIme = +new Date() + targetTimeInSecond * 1000;
        resendTimerInterval = setInterval(() => calculateTimeLeft(finalTIme),1000);
    };

    const calculateTimeLeft = (finalTIme) => {
        const difference = finalTIme - +new Date();
        if (difference >= 0) {
            setTimeLeft(Math.round(difference / 1000));
        } else {
            clearInterval(resendTimerInterval);
            setActiveResend(true);
            setTimeLeft(null);
        }
    };

    useEffect(() => {
        triggerTimer();

        return () => {
            clearInterval(resendTimerInterval);
        };
    }, []);

    const resendEmail = async () => {

    };

    const submitOTPVerification = async () => {

    };

    // Persisting login after verification
    const persistLoginAfterOTPVerification = async () => {

    };

    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer
                style={{
                    alignItems: 'center',
                }}
            >
                <TopHalf>
                    <IconBg>
                        <StatusBar style="dark" />
                        <Octicons name="lock" size={110} color={brand} />
                    </IconBg>
                    </TopHalf>
                    <BottomHalf>
                        <PageTitle style={{ fontSize: 25 }}>ยินยันบัญชีผู้ใช้งาน</PageTitle>

                        <InfoText>
                            กรุณาป้อนรหัส 4 หลักทีเราได้ส่งให้ไปยัง 
                        <EmphasizeText>testmail@gmail.com</EmphasizeText>
                        </InfoText>

                        <CodeInputFiled
                            setpinReady={setpinReady}
                            code={code}
                            setCode={setCode}
                            maxLength={MAX_CODE_LENGTH}
                        />

                        {!verifying && pinReady && (
                            <StyledButton
                            style={{
                                backgroundColor: green,
                                flexDirection: 'row'
                            }}
                            onPress={submitOTPVerification}
                        >
                            <ButtonText>ยืนยัน</ButtonText>
                            <Ionicons name="checkmark-circle" size={25} color={primary} />
                        </StyledButton>
                        )}

                        {!verifying && !pinReady && (
                            <StyledButton
                            disabled={true}
                            style={{
                                backgroundColor: lightGreen,
                                flexDirection: 'row'
                            }}
                            onPress={submitOTPVerification}
                        >
                            <ButtonText style={{ color: gray }}>ยืนยัน</ButtonText>
                            <Ionicons name="checkmark-circle" size={25} color={gray} />
                        </StyledButton>
                        )}

                        {verifying && (
                            <StyledButton
                            disabled={true}
                            style={{
                                backgroundColor: green,
                                flexDirection: 'row'
                            }}
                            onPress={submitOTPVerification}
                        >
                            <ActivityIndicator size="large" color={primary} />
                        </StyledButton>
                        )}

                        <ResendTimer  
                            activeResend={activeResend}
                            resendingEmail={resendingEmail}
                            resendStatus={resendStatus}
                            timeLeft={timeLeft}
                            targetTime={targetTime}
                            resendEmail={resendEmail}
                        />
                    </BottomHalf>

                    <VerificationModal
                        successfull={verificationSuccessful}
                        setModalVisible={setModalVisible}
                        modalVisible={modalVisible}
                        requestMessage={requestMessage}
                        persistLoginAfterOTPVerification={persistLoginAfterOTPVerification}
                    />
            </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

export default Verification;