// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ptBR from "../../../../locale/pt-BR.json"
import { ResponseAddress } from "../../../../types/address"
import { ResponseMessage } from "../../../../types/general"

const getZipCode = async (zipCode: string) => {
    const serviceUrl = 'https://viacep.com.br/ws'

    const res = await fetch(`${serviceUrl}/${zipCode}/json/`)
    return await res.json()
}

export default async function handler (
    request: NextApiRequest,
    response: NextApiResponse<ResponseAddress | ResponseMessage | null>
){
    if (['GET'].includes( <string>request.method )) {
        if (Object(request.query).hasOwnProperty('zip')) {
            const zipCode: string = request.query.zip.toString()
            response.status(200).json(
                await getZipCode( <string>zipCode )
            )
        }
    } else {
        response.status(200).json({
            success: false,
            message: ptBR.General.notAllowed
        })
    }
}
