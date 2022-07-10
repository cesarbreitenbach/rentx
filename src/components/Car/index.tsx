import React from 'react';

import { 
    Container,
    Datails,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImage

} from './styles'
import GasolineSvg from '../../assets/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import { carDTO } from '../../dtos/carDTO';
import { getAcessoryIcon } from '../../utils/getAcessoryIcon';

interface Props extends RectButtonProps {
    data: carDTO;
}

export function Car({data, ...rest}: Props){
    const MotorIcon = getAcessoryIcon(data.fuel_type);
return (
   <Container {...rest}> 
    <Datails>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
            <Rent>
                <Period>{data.rent.period}</Period>
                <Price>{`R$ ${data.rent.price}`}</Price>
            </Rent>
            <Type>
                <MotorIcon />
            </Type>
        </About>
    </Datails>

    <CarImage source={{ uri: data.thumbnail}}  resizeMode="contain"/>

   </Container> 
);}