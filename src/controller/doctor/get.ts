import { NextApiRequest } from "next"
import { persistentGetDoctors, persistentGetDoctor } from "../../model/doctor/get"

export const getDoctors = async () => {
    return await persistentGetDoctors()
}

export const getDoctor = async (request: NextApiRequest) => {
    // @ts-ignore
    const id: number = request.query.id
    return await persistentGetDoctor(id)
}
