import { QuestionnaireStoreActions, QuestionnaireStoreState } from "../storeHooks/types";

export interface RegDoctorFormProps {
  values: QuestionnaireStoreState
  actions: QuestionnaireStoreActions
  props: any
  onValidPress: () => void
}