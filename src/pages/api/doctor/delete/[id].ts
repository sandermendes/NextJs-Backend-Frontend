// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ptBR from "../../../../locale/pt-BR.json"
import { deleteDoctor } from "../../../../controller/doctor/delete"
import { ResponseMessage } from "../../../../types/general"

export default async function doctorHandler (
    request: NextApiRequest,
    response: NextApiResponse<ResponseMessage>
){
    // @ts-ignore
    if (['DELETE'].includes( request.method )) {
        // @ts-ignore
        const id: number = request.query.id
        response.status(200).json(
            await deleteDoctor( id )
        )
    } else {
        response.status(200).json({
            success: false,
            message: ptBR.General.notAllowed
        })
    }
}
