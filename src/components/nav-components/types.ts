import { DrawerContentComponentProps, DrawerContentOptions } from "@react-navigation/drawer";
import { EAccountTypes } from "../../config/enums/enum.account.types";

export interface DrawerItemIconSkeletonProps {
  source: any // require(path-to-image)
}

export interface DrawerContentItemProps {
  title: string,
  onPress: () => void,
  Icon: React.ReactElement,
  isDisable?: boolean
}

export interface DrawerContentProps 
  extends DrawerContentComponentProps<DrawerContentOptions>{
  accountType: EAccountTypes
}

export type CollectionItemsParams = {
  [Route in EAccountTypes]: {
    title: string,
    routePath: string,
    onPress: () => void,
    Icon: React.ReactElement
  }[]
}

export interface DrawerUserInformationProps {
  accountType: EAccountTypes
}