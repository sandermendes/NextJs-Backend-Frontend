// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ptBR from "../../../locale/pt-BR.json"
import { getDoctors } from "../../../controller/doctor/get"
import { ResponseMessage } from "../../../types/general"
import { ResponseDoctors } from "../../../types/doctor"

export default async function handler (
    request: NextApiRequest,
    response: NextApiResponse<ResponseDoctors | ResponseMessage | null>
){
    // @ts-ignore
    if (['GET'].includes( request.method )) {
        response.status(200).json(
            await getDoctors()
        )
    } else {
        response.status(200).json({
            success: false,
            message: ptBR.General.notAllowed
        })
    }
}
