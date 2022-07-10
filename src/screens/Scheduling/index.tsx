import React from 'react';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';

import { 
    Container, 
    Header, 
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
 } from './styles'

import ArrowSvg from '../../assets/arrow.svg'; 
import { StatusBar } from 'react-native';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../SchedulingDetails';

export default function Scheduling(){
   const theme = useTheme();
   const navigation = useNavigation<Nav>();

  function handleConfirm () {
    navigation.navigate('details')
  }
return (
   <Container> 
    <Header>
      <StatusBar 
         barStyle="light-content" 
         translucent
         backgroundColor="transparent"
         
      />
      <BackButton onPress={() => navigation.goBack()} color={theme.colors.shape} />
      <Title> 
        Escolha uma {`\n`}
        data de início e {`\n`}
        fim do aluguel 
      </Title>
      <RentalPeriod> 
        <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              18/07/2022
            </DateValue>
        </DateInfo>

        <ArrowSvg />

        <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>
                18/07/2022
            </DateValue>
        </DateInfo>
      </RentalPeriod>
    </Header>
    <Content>
      <Calendar />
    </Content>
    <Footer>
      <Button title="Confirmar" onPress={handleConfirm}/>
    </Footer>
   </Container> 
);}