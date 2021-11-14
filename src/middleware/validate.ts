import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object"
import ptBR from "../locale/pt-BR.json"

export const validate = ( schema: OptionalObjectSchema<ObjectShape>, handler: NextApiHandler ) => {

    return async (request: NextApiRequest, response: NextApiResponse) => {
        // @ts-ignore
        if (['POST', 'PUT'].includes( request.method )) {
            try {
                request.body = await schema.camelCase().validate(
                    request.body,
                    {
                        stripUnknown: true,
                        abortEarly: false,
                    }
                )
                await handler(request, response)
            } catch (error) {
                const returnMessage = {
                    success: false,
                    message: (request.method === 'PUT') ? ptBR.General.error.updated : ptBR.General.error.added,
                    info: error
                }
                return response.status(200).json( returnMessage )
            }
        } else {
            return response.status(405).json({
                success: false,
                message: ptBR.General.notAllowed
            })
        }
    }

}