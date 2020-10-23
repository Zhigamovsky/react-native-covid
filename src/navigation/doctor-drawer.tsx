import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import { DoctorGeneralStackNavigator } from './doctor-general-stack'
import { DrawerContent } from '../components/nav-components/DrawerContent'
import { EAccountTypes } from '../config/enums/enum.account.types'

// import { DrawerContent } from '../components/nav-components'

const DrawerNavigator = createDrawerNavigator();

export const DrawerStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <DrawerNavigator.Navigator
      drawerContent={props => (
        <DrawerContent 
          {...props} 
          accountType={EAccountTypes.Doctor}
        />
      )}
      hideStatusBar={false}
      initialRouteName={NavTree.D__DrawerBranch.GeneralStackRudiment.path}
    >
      <DrawerNavigator.Screen
        name={NavTree.D__DrawerBranch.GeneralStackRudiment.path}
        component={DoctorGeneralStackNavigator} 
      />
    </DrawerNavigator.Navigator>
  )
}