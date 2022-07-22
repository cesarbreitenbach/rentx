import { FlatList, FlatListProps } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { carDTO } from "../../dtos/carDTO";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_primary};
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled.View`
   width: 100%;
   height: 113px;
   background-color: ${({theme}) => theme.colors.header};

   justify-content: flex-end;
   padding: 32px 24px;
`;

export const TotalCars = styled.Text`
   color: ${({theme}) => theme.colors.text};
   font-size: ${RFValue(15)}px;
   font-family: ${({theme}) => theme.fonts.primary_400};
`;

export const CarList = styled(FlatList as new (props: FlatListProps<carDTO>) => FlatList<carDTO>)
.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {padding: 24},
})``;

export const ButtonArea = styled.View`
    width: 60px;
    height: 60px;
    background-color: ${({theme}) => theme.colors.main};
    position: absolute;
    bottom: 23px;
    right: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    
`;

export const MyCarsButton = styled(RectButton)<any>`
   flex: 1;
   width: 60px;
    height: 60px;
   justify-content: center;
    align-items: center;
    border-radius: 30px;
`;