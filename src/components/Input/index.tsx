import React, { useState } from 'react';
import {Feather} from '@expo/vector-icons'

import { Container, InputText, IconContainer } from './styles'
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name'];
    value?: string;
}

export default function Input({iconName, value, ...rest}: InputProps) {
   const [isFocused, setIsFocused] = useState(false);
   const [isFill, setIsFill] = useState(false);
   const theme = useTheme();
   function handleFocused(){
    setIsFocused(true);
   }
   function handleBlur(){
    setIsFocused(false);
    setIsFill(!!value)
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
         onFocus={handleFocused}
         onBlur={handleBlur}
         {...rest} 
       />
   </Container> 
);}