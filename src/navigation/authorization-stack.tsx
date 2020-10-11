import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/AuthorizationStack'
import { DrawerStackNavigator as DoctorDrawer } from './doctor-drawer'
import { DrawerStackNavigator as PatientDrawer } from './patient-drawer'

const StackNavigator = createStackNavigator();

export const AuthorizationStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.AuthorizationBranch.LoaderFetus.path}
    >
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.LoaderFetus.path}
        component={Screens.Loader} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.SwitcherFetus.path}
        component={Screens.Switcher} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.AuthorizationFetus.path}
        component={Screens.Authorization} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.D__RegistrationFetus.path}
        component={Screens.DoctorRegistration} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.P__RegistrationFetus.path}
        component={Screens.PatientRegitration} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.D__Drawer.path}
        component={DoctorDrawer} 
      />
      <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.P__Drawer.path}
        component={PatientDrawer} 
      />
      {/* <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.RegistrationFetus.path}
        component={Screens.Registration} 
      /> */}
      {/* <StackNavigator.Screen
        name={NavTree.AuthorizationBranch.DrawerRudiment.path}
        component={DrawerStackNavigator} 
      /> */}
    </StackNavigator.Navigator>
  )
}