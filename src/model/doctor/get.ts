import ptBR from "../../locale/pt-BR.json"
import { Doctor } from "../schemas/doctor"

export const persistentGetDoctors = async () => {

    try {
        // return await Doctor.findAll()
        // return await Doctor.findAll({
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
        // return {
        //     success: true,
        //     message: ptBR.General.noData
        // }
    } catch (e) {
        return{
            success: false,
            message: ptBR.General.internal
        }
    }

}

export const persistentGetDoctor = async (id: number | string[]) => {

    try {
        // return await Doctor.findOne({
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
        // return {
        //     success: true,
        //     message: ptBR.General.noData
        // }
    } catch (e) {
        return {
            success: false,
            message: ptBR.General.internal
        }
    }

}

