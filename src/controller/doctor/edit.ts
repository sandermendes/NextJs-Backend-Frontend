import type { NextApiRequest } from 'next'
import { persistentEditDoctor } from "../../model/doctor/edit"
import {PayloadDoctor} from "../../types/doctor";

export const editDoctor = async ( id: number, request: NextApiRequest ) => {

    const fields: PayloadDoctor = request.body

    return await persistentEditDoctor( id, fields)
}