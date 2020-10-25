import { DrawerNavigationProp } from "@react-navigation/drawer"
import { NavigationProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import { AccountTypes } from "../../screens/AuthorizationStack/static/data"

export enum ENavTypes {
  STACK_ELEMENT = 'NAVIGATION_STACK_ELEMENT',
  DRAWER_ELEMENT = 'NAVIGATION_DRAWER_ELEMENT'
}

export interface Route<Params extends object = {}> {
  key: string,
  name: string,
  params: Params
}

export interface NavElement<Type extends ENavTypes = ENavTypes.STACK_ELEMENT, Params extends object = {}> {
  navigation: 
    Type extends ENavTypes.STACK_ELEMENT 
      ? StackNavigationProp<any> : 
    Type extends ENavTypes.DRAWER_ELEMENT 
      ? DrawerNavigationProp<any> : 
    NavigationProp<any>,
  route: Route<Params>
}

export interface LoaderScreenProps
  extends NavElement {

}

export interface SwitcherScreenProps
  extends NavElement {

}

export interface AuthorizationScreenProps
  extends NavElement<ENavTypes.STACK_ELEMENT, {
    accountType: typeof AccountTypes.values[number]
  }> {
  
}

export interface DoctorRegistrationScreenProps
  extends NavElement {

}

export interface DoctorRegistrationScreenProps
  extends NavElement {

}

export interface PatientRegistrationScreenProps
  extends NavElement {

}

export interface DoctorGeneralScreenProps 
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {
  
}

export interface PatientGeneralScreenProps 
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {

}

export interface PatientQuestionnaireScreenProps
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {

}

export interface PatientAboutCovidScreenProps
  extends NavElement<ENavTypes.DRAWER_ELEMENT> {
  
}