import React from 'react';
import { StatusBar} from 'react-native';

import { CarList, Container, Header, HeaderContent, TotalCars } from './styles';

import Logo from '../../assets/logo.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';

export default function Home(){
    const carData = [{
        brand: 'Audi',
        name: 'RS 5 coupé',
        rent: {
            period: 'ao dia',
            price: 120,
        },
        thumbnail: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/09/audi-rs-7-sportback-e1568147517790.jpg',
    },
    {
        brand: 'Porshe',
        name: '911 turbo S',
        rent: {
            period: 'ao dia',
            price: 340,
        },
        thumbnail: 'https://s2.glbimg.com/aqtQ6m8ulJcZgg_s_h40aGymY24=/0x0:1400x955/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/h/C/PW9LErTfuRsQJdIwO7Vg/porsche-911-turbo-s-2021-1280-01.jpg',
    }]
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
            <CarList 
               data={[1, 2, 3, 4, 5, 6, 7, 8]}
               keyExtractor={item => String(item)}
               renderItem={({item}) => <Car data={carData[0]}/>}
            />
        </Container> 
);}