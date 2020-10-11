import { DrawerNavigationProp } from "@react-navigation/drawer"
import { StackNavigationProp } from "@react-navigation/stack"
import { ScrollViewProps, StyleProp, ViewStyle } from "react-native"
import { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view"

export interface HeaderPageProps {
  title: string,
  navigation: StackNavigationProp<any> | DrawerNavigationProp<any>,
  enableBackButton?: boolean,
  enableMenuButton?: boolean,
  ContentCenter?: React.ReactElement,
  containerStyle?: StyleProp<ViewStyle>
}

interface ContainerPageDefaultProps {
  scrollable?: boolean,
  background?: string,
  containerStyle?: ViewStyle,
  scrollviewStyle?: ViewStyle,
  containerScrollviewStyle?: ViewStyle,
  headerProps?: HeaderPageProps
}

export interface ContainerPageProps 
  extends ContainerPageDefaultProps {
    
}

export interface AvoidingKeyboardProps {
  scrollviewProps?: ScrollViewProps,
  avoidingProps?: KeyboardAwareScrollViewProps
}