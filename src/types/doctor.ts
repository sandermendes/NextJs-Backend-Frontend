export type PayloadDoctor = {
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    speciality: string[]
}

export type ResponseDoctors = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    speciality: string[]
}[]

export type ResponseDoctor = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    speciality: string[]
}
