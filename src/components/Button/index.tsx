import React from 'react';

import { Container, Title } from './styles'

export interface Props {
    title: string;
    color?: string;
}

export default function Button({
    title, 
    color,
    ...rest
}: Props){
return (
   <Container color={color} onPress={() => {}} {...rest}> 
      <Title>{title}</Title> 
   </Container> 
);}