import { EAccountTypes } from "../../../config/enums/enum.account.types"

export const AccountTypes = {
  types: [EAccountTypes.Doctor, EAccountTypes.Patient],
  get values() {
    return this.types.map((value, index) => ({
      value, index
    }))
  } 
}