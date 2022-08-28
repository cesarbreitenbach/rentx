import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps {
    color?: string;
}

interface TextButtonProps {
    light: boolean;
}


export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    padding: 19px;
    justify-content: center;
    align-items: center;
    background-color: ${({color}) => color}; 
    margin-bottom: 8px;
`;

export const Title = styled.Text<TextButtonProps>`
   font-family: ${({theme}) => theme.fonts.primary_500};
   color: ${({theme, light}) => light ? theme.colors.header : theme.colors.shape};
   font-size: ${RFValue(15)}px;
`

  