import { ListPickerValue } from "../../../components/form-components/types"
import { CoughtTypes, HealthStatusTypes } from "../static/data"

export interface UseStore<STATE = any, ACTIONS = any, PROPS = any>{
  (props: PROPS): [STATE, ACTIONS, PROPS]
}

interface VoidAction<T> {
  (v: T): void
}

export interface UseQuestionnaireStore
  extends UseStore<QuestionnaireStoreState, QuestionnaireStoreActions> {
  
}

export interface QuestionnaireStoreState {
  healthStatus: typeof HealthStatusTypes.values[number],
  increaseTemp: {
    value: boolean,
    subValue: ListPickerValue | null
  },
  haveFatigue: boolean,
  haveNasalCongestion: boolean,
  haveSneeze: boolean,
  haveSoreThroat: boolean,
  haveHeadache: boolean,
  haveMusclePain: boolean,
  haveRednessEyes: boolean,
  cough: {
    value: boolean,
    subValue: typeof CoughtTypes.values[number],
  },
  breathing: {
    difficultyBreathing: boolean,
    isDyspnea: boolean,
    dyspnea: ListPickerValue | null
  },
  haveChestPain: boolean,
  haveHemoptysis: boolean,
  haveColdOrPaleSkin: boolean,
  nausea: boolean,
  haveVomitingOrDiarrhea: boolean,
  haveDisturbanceOfConsciousness: boolean,
  haveLethargyMalaise: boolean,
  haveReductionOfUrination: boolean,
  difficultToWakeUp: boolean,
  occipitalMuscleRigidity: boolean,
  rashOnTheBody: boolean,
  temperature: string,
  pulse: string,
  bloodPressure: {
    left: string,
    right: string
  },
  respiratoryRate: string
}

export interface QuestionnaireStoreActions {
  changeHealthStatus: VoidAction<typeof HealthStatusTypes.values[number]>,
  toggleIncreaseTemp: VoidAction<boolean>,
  changeIncreasetempSubValue: VoidAction<ListPickerValue | null>,
  toggleFatigue: VoidAction<boolean>,
  toggleNasalCongestion: VoidAction<boolean>,
  toggleSneeze: VoidAction<boolean>,
  toggleSoreThroat: VoidAction<boolean>,
  toggleHeadache: VoidAction<boolean>,
  toggleMusclePain: VoidAction<boolean>,
  toggleRednessEyes: VoidAction<boolean>,
  toggleCough: VoidAction<boolean>,
  toggleCoughSubValue: VoidAction<typeof CoughtTypes.values[number]>,
  toggleBreathing: VoidAction<boolean>,
  toggleDyspnea: VoidAction<boolean>,
  changeBreathingDyspnea: VoidAction<ListPickerValue | null>,
  toggleChestPain: VoidAction<boolean>,
  toggleHemoptysis: VoidAction<boolean>,
  toggleColdOrPaleSkin: VoidAction<boolean>,
  toggleNausea: VoidAction<boolean>,
  toggleVomitingOrDiarrhea: VoidAction<boolean>,
  toggleDisturbanceOfConsciousness: VoidAction<boolean>,
  toggleLethargyMalaise: VoidAction<boolean>,
  toggleReductionOfUrination: VoidAction<boolean>,
  toggleDifficultToWakeUp: VoidAction<boolean>,
  toggleOccipitalMuscleRigidity: VoidAction<boolean>,
  toggleRashOnTheBody: VoidAction<boolean>,
  changeTemperature: VoidAction<string>,
  changePulse: VoidAction<string>,
  changeLeftBloodPressure: VoidAction<string>,
  changeRightBloodPressure: VoidAction<string>,
  changeRespiratoryRate: VoidAction<string>
}