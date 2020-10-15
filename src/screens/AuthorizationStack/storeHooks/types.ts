import { ListPickerValue } from "../../../components/form-components/types"
import { EAccountTypes } from "../../../config/enums/enum.account.types"
import { LivingConditionsTypes, SexTypes } from "../static/data"

export interface UseStore<STATE = any, ACTIONS = any, PROPS = any>{
  (props: PROPS): [STATE, ACTIONS, PROPS]
}

// export 

/** --- UseAuthStore --- */

export interface UseAuthStore 
  extends UseStore<AuthStoreState, AuthStoreActions, AuthStoreProps>{
}

export interface AuthStoreState {
  login: string,
  password: string
}

export interface AuthStoreActions {
  changeLogin: (v: string) => void
  changePassword: (v: string) => void
  clear: () => void
}

export interface AuthStoreProps {
  accountType: EAccountTypes
}

/** -/- UseAuthStore -/- */
/** --- UseDoctorRegStore --- */

export interface UseDoctorRegStore 
  extends UseStore<DoctorRegStoreState, DoctorRegStoreActions> {
  
}

export interface DoctorRegStoreState {
  fullname: string,
  placeOfWork: string,
  specialization: ListPickerValue | null,
  diplomaNumber: string,
  certificateNumber: string,
  login: string,
  password: string,
  repeatPassword: string
}

export interface DoctorRegStoreActions {
  changeFullname: (v: string) => void,
  changePlaceOfWork: (v: string) => void,
  changeSpecialization: (v: ListPickerValue | null) => void,
  changeDiplomaNumber: (v: string) => void,
  changeCertificateNumber: (v: string) => void,
  changeLogin: (v: string) => void,
  changePassword: (v: string) => void,
  changeRepeatPassword: (v: string) => void,
  clear: () => void
}

/** -/- UseDoctorRegStore -/- */
/** --- UsePatientRegStore --- */

export interface UsePatientRegStore 
  extends UseStore<PatientRegStoreState, PatientRegStoreActions> {
  
}

export interface PatientRegStoreState {
  fullname: string,
  sex: typeof SexTypes.values[number],
  birthdate: Date | null,
  address: string,
  phone: string,
  doctorID: string,
  placeOfWork: {
    value: boolean,
    subValue: string
  },
  livingConditions: typeof LivingConditionsTypes.values[number],
  abroadInformation: {
    value: boolean,
    country: string,
    arrivalDate: Date | null
  },
  respiratoryDisease: boolean,
  contactWithCovid: boolean,
  probableContactWithCovid: boolean,
  haveFamilySymptoms: boolean,
  haveRiskGroup: boolean,
  haveCovid: {
    value: boolean,
    days: string
  },
  illnessLungs: boolean,
  illnessRenal: boolean,
  illnessImmune: boolean,
  illnessAllergic: boolean,
  illnessAutoimmune: boolean,
  illnessDiabetes: boolean,
  illnessPregnancy: boolean,
  
  login: string,
  password: string,
  repeatPassword: string
}

export interface PatientRegStoreActions {
  changeFullname: (v: string) => void,
  changeSexType: (v: typeof SexTypes.values[number]) => void,
  changeBirthDate: (v: Date | null) => void,
  changeAddress: (v: string) => void,
  changePhone: (v: string) => void,
  changeDoctorID: (v: string) => void,
  togglePlaceOfWork: (v: boolean) => void,
  changePlaceOfWork: (v: string) => void,
  changeLivingConditionsType: (v: typeof LivingConditionsTypes.values[number]) => void,
  toggleAbroadInformation: (v: boolean) => void,
  changeAbroadCountry: (v: string) => void,
  changeAbroadDate: (v: Date | null) => void,
  toggleRespiratoryDisease: (v: boolean) => void,
  toggleContactWithCovid: (v: boolean) => void,
  toggleProbableContactWithCovid: (v: boolean) => void,
  toggleHavingFamilySymptoms: (v: boolean) => void,
  toggleHavingRiscGroup: (v: boolean) => void,
  toggleHavingCovid: (v: boolean) => void,
  changeHavingCovidDays: (v: string) => void,
  toggleIllnessLungs: (v: boolean) => void,
  toggleIllnessRenal: (v: boolean) => void,
  toggleIllnessImmune: (v: boolean) => void,
  toggleIllnessAllergic: (v: boolean) => void,
  toggleIllnessAutoimmune: (v: boolean) => void,
  toggleIllnessDiabetes: (v: boolean) => void,
  toggleIllnessPregnancy: (v: boolean) => void,
  changeLogin: (v: string) => void,
  changePassword: (v: string) => void,
  changeRepeatPassword: (v: string) => void,
  clear: () => void
}

/** -/- UsePatientRegStore -/- */