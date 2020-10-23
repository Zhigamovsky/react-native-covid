import { GroupEntity } from "../../types/entities/common"
import { EGroupKeys } from "../enums/enum.group-keys"

type DSGroupKeys = {
  [key in EGroupKeys]: GroupEntity
}

export const DSGroupKeys: DSGroupKeys = {
  [EGroupKeys.Сontact]: {
    _id: 'group-key-id-1',
    key: EGroupKeys.Сontact,
    title: '#2 - Contact group',
    style: {
      fontColor: '#353535',
      backgroundColor: '#ffc966'
    }
  },
  [EGroupKeys.Attention]: {
    _id: 'group-key-id-2',
    key: EGroupKeys.Attention,
    title: '#3 - Group of increased attention',
    style: {
      fontColor: '#353535',
      backgroundColor: '#ffc6c4'
    }
  },
  [EGroupKeys.General]: {
    _id: 'group-key-id-3',
    key: EGroupKeys.General,
    title: '#1 - General group',
    style: {
      fontColor: '#353535',
      backgroundColor: 'lightgreen'
    }
  }
}