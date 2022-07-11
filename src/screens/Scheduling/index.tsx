import React, { useState } from 'react';
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
import { Alert, StatusBar } from 'react-native';
import Button from '../../components/Button';
import Calendar, { DayProps, MarkedDateProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Nav } from '../SchedulingDetails';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { carDTO } from '../../dtos/carDTO';
import { format } from 'date-fns';
import { getPlatFormDate } from '../../utils/getPlatFormDate';

interface RouteParams {
  car: carDTO;
}
interface IRentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}

export default function Scheduling(){
   const theme = useTheme();
   const navigation = useNavigation<Nav>();
   const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
   const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
   const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod);

   const route = useRoute();
   const {car} = route.params as RouteParams;


  function handleConfirm () {
    if(!rentalPeriod.start || !rentalPeriod.end) {
      Alert.alert('Selecione o intervalo do aluguel');
    } else {
      navigation.navigate('details', {
        car,
        dates: Object.keys(markedDates)
      })
    }
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length -1];

    setRentalPeriod({ 
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatFormDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatFormDate(new Date(endDate)), 'dd/MM/yyyy'),
    })

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
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
        </DateInfo>

        <ArrowSvg />

        <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
            {rentalPeriod.endFormatted}
            </DateValue>
        </DateInfo>
      </RentalPeriod>
    </Header>
    <Content>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleChangeDate}
      />
    </Content>
    <Footer>
      <Button title="Confirmar" onPress={handleConfirm}/>
    </Footer>
   </Container> 
);}