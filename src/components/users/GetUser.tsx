import React, {useState, useEffect} from 'react';
// Components
import LoadingComponent from '@components/tools/Loading';
// Miu
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image from 'next/image';
// Styles
import Styles from '@styles/users/getUser.module.scss';
import StylesInputs from '@styles/forms/inputs.module.scss';

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
    registerDate: string;
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
        title,
        registerDate
    } = dataUser;

    const DateCreateUser = new Date(registerDate).toLocaleDateString('es-CO', { year:'numeric', month:'2-digit', day: '2-digit'});

    let  titleSpanish;

    if (title === 'mr' || title === 'Mr') {
        titleSpanish = 'Señor'
    } else if (title === 'mrs' || title === 'ms' || title === 'Ms') {
        titleSpanish = 'Señora';
    } else if (title === 'miss') {
        titleSpanish = 'Señorita';
    } else if (title === 'dr' || title === 'Dr') {
        titleSpanish = 'Doctor(a)';
    } else {
        titleSpanish = title;
    }

    return (
        <Box className={Styles.containerGetUser}>
            {!isLoading ? (
                <>
                    <Box className={StylesInputs.inputViewUserAvatar}>
                        <picture>
                            <Image
                                src={picture}
                                alt='Icon user'
                                width={75}
                                height={75}
                            />
                        </picture>
                    </Box>
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Titulo'
                        defaultValue={titleSpanish}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Nombres'
                        defaultValue={firstName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Apellidos'
                        defaultValue={lastName}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Email'
                        defaultValue={email}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Genero'
                        defaultValue={gender}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Telefono'
                        defaultValue={phone}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        className={StylesInputs.inputViewUser}
                        label='Fecha creacion del usuario'
                        defaultValue={DateCreateUser}
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