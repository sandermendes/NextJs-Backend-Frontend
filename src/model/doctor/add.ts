import ptBR from "../../locale/pt-BR.json"
import { Doctor } from "../schemas/doctor"

type doctorFields = {
    name: string
    medCertId: number
    phone: number
    mobilePhone: number
    zipCode: number
    speciality: string[]
}

export const persistentAddDoctor = async (fields: doctorFields) => {

    try {
        await Doctor.sync()
        const doctorNew = await Doctor.create({
            ...fields,
            speciality: fields.speciality.toString()
        })
        return {
            success: true,
            message: ptBR.General.success.added,
            newData: doctorNew
        }
    } catch (error) {
        return{
            success: false,
            message: ptBR.General.error.added
        }
    }

}