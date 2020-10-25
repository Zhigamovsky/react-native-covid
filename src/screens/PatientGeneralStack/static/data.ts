import { ListPickerValue } from "../../../components/form-components/types"
import { ECoughtTypes } from "../../../config/enums/enum.cough-types"
import { EHealthStatuses } from "../../../config/enums/enum.health-statuses"

export const HealthStatusTypes = {
  types: [EHealthStatuses.Improving, EHealthStatuses.Steadily, EHealthStatuses.Deterioration],
  get values() {
    return this.types.map((value, index) => ({
    value, index
    }))
  }
}

export const CoughtTypes = {
  types: [ECoughtTypes.OrdinaryDry, ECoughtTypes.WithSputum],
  get values() {
    return this.types.map((value, index) => ({
      value, index
    }))
  }
}

export const increaseTempListValue: ListPickerValue[] = [
  { 
    title: '<38° C, easily controlled by antipyretics',
    slug: 'easy-controller-by-antipyretics'
  },
  { 
    title: '<38° C, difficult to control antipyretics',
    slug: 'difficult-controller-by-antipyretics'
  },
  { 
    title: '>38° C, not controlled by antipyretics',
    slug: 'uncontroller-by-antipyretics'
  },
]

export const dyspneaListValue: ListPickerValue[] = [
    { 
      title: 'During exercise',
      slug: 'dyspnea-at-exercise'
    },
    { 
      title: 'When moving around the house',
      slug: 'dyspnea-at-moving'
    },
    { 
      title: 'At rest',
      slug: 'dyspnea-at-rest'
    },
  ]