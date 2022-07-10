import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import { useTheme } from 'styled-components';

export default function Loading(){
    const theme = useTheme();
return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator  size="large" color={theme.colors.main}/>
    </View>
);}