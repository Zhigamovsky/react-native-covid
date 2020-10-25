import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import { NavElement } from "../types/navigation"
import { NavTree } from "../config/navigation-tree"
import * as Screens from './../screens/PatientGeneralStack'

const StackNavigator = createStackNavigator();

export const PatientQuestionnaireStackNavigator: React.FC<NavElement> = ({
  navigation
}) => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={NavTree.P__QuestionnaireBranch.QuestionnaireFetus.path}
    >
      <StackNavigator.Screen
        name={NavTree.P__QuestionnaireBranch.QuestionnaireFetus.path}
        component={Screens.Questionnaire} 
      />
    </StackNavigator.Navigator>
  )
}