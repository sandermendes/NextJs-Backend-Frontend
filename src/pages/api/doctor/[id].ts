// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ptBR from "../../../locale/pt-BR.json"
import { getDoctor } from "../../../controller/doctor/get"
import { ResponseMessage } from "../../../types/general"
import { ResponseDoctor } from "../../../types/doctor"

export default async function doctorHandler (
    request: NextApiRequest,
    response: NextApiResponse<ResponseDoctor | ResponseMessage>
){
    // @ts-ignore
    if (['GET'].includes( request.method )) {
        response.status(200).json(
            await getDoctor( request )
        )
    } else {
        response.status(200).json({
            success: false,
            message: ptBR.General.notAllowed
        })
    }
}
