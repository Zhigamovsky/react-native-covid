import { EGroupKeys } from "../../config/enums/enum.group-keys"

export interface GroupEntity {
  _id: string,
  key: EGroupKeys,
  title: string,
  style: {
    fontColor: string,
    backgroundColor: string,
  }
}