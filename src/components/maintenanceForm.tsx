import React, { FunctionComponent, SyntheticEvent, useState } from "react";
import {
    Button, Checkbox, FormControl, FormHelperText, Grid, InputLabel, ListItemText,
    MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField
} from "@mui/material";
import { useRouter } from "next/router";
import Message from "./message";

type Doctors = {
    id: number,
    name: string,
    medCertId: number,
    phone: number,
    mobilePhone: number,
    zipCode: number,
    speciality: string[]
}

type SpecialityProps = {
    specialitySelected: string[]
    handleChange: any
    error: boolean
    helperText: string
}

type MaintenanceFormProps = {
    formType: string
    doctors: Doctors
    setDoctors: any
}

const formValueInitial = {
    name: "",
    medCertId: "",
    phone: "",
    mobilePhone: "",
    zipCode: "",
    speciality: []
}

type SpecialityData = {
    // id: number;
    name: string;
}

type Errors = {
    [key: string]: string
}

const Speciality: FunctionComponent<SpecialityProps> = ({ specialitySelected, handleChange, error, helperText }) => {
    const [specialities] = useState<readonly SpecialityData[]>([
        { name: 'Alergologia' },
        { name: 'Angiologia' },
        { name: 'Buco maxilo' },
        { name: 'Cardiologia clínca' },
        { name: 'Cardiologia infantil' },
        { name: 'Cirurgia cabeça e pescoço' },
        { name: 'Cirurgia cardíaca' },
        { name: 'Cirurgia de tórax' },
    ]);

    return (
        <FormControl sx={{ m: 1, width: '100%', margin: 0 }} error={ error }>
            <InputLabel id="speciality-label">Especialidade</InputLabel>
            <Select
                labelId="speciality-label"
                id="speciality"
                multiple
                value={ specialitySelected }
                onChange={ handleChange }
                input={<OutlinedInput label="Especialidade" />}
                renderValue={ (selected ) => {
                    return (
                        selected.join(", ")
                    )
                }}
            >
                {specialities.map((speciality, index) => (
                    <MenuItem key={ index } value={ speciality.name }>
                        <Checkbox checked={ specialitySelected.indexOf( speciality.name ) > -1 } />
                        <ListItemText primary={ speciality.name } />
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{ helperText }</FormHelperText>
        </FormControl>
    )
}

const MaintenanceForm: FunctionComponent<MaintenanceFormProps> = ({ formType, doctors, setDoctors }) => {
    const route = useRouter();

    const [formValue, setFormValue] = useState(formType === "add" ? formValueInitial : doctors);
    const [errors, setErrors] = useState<Errors>({});

    const [openInfo, setOpenInfo] = useState(false);
    const [infoMessage, setInfoMessage] = useState({});

    const onSubmit = async ( event: SyntheticEvent ) => {
        event.preventDefault()
        setErrors({})

        if (formType === "edit") {
            setFormValue({
                ...formValue,
                id: doctors.id,
            });
        }

        let res: any;
        if (formType === "add") {
            res = await fetch(`${process.env.MAIN_URL}/api/doctor/add`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue)
            });
        } else {
            res = await fetch(`${process.env.MAIN_URL}/api/doctor/edit/${doctors.id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValue)
            });
        }
        const result = await res.json();
        if (result.success) {
            if (formType === "add") {
                setDoctors((oldValue: any) => [ ...oldValue, result.newData ]);
                setFormValue(formValueInitial);
            }
            setErrors({});
            setOpenInfo(true);
            setInfoMessage( result );
        } else {
            let tempErrors: Errors = {};
            result.info.inner.map((validationField: any) => {
                if (!Object(tempErrors).hasOwnProperty(validationField.path)) {
                    tempErrors = {
                        ...tempErrors,
                        [validationField.path]: validationField.errors[0]
                    }
                }
                setErrors( tempErrors );
            })
            setOpenInfo(true);
            setInfoMessage( result );
        }
    }

    const onCancelClick = () => {
        if (formType === "edit") {
            route.push(`${process.env.MAIN_URL}`)
        }
    }

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const { target } = event
        setFormValue({
            ...formValue,
            [target.name]: target.value,
        });
    }

    const handleSelectChange = async (event: SelectChangeEvent) => {
        const { target: { value } } = event;
        setFormValue({
            ...formValue,
            speciality: value as any,
        });
    };

    return (
        <React.Fragment>
            <form onSubmit={ onSubmit }>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            id="name"
                            label="Name"
                            name="name"
                            value={ formValue.name }
                            onChange={ handleChange }
                            fullWidth
                            inputProps={{ maxLength: 120 }}
                            error={ Object(errors).hasOwnProperty('name') ? (errors.name ? true : false) : false }
                            helperText = { Object(errors).hasOwnProperty('name') ? ( errors.name ? errors.name : '' ) : '' }
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            id="medCertId"
                            label="CRM"
                            name="medCertId"
                            value={ formValue.medCertId }
                            onChange={ handleChange }
                            fullWidth
                            inputProps={{ maxLength: 7 }}
                            error={ Object(errors).hasOwnProperty('medCertId') ? (errors.medCertId ? true : false) : false }
                            helperText = { Object(errors).hasOwnProperty('medCertId') ? ( errors.medCertId ? errors.medCertId : '' ) : '' }
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            id="phone"
                            label="Telefone"
                            name="phone"
                            value={ formValue.phone }
                            onChange={ handleChange }
                            fullWidth
                            inputProps={{ maxLength: 11 }}
                            error={ Object(errors).hasOwnProperty('phone') ? (errors.phone ? true : false) : false }
                            helperText = { Object(errors).hasOwnProperty('phone') ? ( errors.phone ? errors.phone : '' ) : '' }
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            id="mobilePhone"
                            label="Celular"
                            name="mobilePhone"
                            value={ formValue.mobilePhone }
                            onChange={ handleChange }
                            fullWidth
                            inputProps={{ maxLength: 11 }}
                            error={ Object(errors).hasOwnProperty('mobilePhone') ? (errors.mobilePhone ? true : false) : false }
                            helperText = { Object(errors).hasOwnProperty('mobilePhone') ? ( errors.mobilePhone ? errors.mobilePhone : '' ) : '' }
                        />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <TextField
                            id="zipCode"
                            label="CEP"
                            name="zipCode"
                            value={ formValue.zipCode }
                            onChange={ handleChange }
                            fullWidth
                            inputProps={{ maxLength: 8 }}
                            error={ Object(errors).hasOwnProperty('zipCode') ? (errors.zipCode ? true : false) : false }
                            helperText = { Object(errors).hasOwnProperty('zipCode') ? ( errors.zipCode ? errors.zipCode : '' ) : '' }
                        />
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Speciality
                            specialitySelected={  formValue.speciality as string[] } handleChange={ handleSelectChange }
                            error={ Object(errors).hasOwnProperty('speciality') ? (errors.speciality ? true : false) : false }
                            helperText = { Object(errors).hasOwnProperty('speciality') ? ( errors.speciality ? errors.speciality : '' ) : '' }
                        />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Grid container direction="row" spacing={2} justifyContent="flex-end" style={{ marginTop: 10 }}>
                            <Button color="primary" variant="contained" style={{ marginRight: 10 }} type="submit">Confirmar</Button>
                            <Button color="error" variant="outlined" onClick={ onCancelClick }>Voltar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
            <Message openInfo={ openInfo } setOpenInfo={ setOpenInfo } infoMessage={ infoMessage } />
        </React.Fragment>
    )
}

export default MaintenanceForm