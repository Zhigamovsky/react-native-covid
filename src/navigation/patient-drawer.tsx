import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import { PatientGeneralStackNavigator } from './patient-general-stack'
import { PatientQuestionnaireStackNavigator } from './patient-questionnaire-stack'
import AboutCovidScreen from '../screens/PatientAboutCovid/AboutCovid'
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
          accountType={EAccountTypes.Patient}
        />
      )}
      hideStatusBar={false}
      initialRouteName={NavTree.P__DrawerBranch.GeneralStackRudiment.path}
    >
      <DrawerNavigator.Screen
        name={NavTree.P__DrawerBranch.GeneralStackRudiment.path}
        component={PatientGeneralStackNavigator} 
      />
      <DrawerNavigator.Screen
        name={NavTree.P__DrawerBranch.QuestionnaireStackRudiment.path}
        component={PatientQuestionnaireStackNavigator} 
      />
      <DrawerNavigator.Screen
        name={NavTree.P__DrawerBranch.AboutCOVIDFetus.path}
        component={AboutCovidScreen} 
      />
    </DrawerNavigator.Navigator>
  )
}