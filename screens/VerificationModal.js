import React from 'react';
import { StatusBar  } from 'expo-status-bar';

import { Modal } from 'react-native';

import {    
            PageTitle,
            InfoText,
            StyledButton,
            ButtonText,
            ModalContainer,
            ModalView,
            Colors,    
} from '../components/styles';

const { primary, green, tertiary, red } = Colors;

// Icons
import { Ionicons } from '@expo/vector-icons';

const VerificationModal = ({
    modalVisible,
    setModalVisible,
    successfull,
    requestMessage,
    persistLoginAfterOTPVerification,
}) => {

const buttonHandler = () => {
    if (successfull) {
        persistLoginAfterOTPVerification();
    }
    setModalVisible(false);
};

    return (
        <>
        <Modal animationType="slide" visible={modalVisible} transparent={true}>
            <ModalContainer>
             {!successfull && 
                <FailContent 
                    buttonHandler={buttonHandler}
                    errorMsg={requestMessage}    
                />
            }
            
            {successfull &&
                <SuccessContext 
                    buttonHandler={buttonHandler}
                />
            }
            
            </ModalContainer>
        </Modal>
    </>
    );
};

const SuccessContext = ({ buttonHandler }) => {
    return (
        <ModalView>
            <StatusBar style="dark" />
            <Ionicons name="checkmark-circle" size={100} color={green} />

            <PageTitle
                style={{ fontSize: 25, color: tertiary, marginBottom: 10 }}
            >
                สำเร็จ 
            </PageTitle>

            <InfoText style={{ marginBottom: 15 }}>
                ยินดีด้วยบัญชีผู้ใช้งานของคุณได้รับการยืนยันแล้ว.
            </InfoText>

            <StyledButton
                style={{ backgroundColor: green, flexDirextion: 'row' }}
                onPress={buttonHandler}
            >
                <ButtonText>เข้าสู่แอปพลิเคชัน</ButtonText>
                <Ionicons name="arrow-forward-circle" size={25} color={primary} />
            </StyledButton>
        </ModalView>
    );
};

const FailContent = ({ errorMsg, buttonHandler }) => {
    return (
        <ModalView>
            <StatusBar style="dark" />
            <Ionicons name="close-circle" size={100} color={red} />

            <PageTitle
                style={{ fontSize: 25, color: tertiary, marginBottom: 10 }}
            >
                เกิดช้อผิดพลาด !
            </PageTitle>
            
            <InfoText style={{ marginBottom: 15 }}>
                { `บัญชีผู้ใช้งานของคุณยังไม่ได้รับการยืนยัน. ${errorMsg}` }
            </InfoText>

            <StyledButton
                style={{ backgroundColor: red, flexDirextion: 'row' }}
                onPress={buttonHandler}
            >
                <ButtonText>กรุณาลองใหม่อีกครั้ง</ButtonText>
                <Ionicons name="arrow-redo-circle" size={25} color={primary} />
            </StyledButton>
        </ModalView>
    );
};


export default VerificationModal;