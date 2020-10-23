import { EGroupKeys } from "../../config/enums/enum.group-keys"

export interface PatientEntity {
  _id: string,
  fullname: string,
  _birthdate: number, //Date,
  groupKey: EGroupKeys
}