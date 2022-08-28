import React from 'react';
import { useTheme } from 'styled-components';

import { Container, Title } from './styles'

export interface Props {
    title: string;
    color?: string;
    onPress: () => void;
    light?: boolean;
}

export default function Button({
    title, 
    color,
    onPress,
    light=false,
}: Props){
    const theme = useTheme();

return (
   <Container color={color ? color : theme.colors.main } onPress={onPress}> 
      <Title light={light}>{title}</Title> 
   </Container> 
);}