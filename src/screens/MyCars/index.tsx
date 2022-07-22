import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from "@expo/vector-icons"
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import BackButton from '../../components/BackButton';
import { Car } from '../../components/Car';
import { carDTO } from '../../dtos/carDTO';
import { api } from '../../services/api';

interface CarProps {
    id: string;
    user_id: string;
    car: carDTO;
}

import { Apointment, ApointmentQtd, ApointmentTitle, CarFooter, CarFooterDate, CarFooterPeriod, CarFooterTitle, CarWrapper, Container, Content, Header, SubTitle, Title } from './styles'
import Loading from '../../components/Loading';
export default function MyCars(){
    const [cars, setCars] = useState<CarProps>({} as CarProps);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const theme = useTheme();

    useEffect(() => {
        async function fetchCars(){
            try{ 
                setLoading(true);
                const response = await api.get('schedules_byuser?user_id=1');
                setCars(response.data);
            } catch(error) {
                setLoading(false);
                console.log(`Erro na api ${JSON.stringify(error)}`)
            } finally {
                setLoading(false);
            }
        }
        fetchCars();
    }, [])
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
      Seus agendamentos, estão aqui.
      </Title>
      <SubTitle>Conforto, segurança e praticidade.</SubTitle>
    </Header>
    <Content>
        <Apointment>
            <ApointmentTitle>Agendamentos feitos</ApointmentTitle>
            <ApointmentQtd>{cars.length}</ApointmentQtd>
        </Apointment>
        { loading ? <Loading /> :
        <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) =>(
                 <CarWrapper>
                     <Car data={item.car} />
                     <CarFooter>
                        <CarFooterTitle>Periodo</CarFooterTitle>
                        <CarFooterPeriod>
                            <CarFooterDate>{item.startDate}</CarFooterDate>
                            <AntDesign 
                                name="arrowright"
                                size={20}
                                color={theme.colors.title}
                                style={{marginHorizontal: 10}}
                            />
                            <CarFooterDate>{item.endDate}</CarFooterDate>
                        </CarFooterPeriod>
                     </CarFooter>
                 </CarWrapper>
                 
                 )}
            />}
    </Content>
    
   </Container> 
);}