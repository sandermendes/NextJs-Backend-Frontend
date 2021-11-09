import { NextPage } from "next";
import React, { useState } from 'react';
import { Main } from "../components/main";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { MaintenanceForm } from "../components/maintenanceForm";

type Doctor = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    speciality: string[]
}

// @ts-ignore
const Doctor: NextPage<Doctor> = ({ getDoctor }) => {
    const [doctor, setDoctor] = useState( getDoctor )

    return (
        <Main>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                border: '1px solid #0a0a0a',
                boxShadow: 6,
                borderRadius: 4,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Editar Médico
                </Typography>
                <MaintenanceForm formType="edit" doctors={ doctor } setDoctors={ setDoctor } />
            </Box>
        </Main>
    )
}

// @ts-ignore
Doctor.getInitialProps = async ({ query }) => {
    const res = await fetch(`${process.env.MAIN_URL}/api/doctor/${query.id}`)
    const doctor = await res.json()

    return {
        getDoctor: {
            ...doctor,
            speciality: doctor.speciality.split(',')
        }
    }
}



export default Doctor
