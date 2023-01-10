import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
// Components
import ModalBase from '@components/modals/ModalBase';
// Mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

type UserProps = {
    onChange: Function;
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

const CreateUser = (props: UserProps) => {
    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const [openModalCreateUser, setOpenModalCreateUser] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<FormsFields>();
    const [ status, setStatus ] = useState<number>();

    const [responseData, setResponseData] = useState<ResponseDataApi>();


    const handleOpenModal = () => {
        setOpenModalCreateUser(true)
    }
    const handleCloseModal = () => {
        setOpenModalCreateUser(false)
    }

    const { onChange } = props;

    const onSubmit = handleSubmit(async(data) => {
        const response = await fetch(`${Api}/create`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'app-id': `${token}`,
            },
            'body': JSON.stringify(data),
        })

        setResponseData(await response.json());
        setStatus(response.status);
        onChange();
    });

    const InfoErrorsAPI = responseData?.data;

    return (
        <Box
            sx={{
                margin: '10px 30px 0 0',
                display: 'flex',
                justifyContent: 'flex-end',
                flexFlow: 'row wrap'
            }}
        >
            <ModalBase
                openModal={openModalCreateUser}
                closeModal={handleCloseModal}
                onClick={handleCloseModal}
                title='Creación de usuario'
            >
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
                                    Usuario creado existosamente
                                </Alert>
                            ) : (
                                <Alert severity="error">
                                    <AlertTitle>¡Error!</AlertTitle>
                                    Error al crear usuario, por favor intenta nuevamente <strong>Si el error persiste comuníquese con administración</strong>
                                </Alert>
                            )}
                        </>
                    )}
                    <form onSubmit={onSubmit}>
                        <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
                            <TextField
                                className='inputViewUser'
                                label='Titulo'
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
                </Box>
            </ModalBase>
            <Button
                className='BtnTools'
                color='success'
                type='submit'
                onClick={handleOpenModal}
            >
                Crear Usuario
            </Button>
        </Box>
    )
}

export default CreateUser;