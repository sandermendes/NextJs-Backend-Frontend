export type PayloadDoctor = {
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    address: string,
    number: string,
    neighborhood: string,
    city: string,
    stateProvince: string,
    speciality: string[]
}

export type ResponseDoctors = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    address: string,
    number: string,
    neighborhood: string,
    city: string,
    stateProvince: string,
    speciality: string[]
}[]

export type ResponseDoctor = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    address: string,
    number: string,
    neighborhood: string,
    city: string,
    stateProvince: string,
    speciality: string[]
}
