import React from 'react';
import Acessorie from '../../components/Acessorie';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';

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
          About,
          Acessories,
          Footer,
} from './styles'

import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Nav } from '../SchedulingDetails';
import { carDTO } from '../../dtos/carDTO';

import {getAcessoryIcon} from '../../utils/getAcessoryIcon';

interface RouteParams {
  car: carDTO;
}

export default function CarDetails(){
  const navigation = useNavigation<Nav>();
  const route = useRoute();

  const { car } = route.params as RouteParams;

  function handleConfirm () {
    navigation.navigate('scheduling')
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
        {car.accessories.map(accessory => {
          return <Acessorie key={accessory.type} name={accessory.name} icon={getAcessoryIcon(accessory.type)}/>
        })}
        
      </Acessories>

      <About>{car.about}</About>
    </Content>
    <Footer>
      <Button title="Confirmar" onPress={handleConfirm}/>
    </Footer>
   </Container> 
);}
