import { 
  AuthStoreActions, AuthStoreProps, AuthStoreState,
  DoctorRegStoreActions, DoctorRegStoreState, 
  PatientRegStoreActions, PatientRegStoreState
} from '../storeHooks/types'

export interface AuthFormProps {
  values: AuthStoreState
  actions: AuthStoreActions
  props: AuthStoreProps
  onValidPress: () => void
}

export interface RegDoctorFormProps {
  values: DoctorRegStoreState
  actions: DoctorRegStoreActions
  props: any
  onValidPress: () => void
}

export interface RegPatientFormProps {
  values: PatientRegStoreState
  actions: PatientRegStoreActions
  props: any
  onValidPress: () => void
}