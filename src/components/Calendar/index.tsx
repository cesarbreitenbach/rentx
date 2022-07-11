import React from 'react';
import { Feather } from '@expo/vector-icons';
import {Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';

import { Container } from './styles'
import { useTheme } from 'styled-components';
import { ptBr } from './localeConfig';

LocaleConfig.locales['pt-br'] = ptBr;

LocaleConfig.defaultLocale = 'pt-br';

export interface MarkedDateProps {
    [date: string]: {
        color: string;
        textColor: string;
        disabled?: boolean;
        disabledTouchEvent?: boolean;
    }
}

export interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}
interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: any;
}

export default function Calendar({markedDates, onDayPress}: CalendarProps){
    const theme = useTheme();
return (
   <Container> 
    <CustomCalendar 
        renderArrow={(direction) => 
            <Feather
                size={24}
                color={theme.colors.text}
                name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
            />}
        headerStyle={{
            backgroundColor: theme.colors.background_secondary,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.text_detail,
            paddingBottom: 10,
            marginBottom: 10,
        }}

        theme={{ 
            textDayFontFamily: theme.fonts.primary_400,
            textDayHeaderFontFamily: theme.fonts.primary_500,
            textDayHeaderFontSize: 10,
            textMonthFontFamily: theme.fonts.secondary_600,
            textMonthFontSize: 20,
            monthTextColor: theme.colors.title,
            arrowStyle: {
                marginHorizontal: -15
            }
        }}

        firstDay={1}
        minDate={String(new Date())}
        markingType="period"
        markedDates={markedDates}
        onDayPress={onDayPress}
    
    />
   </Container> 
);}