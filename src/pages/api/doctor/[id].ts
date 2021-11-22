// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ptBR from "../../../locale/pt-BR.json"
import { getDoctor, getDoctors } from "../../../controller/doctor/get"
import { ResponseMessage } from "../../../types/general"
import { ResponseDoctor } from "../../../types/doctor"

const doctorHandler = async ( request: NextApiRequest, response: NextApiResponse<ResponseDoctor | ResponseMessage> ) => {
    // @ts-ignore
    if (['GET'].includes( request.method )) {
        /**
         * Search condition, with multiples fields
         */
        if (request.query.id === 'search') {
            let fields: any = null
            Object.keys(request.query).map((params: any) => {
                if (params !== "id") {
                    fields = {
                        ...fields,
                        [params]: request.query[params]
                    }
                }
            })
            if (fields) {
                response.status(200).json(
                    await getDoctors(fields)
                )
            } else {
                response.status(404).json({
                    success: false,
                    message: ptBR.General.errorParam
                })
            }

        } else {
            /**
             * Simple search
             */
            response.status(200).json(
                await getDoctor(request)
            )
        }
    } else {
        response.status(200).json({
            success: false,
            message: ptBR.General.notAllowed
        })
    }
}

export default doctorHandler