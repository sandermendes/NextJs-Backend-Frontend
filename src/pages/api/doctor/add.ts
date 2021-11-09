import type { NextApiRequest, NextApiResponse } from 'next'
import { addDoctor } from '../../../controller/doctor/add'
import { validate } from "../../../middleware/validate"
import { doctorSchema } from "../../../utils/validation/schema/doctor"

const handler = async ( request: NextApiRequest, response: NextApiResponse ) => {
    response.status(200).json(
        await addDoctor( request )
    )
}

export default validate( doctorSchema, handler )