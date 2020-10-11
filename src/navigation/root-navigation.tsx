import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthorizationStackNavigator } from './authorization-stack'
import { NavElement } from '../types/navigation'

const Application: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <AuthorizationStackNavigator 
        navigation={navigation} 
      />
    </NavigationContainer>
  ) 
}

export default Application;