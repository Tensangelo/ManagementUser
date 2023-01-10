import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
// Components
import LoadingComponent from '@components/tools/Loading';
// Miu
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

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

type FormsFields = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone: string;
    picture: string;
    dateOfBirth: string;
    title: string;
};

type ResponseDataApi = {
    data: FormsFields;
}

const UpdateUser = (props: UserProps) => {

    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { idUser } = props;
    const [ dataUser, setDataUser ] = useState<DataUser>([] as any);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ status, setStatus ] = useState<number>();

    const { register, handleSubmit, formState: { errors } } = useForm<FormsFields>();

    const [responseData, setResponseData] = useState<ResponseDataApi>();

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
        firstName,
        lastName,
        email,
        gender,
        phone,
        picture,
        dateOfBirth,
        title,
    } = dataUser;

    const onSubmit = handleSubmit(async(data) => {
        const response = await fetch(`${Api}/${idUser}`,{
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'app-id': `${token}`,
            },
            'body': JSON.stringify(data),
        })

        setResponseData(await response.json());
        setStatus(response.status)
    });

    const InfoErrorsAPI = responseData?.data;

    const DateBirth = new Date(dateOfBirth).toLocaleDateString('es-CO', { year:"numeric", month:'2-digit', day: '2-digit'});

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
            {status !== undefined && (
                <>
                    {status === 200 ? (
                        <Alert sx={{ width: '100%' }} severity="success">
                            <AlertTitle>Completado</AlertTitle>
                            Cambios modificados correctamente
                        </Alert>
                    ) : (
                        <Alert severity="error">
                            <AlertTitle>¡Error!</AlertTitle>
                            Error al guardar cambios, por favor intenta nuevamente. <strong>Si el error persiste comuníquese con administración</strong>
                        </Alert>
                    )}
                </>
            )}
            {!isLoading ? (
                <form onSubmit={onSubmit}>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Titulo'
                            defaultValue={titleSpanish}
                            {...register('title', {
                                minLength: {
                                    value: 2,
                                    message: 'Minimo 2 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.title && <p className='textAlertForm'>{errors.title?.message}</p>}
                        {InfoErrorsAPI?.title && <p className='textAlertForm'>{InfoErrorsAPI?.title}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Nombres'
                            defaultValue={firstName}
                            {...register('firstName', {
                                minLength: {
                                    value: 3,
                                    message: 'Minimo 3 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.firstName && <p className='textAlertForm'>{errors.firstName?.message}</p>}
                        {InfoErrorsAPI?.firstName && <p className='textAlertForm'>{InfoErrorsAPI?.firstName}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Apellidos'
                            defaultValue={lastName}
                            {...register('lastName', {
                                minLength: {
                                    value: 3,
                                    message: 'Minimo 3 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.lastName && <p className='textAlertForm'>{errors.lastName?.message}</p>}
                        {InfoErrorsAPI?.lastName && <p className='textAlertForm'>{InfoErrorsAPI?.lastName}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Email'
                            defaultValue={email}
                            {...register('email', {
                                minLength: {
                                    value: 3,
                                    message: 'Minimo 3 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.email && <p className='textAlertForm'>{errors.email?.message}</p>}
                        {InfoErrorsAPI?.email && <p className='textAlertForm'>{InfoErrorsAPI?.email}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Genero'
                            defaultValue={gender}
                            {...register('gender', {
                                minLength: {
                                    value: 3,
                                    message: 'Minimo 3 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.gender && <p className='textAlertForm'>{errors.gender?.message}</p>}
                        {InfoErrorsAPI?.gender && <p className='textAlertForm'>{InfoErrorsAPI?.gender}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Telefono'
                            defaultValue={phone}
                            {...register('phone', {
                                minLength: {
                                    value: 7,
                                    message: 'Minimo 7 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.phone && <p className='textAlertForm'>{errors.phone?.message}</p>}
                        {InfoErrorsAPI?.phone && <p className='textAlertForm'>{InfoErrorsAPI?.phone}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Url de imagen'
                            defaultValue={picture}
                            type='url'
                            {...register('picture')}
                        />
                        {errors.picture && <p className='textAlertForm'>{errors.picture?.message}</p>}
                        {InfoErrorsAPI?.picture && <p className='textAlertForm'>{InfoErrorsAPI?.picture}</p>}
                    </Stack>
                    <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                        <TextField
                            className='inputViewUser'
                            label='Fecha de nacimiento (DD-MM-YYYY)'
                            defaultValue={DateBirth}
                            {...register('dateOfBirth')}
                        />
                        {errors.dateOfBirth && <p className='textAlertForm'>{errors.dateOfBirth?.message}</p>}
                        {InfoErrorsAPI?.dateOfBirth && <p className='textAlertForm'>{InfoErrorsAPI?.dateOfBirth}</p>}
                    </Stack>
                    <Button
                        className='BtnModalSave'
                        color='success'
                        type='submit'
                        sx={{
                            float: 'right',
                        }}
                    >
                        Guardar
                    </Button>
                </form>
            ) : (
                <LoadingComponent typeTag='div' />
            )}
        </Box>
    )
}

export default UpdateUser;