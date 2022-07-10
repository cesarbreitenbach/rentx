import React from 'react';
import Acessorie from '../../components/Acessorie';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

import {Feather} from '@expo/vector-icons'

import {  CarImages, 
          Container, 
          Header,
          Content,
          Details,
          Description,
          Brand,
          Name,
          Rent,
          Period,
          Price,
          Acessories,
          Footer,
          RentalPeriod,
          CalendarIcon,
          DateInfo,
          DateTitle,
          DateValue,
          RentalPrice,
          RentalPriceLabel,
          RentalPriceDetails,
          RentalPriceQuota,
          RentalPriceTotal,
} from './styles'

import SpeedSvg from '../../assets/speed.svg';
import Acceleration from '../../assets/acceleration.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import Exchange from '../../assets/exchange.svg';
import People from '../../assets/people.svg';
import Button from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

export interface Nav {
  navigate: (value: string, params?: object) => void;
  goBack: () => void;
}

export default function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation<Nav>();

  function handleConfirm () {
    navigation.navigate('complete')
  }
return (
   <Container> 
    <Header>
      <BackButton onPress={() => navigation.goBack()} />
    </Header>
    <CarImages>
      <ImageSlider 
        imagesUrl={['https://s2.glbimg.com/aqtQ6m8ulJcZgg_s_h40aGymY24=/0x0:1400x955/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/h/C/PW9LErTfuRsQJdIwO7Vg/porsche-911-turbo-s-2021-1280-01.jpg']}
      />
    </CarImages>

    <Content>
      <Details>
        <Description>
          <Brand>Porshe</Brand>
          <Name>911 Carrera</Name>
        </Description>
        <Rent>
          <Period>Ao Dia</Period>
          <Price>R$ 500</Price>
        </Rent>
      </Details>

      <Acessories>
        <Acessorie name="380 KM/h" icon={SpeedSvg}/>
        <Acessorie name="3.2s" icon={Acceleration}/>
        <Acessorie name="800 HP" icon={Force}/>
        <Acessorie name="Gasolina" icon={Gasoline}/>
        <Acessorie name="Auto" icon={Exchange}/>
        <Acessorie name="2 pessoas" icon={People}/>
      </Acessories>

      <RentalPeriod>
        <CalendarIcon>
          <Feather
            name="calendar"
            size={RFValue(24)}
            color={theme.colors.shape}
          />
        </CalendarIcon>
        <DateInfo>
          <DateTitle>DE</DateTitle>
          <DateValue>18/02/2022</DateValue>
        </DateInfo>
          <Feather
              name="chevron-right"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
        <DateInfo>
          <DateTitle>ATE</DateTitle>
          <DateValue>28/02/2022</DateValue>
        </DateInfo>

      </RentalPeriod>

      <RentalPrice>
        <RentalPriceLabel>Total</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>R$ 580 x3 diarias</RentalPriceQuota>
          <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
        </RentalPriceDetails>
      </RentalPrice>

    </Content>
    <Footer>
      <Button title="Alugar Agora" color={theme.colors.success} onPress={handleConfirm}/>
    </Footer>
   </Container> 
);}