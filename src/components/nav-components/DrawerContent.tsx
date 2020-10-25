import React, { useState, useContext, useMemo, useEffect } from 'react'
import { 
  DrawerContentScrollView,
  DrawerNavigationProp,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { DrawerContentItem } from './DrawerContentItem'
import { DrawerUserInformation } from './DrawerUserInformation'
import { NavTree } from '../../config/navigation-tree'
import { CollectionItemsParams, DrawerContentProps } from './types'
import { EAccountTypes } from '../../config/enums/enum.account.types'
import { COLORS } from '../../utils'



export const DrawerContent: React.FC<DrawerContentProps> = (props) => {

  const Events = {
    exit: async () => {
      try {
        // await axiosActions.FORCE_LOGOUT({});
      }
      catch(e) { }
      finally {
        props.navigation.navigate(NavTree.AuthorizationBranch.SwitcherFetus.path)
      }
    },
  }

  const PatientRouteEvents = {
    toDashboard: () => props.navigation.navigate(NavTree.P__DrawerBranch.GeneralStackRudiment.path),
    toQuestionnaire: () => props.navigation.navigate(NavTree.P__DrawerBranch.QuestionnaireStackRudiment.path),
    toCovidInformation: () => props.navigation.navigate(NavTree.P__DrawerBranch.AboutCOVIDFetus.path),
    logout: () => Events.exit()
  }

  const DoctorRouteEvents = {
    toDashboard: () => props.navigation.navigate(NavTree.D__DrawerBranch.GeneralStackRudiment.path),
    logout: () => Events.exit()
  }

  const DrawerItems: CollectionItemsParams = {
    [EAccountTypes.Doctor]: [
      {
        title: 'Dashboard',
        routePath: '',
        Icon: <MaterialIcons name='backup-table' color={COLORS.segments} size={30} />,
        onPress: DoctorRouteEvents.toDashboard
      },
      {
        title: 'Settings',
        routePath: '',
        Icon: <MaterialIcons name='settings' color={COLORS.segments} size={30} />,
        onPress: DoctorRouteEvents.logout
      },
      {
        title: 'Logout',
        routePath: '',
        Icon: <Ionicons name='exit' color={COLORS.segments} size={30} />,
        onPress: DoctorRouteEvents.logout
      }
    ],
    [EAccountTypes.Patient]: [
      {
        title: 'Dashboard',
        routePath: '',
        Icon: <MaterialIcons name='table-chart' color={COLORS.segments} size={30} />,
        onPress: PatientRouteEvents.toDashboard
      },
      {
        title: 'Questionnaire',
        routePath: '',
        Icon: <MaterialIcons name='list-alt' color={COLORS.segments} size={30} />,
        onPress: PatientRouteEvents.toQuestionnaire
      },
      {
        title: 'About COVID-19',
        routePath: '',
        Icon: <MaterialIcons name='coronavirus' color={COLORS.segments} size={30} />,
        onPress: PatientRouteEvents.toCovidInformation
      },
      {
        title: 'Settings',
        routePath: '',
        Icon: <MaterialIcons name='settings' color={COLORS.segments} size={30} />,
        onPress: PatientRouteEvents.logout
      },
      {
        title: 'Logout',
        routePath: '',
        Icon: <Ionicons style={{marginLeft: 5}} name='exit' color={COLORS.segments} size={30} />,
        onPress: PatientRouteEvents.logout
      } 
    ]
  }
  
  return (
    <DrawerContentScrollView {...props}>
      <WhiteWrapper />
      <DrawerUserInformation 
        accountType={props.accountType}
      />
      {/* <DrawerContentItem 
        title='Logout'
        onPress={}
        Icon={<Ionicons name='exit' color={COLORS.segments} size={30} />}
      /> */}
      {DrawerItems[props.accountType].map((item, index) => (
        <DrawerContentItem 
          key={index}
          title={item.title}
          onPress={item.onPress}
          Icon={item.Icon}
        /> 
      ))}
    </DrawerContentScrollView>
  )
}

const WhiteWrapper = styled.View`
  background: white;
  height: 8px;
  width: 100%;
  z-index: 10;
`