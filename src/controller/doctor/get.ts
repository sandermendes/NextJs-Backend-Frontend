import { NextApiRequest } from "next";
import { persistentGetDoctors, persistentGetDoctor } from "../../model/doctor/get";
import { Op } from "sequelize";

export const getDoctors = async ( search: any = {} ) => {
    let fields: any = {}
    if ( search ) {
        if ( Object(search).hasOwnProperty('nome') ) {
            fields = {
                // ...fields,
                name: {
                    [Op.like]: '%'+search['nome']+'%'
                }
            }
        } else if ( Object(search).hasOwnProperty('crm') ) {
            fields = {
                // ...fields,
                medCertId: {
                    [Op.eq]: search['crm']
                }
            }
        } else if ( Object(search).hasOwnProperty('telefone') ) {
            fields = {
                // ...fields,
                phone: {
                    [Op.eq]: search['telefone']
                }
            }
        } else if ( Object(search).hasOwnProperty('celular') ) {
            fields = {
                // ...fields,
                mobilePhone: {
                    [Op.eq]: search['celular']
                }
            }
        } else if ( Object(search).hasOwnProperty('cep') ) {
            fields = {
                // ...fields,
                zipCode: {
                    [Op.eq]: search['cep']
                }
            }
        }
    }
    return await persistentGetDoctors( fields )
}

export const getDoctor = async (request: NextApiRequest) => {
    const id: number = Number(request.query.id)
    return await persistentGetDoctor(id)
}
