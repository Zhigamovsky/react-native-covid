import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/DoctorGeneralStack'

const StackNavigator = createStackNavigator();

export const DoctorGeneralStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.D__GeneralBranch.GeneralFetus.path}
    >
      <StackNavigator.Screen
        name={NavTree.D__GeneralBranch.GeneralFetus.path}
        component={Screens.General} 
      />
    </StackNavigator.Navigator>
  )
}