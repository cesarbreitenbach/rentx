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

import Button from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { carDTO } from '../../dtos/carDTO';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';
import { format } from 'date-fns';
import { getPlatFormDate } from '../../utils/getPlatFormDate';
import { api } from '../../services/api';
import { Alert } from 'react-native';

export interface Nav {
  navigate: (value: string, params?: object) => void;
  goBack: () => void;
}
interface RouteParams {
  car: carDTO;
  dates: string[];
}

export default function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation<Nav>();
  const route = useRoute();
  const {car, dates} = route.params as RouteParams;

  async function handleConfirm () {
    const scheduleByCar = await api.get(`/schedules_bycars/${car.id}`);
    const unavailable_dates = [
      ...scheduleByCar.data.unavailable_dates,
      ...dates,
    ];
    try{
      await api.put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates
      });
      navigation.navigate('complete');
    } catch (error) {
      console.log(`deu erro ao agendar ${JSON.stringify(error)}`);
      Alert.alert('Não foi possivel realizar o agendamento');
    }
    
  }
return (
   <Container> 
    <Header>
      <BackButton onPress={() => navigation.goBack()} />
    </Header>
    <CarImages>
      <ImageSlider 
        imagesUrl={car.photos}
      />
    </CarImages>

    <Content>
      <Details>
        <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name}</Name>
        </Description>
        <Rent>
          <Period>{car.rent.period}</Period>
          <Price>R$ {car.rent.price}</Price>
        </Rent>
      </Details>

      <Acessories>
        {car.accessories.map(item => {
          return <Acessorie key={item.type} name={item.name} icon={getAcessoryIcon(item.type)}/>
        })}
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
          <DateValue>{format(getPlatFormDate(new Date(dates[0])), 'dd/MM/yyyy')}</DateValue>
        </DateInfo>
          <Feather
              name="chevron-right"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
        <DateInfo>
          <DateTitle>ATE</DateTitle>
          <DateValue>{format(getPlatFormDate(new Date(dates[dates.length -1])), 'dd/MM/yyyy')}</DateValue>
        </DateInfo>

      </RentalPeriod>

      <RentalPrice>
        <RentalPriceLabel>Total</RentalPriceLabel>
        <RentalPriceDetails>
          <RentalPriceQuota>R$ {car.rent.price} x{dates.length} diarias</RentalPriceQuota>
          <RentalPriceTotal>R$ {car.rent.price * dates.length}</RentalPriceTotal>
        </RentalPriceDetails>
      </RentalPrice>

    </Content>
    <Footer>
      <Button title="Alugar Agora" color={theme.colors.success} onPress={handleConfirm}/>
    </Footer>
   </Container> 
);}