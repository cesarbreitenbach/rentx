import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home  from '../screens/Home';
import Scheduling  from '../screens/Scheduling';
import SchedulingComplete  from '../screens/SchedulingComplete';
import SchedulingDetails from '../screens/SchedulingDetails';
import CarDetails from '../screens/CarDetails';
import MyCars from '../screens/MyCars';
import Splash from '../screens/SplashScreen';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){
    return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="splash">
        <Screen 
            name="splash"
            component={Splash}
        />
        <Screen 
            name="home"
            component={Home}
        />
         <Screen 
            name="carDetails"
            component={CarDetails}
        />
        <Screen 
            name="scheduling"
            component={Scheduling}
        />
        <Screen 
            name="details"
            component={SchedulingDetails}
        />
        <Screen 
            name="complete"
            component={SchedulingComplete}
        />
        <Screen 
            name="myCars"
            component={MyCars}
        />
    </Navigator>
)}