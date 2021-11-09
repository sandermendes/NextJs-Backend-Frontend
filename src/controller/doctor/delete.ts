import { persistentDeleteDoctor } from "../../model/doctor/delete"

export const deleteDoctor = async ( id: number ) => {

    return await persistentDeleteDoctor(id)

}