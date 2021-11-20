import { object, string, array, TypeOf } from 'yup'
import { SPECIALITY } from "../../../constants/speciality"
import ptBR from "../../../locale/pt-BR.json"

const ERROR_ALLFIELDS = ptBR.Doctor.errors.allFields
const ERROR_NAME = ptBR.Doctor.errors.name
const ERROR_MEDCERTID_NUMBERONLY = ptBR.Doctor.errors.medCertId.numberOnly
const ERROR_MEDCERTID_LENGTH = ptBR.Doctor.errors.medCertId.length
const ERROR_PHONE_NUMBERONLY = ptBR.Doctor.errors.phone.numberOnly
const ERROR_PHONE_LENGTH = ptBR.Doctor.errors.phone.length
const ERROR_MOBILEPHONE_NUMBERONLY = ptBR.Doctor.errors.mobilePhone.numberOnly
const ERROR_MOBILEPHONE_LENGTH = ptBR.Doctor.errors.mobilePhone.length
const ERROR_ZIPCODE_NUMBERONLY = ptBR.Doctor.errors.zipCode.numberOnly
const ERROR_ZIPCODE_LENGTH = ptBR.Doctor.errors.zipCode.length
const ERROR_SPECIALITY_LENGTH = ptBR.Doctor.errors.speciality.length

export const doctorSchema = object({
    name: string().required(
            ERROR_ALLFIELDS
        ).max( 120, ERROR_NAME ),
    medCertId: string().required(
            ERROR_ALLFIELDS
        )
        .matches(/^[0-9]+$/,
            ERROR_MEDCERTID_NUMBERONLY
        ).max(7, ERROR_MEDCERTID_LENGTH),
    phone: string().required(
            ERROR_ALLFIELDS
        )
        .matches(/^[0-9]+$/,
            ERROR_PHONE_NUMBERONLY
        )
        .min(11, ERROR_PHONE_LENGTH)
        .max(11, ERROR_PHONE_LENGTH),
    mobilePhone: string().required(
            ERROR_ALLFIELDS
        )
        .matches(/^[0-9]+$/,
            ERROR_MOBILEPHONE_NUMBERONLY
        )
        .min(11, ERROR_MOBILEPHONE_LENGTH)
        .max(11, ERROR_MOBILEPHONE_LENGTH),
    zipCode: string().required(
            ERROR_ALLFIELDS
        )
        .matches(/^[0-9]+$/,
            ERROR_ZIPCODE_NUMBERONLY
        )
        .min(8, ERROR_ZIPCODE_LENGTH)
        .max(8, ERROR_ZIPCODE_LENGTH),
    address: string().required(
        ERROR_ALLFIELDS
    ),
    number: string().required(
        ERROR_ALLFIELDS
    ),
    neighborhood: string().required(
        ERROR_ALLFIELDS
    ),
    city: string().required(
        ERROR_ALLFIELDS
    ),
    stateProvince: string().required(
        ERROR_ALLFIELDS
    ),
    speciality: array().required(
            ERROR_ALLFIELDS
        ).min(2, ERROR_SPECIALITY_LENGTH).of(
            string().required().oneOf(SPECIALITY)
        )
})

export type Doctor = TypeOf<typeof doctorSchema>