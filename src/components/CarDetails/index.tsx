import React from 'react';
import Acessorie from '../Acessorie';
import BackButton from '../BackButton';
import ImageSlider from '../ImageSlider';

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
} from './styles'

import SpeedSvg from '../../assets/speed.svg';
import Acceleration from '../../assets/acceleration.svg';
import Force from '../../assets/force.svg';
import Gasoline from '../../assets/gasoline.svg';
import Exchange from '../../assets/exchange.svg';
import People from '../../assets/people.svg';

export default function CarDetails(){
return (
   <Container> 
    <Header>
      <BackButton onPress={() => {}} />
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

      <About>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado 
        na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
      </About>
    </Content>
   </Container> 
);}