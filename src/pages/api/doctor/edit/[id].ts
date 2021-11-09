// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ptBR from "../../../../locale/pt-BR.json"
import { editDoctor } from "../../../../controller/doctor/edit"
import { validate } from "../../../../middleware/validate"
import { doctorSchema } from "../../../../utils/validation/schema/doctor"
import { ResponseMessage } from "../../../../types/general"

const doctorHandler = async (
    request: NextApiRequest,
    response: NextApiResponse<ResponseMessage>
) => {
    // @ts-ignore
    if (['PUT'].includes( request.method )) {
        // @ts-ignore
        const id: number = request.query.id
        response.status(200).json(
            await editDoctor( id, request )
        )
    } else {
        response.status(200).json({
            success: false,
            message: ptBR.General.notAllowed
        })
    }
}

export default validate( doctorSchema, doctorHandler )