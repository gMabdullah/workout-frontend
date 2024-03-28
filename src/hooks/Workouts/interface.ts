export interface IappointmentDetails {
  fullName: string;
  contact: string;
  dateTime?: string; // Assuming this is a string representation of a date
  date: string;
  time: string;
}

export interface IpatientDetails {
  patientFullName: string;
  dateOfBirth: string; // Assuming this is a string representation of a date
  email: string;
  phoneNumber: string;
  address: string;
  occupation: string;
  emergencyContact: string;
  pastZipCode: string;
  city: string;
  zipCode: string;
  smoking: "YES" | "NO"; // Assuming this is a boolean value
  drugs: "YES" | "NO"; // Assuming this is a boolean value
  drinking: "YES" | "NO"; // Assuming this is a boolean value
}

export interface ImedicationDetails {
  currentPrescription: string;
  currentPrescriptionDosage: string;
  oTCMedications: string;
  oTCMedicationsDosage: string;
  supplementsAndHerbs: string;
  supplementsAndHerbsDosage: string;
  allergies: string;
  preferredPharmacy: string;
}

export interface IinsuranceDetails {
  insuranceProvider: string;
  insuranceId: string;
  insuranceDateOfBirth: string; // Assuming this is a string representation of a date
  policyHolder: string;
  group: string;
  otherInsuredPolicyOrGroupNumber: string;
  otherInsuredName: string;
  otherInsuredPolicyOrNumber: string;
}

export interface IAppointment {
  appointmentDetails: IappointmentDetails;
  patientDetails: IpatientDetails;
  medicationDetails: ImedicationDetails;
  insuranceDetails: IinsuranceDetails;
  visitDetails: IVisitDetails;
}

export interface IVisitDetails {
  bloodPressure: string;
  chiefComplaint: string;
  heartRate: string;
  height: string;
  recentLabs: string;
  temperature: string;
  width: string;
  personForVisit: string;
  notesFromOtherPhysicians: string;
  familyHistory: string;
}
export interface IUpcommingVisits {
  patientName: string;
  isNew: string;
  contact: string;
  insurance: string;
  time: string;
  id: number;
  insuranceId?: string;
  patientFullName?: string;
}

export const initialAppointmentData: IAppointment = {
  appointmentDetails: {
    fullName: "",
    contact: "",
    time: "",
    date: "",
  },
  patientDetails: {
    patientFullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    zipCode: "",
    pastZipCode: "",
    address: "",
    occupation: "",
    city: "",
    emergencyContact: "",
    smoking: "NO",
    drugs: "NO",
    drinking: "NO",
  },
  medicationDetails: {
    currentPrescription: "",
    currentPrescriptionDosage: "",
    oTCMedications: "",
    oTCMedicationsDosage: "",
    supplementsAndHerbs: "",
    supplementsAndHerbsDosage: "",
    allergies: "",
    preferredPharmacy: "",
  },
  insuranceDetails: {
    insuranceProvider: "",
    insuranceId: "",
    insuranceDateOfBirth: "",
    otherInsuredName: "",
    policyHolder: "",
    group: "",
    otherInsuredPolicyOrGroupNumber: "",
    otherInsuredPolicyOrNumber: "",
  },
  visitDetails: {
    bloodPressure: "",
    chiefComplaint: "",
    heartRate: "",
    height: "",
    recentLabs: "",
    temperature: "",
    width: "",
    personForVisit: "",
    notesFromOtherPhysicians: "",
    familyHistory: "",
  },
};

export const initialVisitDetails: IVisitDetails = {
  bloodPressure: "",
  chiefComplaint: "",
  heartRate: "",
  height: "",
  recentLabs: "",
  temperature: "",
  width: "",
  personForVisit: "",
  notesFromOtherPhysicians: "",
  familyHistory: "",
};
export interface IAppointmentSummary {
  id: number;
  fullName?: string;
  contact?: string;
  dateTime?: string;
  patientFullName?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  occupation?: string;
  emergencyContact?: string;
  smoking?: "YES" | "NO";
  drugs?: "YES" | "NO";
  drinking?: "YES" | "NO";
  personForVisit?: string;
  chiefComplaint?: string;
  bloodPressure?: string;
  heartRate?: string;
  temperature?: string;
  familyHistory?: string;
  height?: string;
  width?: string;
  recentLabs?: string;
  notesFromOtherPhysicians?: string;
  currentPrescription?: string;
  currentPrescriptionDosage?: string;
  oTCMedications?: string;
  oTCMedicationsDosage?: string;
  supplementsAndHerbs?: string;
  supplementsAndHerbsDosage?: string;
  allergies?: string;
  preferredPharmacy?: string;
  insuranceProvider?: string;
  insuranceId?: string;
  insuranceDateOfBirth?: string;
  policyHolder?: string;
  group?: string;
  status?: string;
  summary?: string;
  isNew?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface OriginalObject {
  id: number;
  fullName?: string;
  contact?: string;
  dateTime?: string;
  patientFullName?: string;
  dateOfBirth?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  occupation?: string;
  emergencyContact?: string;
  smoking?: string;
  drugs?: string;
  drinking?: string;
  personForVisit?: string;
  chiefComplaint?: string;
  bloodPressure?: string;
  heartRate?: string;
  temperature?: string;
  familyHistory?: string;
  height?: string;
  width?: string;
  recentLabs?: string;
  notesFromOtherPhysicians?: string;
  currentPrescription?: string;
  currentPrescriptionDosage?: string;
  oTCMedications?: string;
  oTCMedicationsDosage?: string;
  supplementsAndHerbs?: string;
  supplementsAndHerbsDosage?: string;
  allergies?: string;
  preferredPharmacy?: string;
  insuranceProvider?: string;
  insuranceId?: string;
  insuranceDateOfBirth?: string;
  policyHolder?: string;
  group?: string;
  status?: string;
  summary?: string;
  isNew?: boolean;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  user?: {
    id: number;
    name?: string;
    email?: string;
    password?: string;
    isVerified?: boolean;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
  };
}
