import ptBR from "../../locale/pt-BR.json"
import { Doctor } from "../schemas/doctor"

export const persistentGetDoctors = async () => {

    try {
        const doctorAll = await Doctor.findAll({
            where: {
                deleted: false
            }
        })
        if (Array.isArray(doctorAll) && doctorAll.length > 0) {
            return doctorAll.map((doctor) => {
                return {
                    ...doctor.dataValues,
                    speciality: doctor.speciality.split(',')
                }
            })
        }
        return doctorAll
    } catch (e) {
        return{
            success: false,
            message: ptBR.General.internal
        }
    }

}

export const persistentGetDoctor = async (id: number | string[]) => {

    try {
        const doctorOne = await Doctor.findOne({
            where: {
                id: id,
                deleted: false
            }
        })
        if (doctorOne) {
            return doctorOne
        }
        return {}
    } catch (e) {
        return {
            success: false,
            message: ptBR.General.internal
        }
    }

}

