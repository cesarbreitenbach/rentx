import React from 'react';
import LottieView from 'lottie-react-native';
import carLoading from '../../assets/car-loading.json';

import { Container } from './styles'
export default function LoadingAnimated(){
return (
   <Container> 
    <LottieView 
       source={carLoading}
       style={{height: 200}}
       autoPlay
       loop
    />

   </Container> 
);}