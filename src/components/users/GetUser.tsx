import React, {useState, useEffect} from 'react';
// Components
import LoadingComponent from '@components/tools/Loading';
// Miu
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type UserProps = {
    idUser: string;
}

interface DataUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    picture: string;
    dateOfBirth: string;
    title: string;
}

const GetUser = (props: UserProps) => {

    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { idUser } = props;
    const [ dataUser, setDataUser ] = useState<DataUser>([] as any);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const getUser = async() => {
            const res = await fetch(`${Api}/${idUser}`, {
                "method": 'GET',
                "headers": {
                    "app-id": `${token}`
                }
            })

            const data = await res.json();
            setDataUser(data);
            setIsLoading(false);
        }

        getUser()
    },[])

    const {
        id,
        firstName,
        lastName,
        email,
        gender,
        phone,
        picture,
        dateOfBirth,
        title,
    } = dataUser;

    const DateBirth = new Date(dateOfBirth).toLocaleDateString('es-CO', { year:'numeric', month:'2-digit', day: '2-digit'});

    let  titleSpanish;

    if (title === 'mr' || title === 'Mr') {
        titleSpanish = 'Señor'
    } else if (title === 'mrs' || title === 'miss' || title === 'ms' || title === 'Ms') {
        titleSpanish = 'Señora';
    } else if (title === 'dr' || title === 'Dr') {
        titleSpanish = 'Doctor';
    } else {
        titleSpanish = title;
    }

    return (
        <Box
            sx={{
                margin: '30px 0 0 0',
                display: 'flex',
                justifyContent: 'space-around',
                flexFlow: 'row wrap'
            }}
        >
            {!isLoading ? (
                <>
                    <TextField
                        className='inputViewUser'
                        label='Titulo'
                        defaultValue={titleSpanish}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Nombres'
                        defaultValue={firstName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Apellidos'
                        defaultValue={lastName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Email'
                        defaultValue={email}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Genero'
                        defaultValue={gender}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Telefono'
                        defaultValue={phone}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Imagen'
                        defaultValue={picture}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className='inputViewUser'
                        label='Fecha de nacimiento (DD-MM-YYYY)'
                        defaultValue={DateBirth}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </>
            ) : (
                <LoadingComponent typeTag='div' />
            )}
        </Box>
    )
}

export default GetUser;