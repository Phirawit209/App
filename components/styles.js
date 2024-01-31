import styled  from 'styled-components';

import {View,
        Text, 
        TextInput, 
        Image, 
        TouchableOpacity, 
} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// Colors
export const Colors = {
    primary: "#ffffff",      // primary: White (#ffffff)
    secondary: "#E5E7E8",    // secondary: Light gray (#E5E7E8)
    tertiary: "#1F2937",     // tertiary: Dark gray (#1F2937)
    darkLight: "#9CA3AF",    // darkLight: Light gray (#9CA3AF)
    brand: "#6D28D9",        // brand: A specific shade of purple (#6D28D9)
    green: "#10B981",        // green: A shade of green (#10B981)
    red: "#EF4444",          // red: A shade of red (#EF4444)
    gray: "#6B7280",         // Gray: A shade of gray (#6B7280)
    lightGreen: 'rgba(16, 185, 129, 0.1)',  // LightGreen: A light green color with 10% opacity (rgba(16, 185, 129, 0.1))
};

const { primary, 
        secondary, 
        tertiary, 
        darkLight, 
        brand, 
        green, 
        red, 
        gray, 
        lightGreen 
        } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 15px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};    
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;   
`;

export const WelcomeContainer = styled(InnerContainer)`
    padding: 10px;
    padding-top: 5px;
    justify-content: center;  
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;   
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
    height: 180px;
    width: 90%
`;

export const PageTitle = styled.Text`
    font-size: 12px;
    text-align: center;  
    font-weight: bold;
    color: ${brand};
    padding: 10px; 

    ${(props) => props.welcome &&`
        font-size : 35px;
    `}
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};

    ${(props) => props.welcome &&`
    margin-bottom: 5px;
    font-weight : normal;
`}
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
   background-color: ${secondary};
   padding: 12px;
   padding-left: 40px;
   padding-right: 40px;
   border-radius: 3px;
   font-size: 14px;
   height: 45px;
   margin-vertical: 3px;  
   margin-bottom: 2px;   
   color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 12px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 10px;
    top: 55px;
    posittion: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    left: 250px;
    marginTop: 55px;  
    position: absolute;  
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
    background-color: ${green};
    flex-direction: row;
    justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;

    ${(props) => props.google == true && `
    padding: 25px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 16px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;   
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;

// Verifications components
export const TopHalf = styled.View`
    flex: 1;
    justify-content: center;
    padding: 20px;
`;

export const IconBg = styled.View`
    width: 250px;
    height: 250px;;
    background-color: ${Colors.lightGreen};
    border-radius: 250px;
    justify-content: center;
    align-items: center;
`;

export const BottomHalf = styled(TopHalf)`
    justify-content: space-around;
`;

export const InfoText = styled.Text`
    color: ${Colors.gray};
    font-size: 15px;
    text-align: center;    
`;

export const EmphasizeText = styled.Text`
    font-weight: bold;
    font-style: italic; 
    text-align: center;      
`;

export const InlineGroup = styled.View`
    flex-direction: row;
    padding: 10px;
    justify-content: center;
    align-items: center;       
`;

// Modal styles
export const ModalContainer = styled(StyledContainer)`
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 35px;
    align-items: center;
    elevation: 5;
    shadow-color: #000;
    shadow-offset: 0px 2px;
    shadow-opacity: 0.25;
    shadow-radius: 4px;
    width: 100%      
`;

// PIN Input Styles
export const CodeInputSection = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    margin-vertical: 30px;       
`;

export const HiddenTextInput = styled.TextInput`
    position: absolute;
    width: 1px;
    height: 1px;
    opacity: 0;
`;

export const CodeInputContainer = styled.Pressable`
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
`;

export const CodeInput = styled.View`
    border-color: ${Colors.lightGreen};
    min-width: 15%;
    border-width: 2px;
    border-radius: 5px;
    padding: 12px;
`;

export const CodeInputText = styled.Text`
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    color: ${Colors.brand};
`;

export const CodeInputFocused = styled(CodeInput)`
    border-color: ${Colors.green};
`;