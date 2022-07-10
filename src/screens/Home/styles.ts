import { FlatList, FlatListProps } from "react-native";
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