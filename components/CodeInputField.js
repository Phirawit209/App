import React, { useRef, useState, useEffect } from 'react';

import {
        CodeInputSection,
        HiddenTextInput,
        CodeInputContainer,
        CodeInput,
        CodeInputText,
        CodeInputFocused,
} from './styles';

const CodeInputFiled = ({
                        setpinReady,
                        code,
                        setCode,
                        maxLength
                        }) => {

    const codeDigitsArray = new Array(maxLength).fill(0);

    // ref for text input
    const textInputRef = useRef(null);

    const handleOnPress = () => {
        setInputContainerIsFocused(true);
        textInputRef?.current?.focus();
    };
    
    // monitoting input focus
    const [
        inputContainerIsFocused,
        setInputContainerIsFocused
    ] = useState(false);

    // handle
    const handleOnBlur = () => {
        setInputContainerIsFocused(false);
    };

    useEffect(() => {
        // toggle submit button state
        setpinReady(code.length === maxLength);
        return () => setpinReady(false);
    }, [code]); 

    const toCodeDigitInput = (_value, index) => {
        const emptyInputChar = '';
        const digit = code[index] || emptyInputChar;

        // formatting
        const isCurrentDigit = index === code.length;
        const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;

        const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
 
        const  StyledCodeInput = inputContainerIsFocused && isDigitFocused ? 
        CodeInputFocused : CodeInput;

        return (
            <StyledCodeInput key={index}>
                <CodeInputText>{digit}</CodeInputText>
            </StyledCodeInput>
        );
    };

    //

    return (
        <CodeInputSection>
            <CodeInputContainer onPress={handleOnPress}>
                {codeDigitsArray.map(toCodeDigitInput)}
            </CodeInputContainer>
          <HiddenTextInput
            ref={textInputRef}
            value={code}
            onChangeText={setCode}
            OnSubmitEditing={handleOnBlur}
            keyboardType="number-pad"
            returnKeyType="done"
            textContentType="oneTimeCode"
            maxLength={maxLength}
        />  
        </CodeInputSection>
        
    );
};

export default CodeInputFiled;