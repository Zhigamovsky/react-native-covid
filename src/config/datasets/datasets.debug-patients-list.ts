import { DoctorEntity } from "../../types/entities/doctor";
import { PatientEntity } from "../../types/entities/patient";
import { EGroupKeys } from "../enums/enum.group-keys";

export const $DSPatientsList: Array<PatientEntity> = [
  {
    _id: '1',
    fullname: 'Alex Anderson',
    groupKey: EGroupKeys.General,
    _birthdate: 18
  },
  {
    _id: '2',
    fullname: 'Michael Frappy',
    groupKey: EGroupKeys.Attention,
    _birthdate: 20
  },
  {
    _id: '3',
    fullname: 'Nikita Jollygolf',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 28
  },
  {
    _id: '4',
    fullname: 'Wesley Gibson',
    groupKey: EGroupKeys.General,
    _birthdate: 29
  },
  {
    _id: '5',
    fullname: 'Alexa Gibson',
    groupKey: EGroupKeys.General,
    _birthdate: 35
  },
  {
    _id: '6',
    fullname: 'Ramlow Raf',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 34
  },
  {
    _id: '7',
    fullname: 'Rafael Peterson',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 41
  },
  {
    _id: '8',
    fullname: 'Peter Parker',
    groupKey: EGroupKeys.Attention,
    _birthdate: 46
  },
  {
    _id: '9',
    fullname: 'Marlow Parker',
    groupKey: EGroupKeys.General,
    _birthdate: 18
  },
  {
    _id: '10',
    fullname: 'Eva Parker',
    groupKey: EGroupKeys.Attention,
    _birthdate: 20
  },
  {
    _id: '11',
    fullname: 'Alex Anderson 2',
    groupKey: EGroupKeys.General,
    _birthdate: 46
  },
  {
    _id: '12',
    fullname: 'Michael Frappy 2',
    groupKey: EGroupKeys.Attention,
    _birthdate: 46
  },
  {
    _id: '13',
    fullname: 'Nikita Jollygolf 2',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 27
  },
  {
    _id: '14',
    fullname: 'Wesley Gibson 2',
    groupKey: EGroupKeys.General,
    _birthdate: 39
  },
  {
    _id: '15',
    fullname: 'Alexa Gibson 2',
    groupKey: EGroupKeys.General,
    _birthdate: 38
  },
  {
    _id: '16',
    fullname: 'Ramlow Raf 2',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 42
  },
  {
    _id: '17',
    fullname: 'Rafael Peterson 2',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 46
  },
  {
    _id: '18',
    fullname: 'Peter Parker 2',
    groupKey: EGroupKeys.Attention,
    _birthdate: 28
  },
  {
    _id: '19',
    fullname: 'Marlow Parker 2',
    groupKey: EGroupKeys.General,
    _birthdate: 46
  },
  {
    _id: '20',
    fullname: 'Eva Parker 2',
    groupKey: EGroupKeys.Attention,
    _birthdate: 18
  },
  {
    _id: '21',
    fullname: 'Alex Anderson 3',
    groupKey: EGroupKeys.General,
    _birthdate: 24
  },
  {
    _id: '22',
    fullname: 'Michael Frappy 3',
    groupKey: EGroupKeys.Attention,
    _birthdate: 22
  },
  {
    _id: '23',
    fullname: 'Nikita Jollygolf 3',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 29
  },
  {
    _id: '24',
    fullname: 'Wesley Gibson 3',
    groupKey: EGroupKeys.General,
    _birthdate: 28
  },
  {
    _id: '25',
    fullname: 'Alexa Gibson 3',
    groupKey: EGroupKeys.General,
    _birthdate: 24
  },
  {
    _id: '26',
    fullname: 'Ramlow Raf 3',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 39
  },
  {
    _id: '27',
    fullname: 'Rafael Peterson 3',
    groupKey: EGroupKeys.Сontact,
    _birthdate: 31
  },
  {
    _id: '28',
    fullname: 'Peter Parker 3',
    groupKey: EGroupKeys.Attention,
    _birthdate: 34
  },
  {
    _id: '29',
    fullname: 'Marlow Parker 3',
    groupKey: EGroupKeys.General,
    _birthdate: 41
  },
  {
    _id: '30',
    fullname: 'Eva Parker 3',
    groupKey: EGroupKeys.Attention,
    _birthdate: 12
  }
]

export const $DSDoctorsList: Array<DoctorEntity> = [
  {
    _id: '1',
    fullname: 'D. Marlow Parker',
    specialization: 'Pediatrician',
    placeOfWork: 'Sumy clinical hospital №666',
    certificateNumber: '#1231232'
  }
]