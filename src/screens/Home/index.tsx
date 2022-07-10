import React, { useEffect, useState } from 'react';
import { StatusBar} from 'react-native';

import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../SchedulingDetails';
import { api } from '../../services/api';
import { carDTO } from '../../dtos/carDTO';
import Loading from '../../components/Loading';

export default function Home(){

    const navigation = useNavigation<Nav>();
    const [carData, setCarData] = useState<carDTO[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleCarDetails(car: carDTO) {
        navigation.navigate('carDetails', {car});
    }
    
    useEffect(() => {
        async function fetchCars() {
            try {
                setIsLoading(true);
                const response = await api.get('/cars');
                setIsLoading(false);
                setCarData(response.data);
            } catch (error) {
                console.log(`erro ao acessar api ${JSON.stringify(error)}`)
                setIsLoading(false);
            }
        }
        fetchCars();
    }, [])

    

return (
        <Container> 
            <StatusBar 
                barStyle="light-content"
                translucent
                backgroundColor="transparent" />
            <Header>
                <HeaderContent> 
                    <Logo 
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>
            {isLoading ? <Loading /> :
            <CarList 
               data={carData}
               keyExtractor={item => String(item.id)}
               renderItem={({item}) => <Car onPress={() => handleCarDetails(item)} data={item}/>}
            />}
        </Container> 
);}