import React, { useState, FunctionComponent } from 'react';
import { NextPage } from "next";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {
    Avatar, Card, CardContent, CardHeader, Chip, Divider, Fab, Grid, IconButton, List, ListItem, ListItemAvatar,
    Modal, Stack, Typography
} from "@mui/material";
import { Add as AddIcon, Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import { MaintenanceForm } from "./components/maintenanceForm";
import {Message} from "./components/message";

type Doctors = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    speciality: string[]
}

type ModalProps = {
    open: boolean
    handleClose: any
    doctors: Doctors
    setDoctors: any
}

type ListFieldProps = {
    label: string
    data: any
}

const ListField: FunctionComponent<ListFieldProps> = ({ label, data }) => {
    return (
        <Grid container direction="column">
            <Typography
                sx={{display: 'inline'}}
                component="span"
                variant="subtitle2"
                color="text.primary"
            >
                { label }
            </Typography>
            <Typography
                sx={{display: 'inline'}}
                component="span"
                variant="body2"
                color="text.secondary"
            >
                { data }
            </Typography>
        </Grid>
    )
}

const ListFieldChip: FunctionComponent<ListFieldProps> = ({ label, data }) => {
    const chipData = Array.isArray(data) ? data : data.split(',')
    return (
        <Grid container direction="column" spacing={1}>
            <Grid item>
                <Typography
                    sx={{display: 'inline'}}
                    component="span"
                    variant="subtitle2"
                    color="text.primary"
                >
                    { label }
                </Typography>
            </Grid>
            <Grid item>
                <Stack direction="row" spacing={1}>
                {chipData.map((item: any, index: number) =>
                    <Chip key={ index } label={ item } variant="outlined" />
                )}
                </Stack>
            </Grid>
        </Grid>
    )
}

const ModalAdd: FunctionComponent<ModalProps> = ({ open, handleClose, doctors, setDoctors }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                // border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Adicionar Médico
                </Typography>
                <MaintenanceForm formType="add" doctors={doctors} setDoctors={setDoctors}/>
            </Box>
        </Modal>
    )
}

// @ts-ignore
const Index: NextPage<Doctors> = ({ getDoctors }) => {
    const [doctors, setDoctors] = useState(getDoctors)
    const [open, setOpen] = useState(false)
    const [openInfo, setOpenInfo] = useState(false);
    const [infoMessage, setInfoMessage] = useState({});

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const deleteItem = async ( doctorDelete: any ) => {
        const res = await fetch(
            `${process.env.MAIN_URL}/api/doctor/delete/${doctorDelete.id}`,
            { method: 'DELETE' }
        )
        const result = await res.json()
        if (result.success) {
            const temp = doctors.filter((doctor: any) => {
                return doctor.id !== doctorDelete.id
            })
            setDoctors( temp )
            setOpenInfo(true);
            setInfoMessage( result );
        } else {
            setOpenInfo(true);
            setInfoMessage( result );
        }
    }

    return (
        <Container maxWidth="sm" style={{ backgroundColor: '#E5E5E5', minHeight: '100vh', minWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Box sx={{my: 4, padding: 10, width: 800}}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', top: 25, position: 'relative' }}>
                <Fab color="primary" onClick={ handleOpen }>
                    <AddIcon/>
                </Fab>
                </div>
                <Card>
                    <CardHeader title="Médicos" />
                    <CardContent>
                        { (Array.isArray(doctors) && !doctors.length) && <div>Sem dados</div> }
                        {/*{ !Array.isArray(doctors) && <div>Sem dados</div> }*/}
                        {Array.isArray(doctors) && doctors &&
                        <List>
                            {doctors.map((doctor: Doctors, index: number) =>
                                <div key={index} style={{ margin: '10px 0' }}>
                                    <ListItem
                                        secondaryAction={
                                        <Grid container direction="column" spacing={3}>
                                            <Grid item>
                                                <IconButton
                                                    component="a"
                                                    href={`/doctor/${doctor.id}`}
                                                    color="primary"
                                                    edge="end" aria-label="edit"
                                                    style={{ marginRight: 10 }}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </Grid>
                                            <Grid item>
                                                <IconButton
                                                    color="warning"
                                                    edge="end" aria-label="delete"
                                                    onClick={() => deleteItem(doctor)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        }
                                    >
                                        <ListItemAvatar >
                                            <Avatar alt={doctor.name} src=""/>
                                        </ListItemAvatar>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item xs={12} >
                                                <Typography
                                                    component="span"
                                                    variant="h5"
                                                    color="text.primary"
                                                >
                                                    { doctor.name }
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container direction="row" spacing={3}>
                                                <Grid item >
                                                    <ListField label="CRM" data={ doctor.medCertId } />
                                                </Grid>
                                                <Grid item >
                                                    <ListField label="Telefone" data={ doctor.phone } />
                                                </Grid>
                                                <Grid item >
                                                    <ListField label="Celular" data={ doctor.mobilePhone } />
                                                </Grid>
                                                <Grid item >
                                                    <ListField label="CEP" data={ doctor.zipCode } />
                                                </Grid>
                                            </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <ListFieldChip label="Especialidade" data={ doctor.speciality } />
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    {(index < doctors.length - 1) && <Divider component="li"/>}
                                </div>
                            )}
                        </List>
                        }
                    </CardContent>
                </Card>
            </Box>
            <ModalAdd
                open={ open }
                handleClose={ handleClose }
                doctors={ doctors }
                setDoctors={ setDoctors }
            />
            <Message openInfo={ openInfo } setOpenInfo={ setOpenInfo } infoMessage={ infoMessage } />
        </Container>
    );
}

// @ts-ignore
Index.getInitialProps = async () => {
    const res = await fetch(`${process.env.MAIN_URL}/api/doctor`)
    const doctors = await res.json()
    return {
        getDoctors: Array.isArray(doctors) ? doctors : [],
        revalidate: 10,
    }

}

export default Index
