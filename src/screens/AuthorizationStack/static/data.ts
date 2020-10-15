import { ListPickerValue } from "../../../components/form-components/types"
import { EAccountTypes } from "../../../config/enums/enum.account.types"
import { ESexTypes } from "../../../config/enums/enum.sex.types"
import { ELivingConditions } from "../../../config/enums/enum.living-conditions.types"

export const AccountTypes = {
  types: [EAccountTypes.Doctor, EAccountTypes.Patient],
  get values() {
    return this.types.map((value, index) => ({
      value, index
    }))
  } 
}

export const SexTypes = {
  types: [ESexTypes.Male, ESexTypes.Female],
  get values() {
    return this.types.map((value, index) => ({
      value, index
    }))
  }
}

export const LivingConditionsTypes = {
  types: [ELivingConditions.ByYourself, ELivingConditions.WithFamily],
  get values() {
    return this.types.map((value, index) => ({
      value, index
    }))
  }
}

export const specializationListValue: ListPickerValue[] = [
  { 
    title: 'Family doctor',
    slug: 'family-doctor'
  },
  { 
    title: 'Infectious disease specialist',
    slug: 'infectios-doctor'
  },
  { 
    title: 'Pediatrician',
    slug: 'pediatrician-doctor'
  },
  { 
    title: 'Therapist',
    slug: 'therapist-doctor'
  },
]