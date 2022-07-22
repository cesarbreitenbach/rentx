import React from 'react';
import Acessorie from '../../components/Acessorie';
import BackButton from '../../components/BackButton';
import ImageSlider from '../../components/ImageSlider';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

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
          HeaderAnimationContainer,
} from './styles'

import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Nav } from '../SchedulingDetails';
import { carDTO } from '../../dtos/carDTO';

import {getAcessoryIcon} from '../../utils/getAcessoryIcon';
import { StatusBar } from 'react-native';

interface RouteParams {
  car: carDTO;
}

export default function CarDetails(){
  const navigation = useNavigation<Nav>();
  const route = useRoute();

  const { car } = route.params as RouteParams;

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
          scrollY.value,
          [0, 200],
          [200, 70],
          Extrapolate.CLAMP
        ),
    }
  })

  const sliderCarStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0]
      ),
    }
  })

  function handleConfirm () {
    navigation.navigate('scheduling', {car})
  }



return (
   <Container> 
    <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
    <HeaderAnimationContainer style={[headerStyleAnimation]}>
      <Header>
        <BackButton onPress={() => navigation.goBack()} />
      </Header>
      <CarImages style={[sliderCarStyleAnimation]}>
        <ImageSlider 
          imagesUrl={car.photos}
        />
      </CarImages>
    </HeaderAnimationContainer>

    <Content
       onScroll={scrollHandler}
       scrollEventThrottle={16}
    >
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

      <About>
        {car.about}
        {car.about}
        {car.about}
      </About>
    </Content>
    <Footer>
      <Button title="Confirmar" onPress={handleConfirm}/>
    </Footer>
   </Container> 
);}
