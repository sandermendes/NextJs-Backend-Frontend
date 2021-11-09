import type { NextApiRequest } from 'next'
import { persistentAddDoctor } from "../../model/doctor/add"

export const addDoctor = async ( request: NextApiRequest ) => {

    const name: string = request.body.name
    const medCertId: number = request.body.medCertId
    const phone: number = request.body.phone
    const mobilePhone: number = request.body.mobilePhone
    const zipCode: number = request.body.zipCode
    const speciality: string[] = request.body.speciality

    return await persistentAddDoctor({ name, medCertId, phone, mobilePhone, zipCode, speciality })
}