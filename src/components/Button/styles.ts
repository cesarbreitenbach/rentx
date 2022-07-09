import styled from 'styled-components/native';
import { Props } from '.';
import {RFValue} from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
    color?: string;
}
export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 19px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme, color}) => color ? color : theme.colors.main}; 
`;

export const Title = styled.Text`
   font-family: ${({theme}) => theme.fonts.primary_500};
   color: ${({theme}) => theme.colors.shape};
   font-size: ${RFValue(15)}px;
`

  