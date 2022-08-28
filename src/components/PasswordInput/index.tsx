import React, { useState } from 'react';
import {Feather} from '@expo/vector-icons'

import { Container, InputText, IconContainer } from './styles'
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export default function PasswordInput({iconName, value, ...rest}: InputProps) {
   const [isPasswordVisible, setPassowordIsVisible] = useState(false);
   const [isFocused, setIsFocused] = useState(false);
   const [isFill, setIsFill] = useState(false);
   const theme = useTheme();
   function handleFocused(){
    setIsFocused(true);
   }
   function handleBlur(){
    setIsFocused(false);
    setIsFill(!!value);
   }

   function handlePassword() {
    setPassowordIsVisible(prevState => !prevState);
   }
return (
   <Container> 
    <IconContainer  isFocused={isFocused}>
      <Feather 
        name={iconName}
        color={(isFocused || isFill) ? theme.colors.main : theme.colors.text_detail}
        size={24}
      />
    </IconContainer>
      <InputText
         isFocused={isFocused}
         secureTextEntry={isPasswordVisible} 
         onFocus={handleFocused}
         onBlur={handleBlur}
         {...rest} 
      />
      <BorderlessButton onPress={handlePassword}>
        <IconContainer  isFocused={isFocused}>
        <Feather 
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          color={theme.colors.text_detail}
          size={24}
        />
      </IconContainer>
      </BorderlessButton>
   </Container> 
);}