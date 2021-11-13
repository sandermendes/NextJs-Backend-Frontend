import ptBR from "../../locale/pt-BR.json"
import { Doctor } from "../schemas/doctor"

export const persistentDeleteDoctor = async (id: number) => {

    try {
        const doctorDeleted = await Doctor.update({ deleted: true }, {
            where: {
                id: id,
                deleted: false
            }
        })
        if (doctorDeleted[0] > 0) {
            return {
                success: true,
                message: ptBR.General.success.deleted
            }
        }
        return {
            success: true,
            message: ptBR.General.noAction
        }
    } catch (e) {
        return{
            success: false,
            message: ptBR.General.error.deleted
        }
    }

}