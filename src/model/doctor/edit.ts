import ptBR from "../../locale/pt-BR.json"
import { Doctor } from "../schemas/doctor"
import { PayloadDoctor } from "../../types/doctor"

export const persistentEditDoctor = async (id: number, fields: PayloadDoctor) => {

    try {
        await Doctor.sync()
        const doctorUpdated = await Doctor.update({
            ...fields,
            speciality: fields.speciality.toString()
        }, {
            where: {
                id: id
            }
        })
        if (doctorUpdated) {
            return {
                success: true,
                message: ptBR.General.success.updated
            }
        }
        return {
            success: true,
            message: ptBR.General.noAction
        }
    } catch (e) {
        return{
            success: false,
            message: ptBR.General.error.updated
        }
    }

}