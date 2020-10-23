import { PatientEntity } from "../../../types/entities/patient"

export interface PatientItemProps {
  patientData: PatientEntity,
  index?: number,
  onPress: (patient: PatientEntity) => void
}