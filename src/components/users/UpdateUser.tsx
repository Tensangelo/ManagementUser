import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
// Components
import LoadingComponent from '@components/tools/Loading';
// Miu
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// Images
import AvatarMaleOne from '@images/avatarMale_1.png';
import AvatarMaleTwo from '@images/avatarMale_2.png';
import AvatarFemaleOne from '@images/avatarFemale_1.png';
import AvatarFemaleTwo from '@images/avatarFemale_2.png';
import AnonimusUser from '@images/userAnonimous.png';
// Styles
import Styles from '@styles/users/updateUser.module.scss';
import StylesInputs from '@styles/forms/inputs.module.scss';
import StylesAlert from '@styles/forms/alerts.module.scss';
import StylesBtn from '@styles/buttons/buttons.module.scss';

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

    const [ selectTitle, setSelectTitle ] = useState('');
    const [ selectGender, setSelectGender ] = useState('');
    const [ selectAvatar, setSelectAvatar ] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm<FormsFields>();

    const handlechangeTitle = (event: SelectChangeEvent) => {
        setSelectTitle(event.target.value as string)
    }
    const handlechangeGender = (event: SelectChangeEvent) => {
        setSelectGender(event.target.value as string)
    }
    const handleChangeAvatar = (event: SelectChangeEvent) => {
        setSelectAvatar(event.target.value as string)
    }

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

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 10*20,
            },
        },
    }

    return (
        <Box className={Styles.containerUpdateUser}>
            {status !== undefined && (
                <>
                    {status === 200 ? (
                        <Alert sx={{ width: '100%' }} severity="success">
                            <AlertTitle>Completado</AlertTitle>
                            Cambios modificados correctamente
                        </Alert>
                    ) : (
                        <Alert severity="error">
                            <AlertTitle>??Error!</AlertTitle>
                            Error al guardar cambios, por favor intenta nuevamente. <strong>Si el error persiste comun??quese con administraci??n</strong>
                        </Alert>
                    )}
                </>
            )}
            {!isLoading ? (
                <form onSubmit={onSubmit}>
                    <Stack className={Styles.containerInputs}>
                        <FormControl className={StylesInputs.inputViewUser}>
                            <InputLabel id='InputTitle'>
                                Titulo
                            </InputLabel>
                            <Select
                                value={selectTitle}
                                labelId='InputTitle'
                                label='Titulo'
                                {...register('title', {
                                    onChange: handlechangeTitle,
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio'
                                    }
                                })}
                            >
                                <MenuItem value='mr'>
                                    Se??or
                                </MenuItem>
                                <MenuItem value='mrs'>
                                    Se??ora
                                </MenuItem>
                                <MenuItem value='miss'>
                                    Se??orita
                                </MenuItem>
                                <MenuItem value='dr'>
                                    Doctor(a)
                                </MenuItem>
                            </Select>
                        </FormControl>
                        {errors.title && <p className={StylesAlert.textAlertForm}>{errors.title?.message}</p>}
                        {InfoErrorsAPI?.title && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.title}</p>}
                    </Stack>
                    <Stack className={Styles.containerInputs}>
                        <TextField
                            className={StylesInputs.inputViewUser}
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
                        {errors.firstName && <p className={StylesAlert.textAlertForm}>{errors.firstName?.message}</p>}
                        {InfoErrorsAPI?.firstName && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.firstName}</p>}
                    </Stack>
                    <Stack className={Styles.containerInputs}>
                        <TextField
                            className={StylesInputs.inputViewUser}
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
                        {errors.lastName && <p className={StylesAlert.textAlertForm}>{errors.lastName?.message}</p>}
                        {InfoErrorsAPI?.lastName && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.lastName}</p>}
                    </Stack>
                    <Stack className={Styles.containerInputs}>
                        <TextField
                            className={StylesInputs.inputViewUser}
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
                        {errors.email && <p className={StylesAlert.textAlertForm}>{errors.email?.message}</p>}
                        {InfoErrorsAPI?.email && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.email}</p>}
                    </Stack>
                    <Stack className={Styles.containerInputs}>
                        <FormControl className={StylesInputs.inputViewUser}>
                            <InputLabel id='InputGender'>
                                Genero
                            </InputLabel>
                            <Select
                                value={selectGender}
                                labelId='InputGender'
                                label='Genero'
                                {...register('gender', {
                                    onChange: handlechangeGender,
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio'
                                    }
                                })}
                            >
                                <MenuItem value='male'>
                                    Masculino
                                </MenuItem>
                                <MenuItem value='female'>
                                    Femenino
                                </MenuItem>
                            </Select>
                        </FormControl>
                        {errors.gender && <p className={StylesAlert.textAlertForm}>{errors.gender?.message}</p>}
                        {InfoErrorsAPI?.gender && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.gender}</p>}
                    </Stack>
                    <Stack className={Styles.containerInputs}>
                        <TextField
                            className={StylesInputs.inputViewUser}
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
                        {errors.phone && <p className={StylesAlert.textAlertForm}>{errors.phone?.message}</p>}
                        {InfoErrorsAPI?.phone && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.phone}</p>}
                    </Stack>
                    <Stack className={Styles.containerInputs}>
                        <FormControl className={StylesInputs.inputViewUserAvatar}>
                            <InputLabel id='InputAvatar'>
                                Avatar
                            </InputLabel>
                            <Select
                                value={selectAvatar}
                                labelId='InputAvatar'
                                label='Avatar'
                                MenuProps={MenuProps}
                                {...register('picture', {
                                    onChange: handleChangeAvatar,
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio'
                                    }
                                })}
                            >
                                <MenuItem value={AvatarMaleOne.src} sx={{ justifyContent: 'center' }}>
                                    <picture>
                                        <Image
                                            src={AvatarMaleOne}
                                            alt='Avatar Male the rock'
                                            width={55}
                                            height={55}
                                        />
                                    </picture>
                                </MenuItem>
                                <MenuItem value={AvatarMaleTwo.src} sx={{ justifyContent: 'center' }}>
                                    <picture>
                                        <Image
                                            src={AvatarMaleTwo}
                                            alt='Avatar Male Keanu Reeves'
                                            width={55}
                                            height={55}
                                        />
                                    </picture>
                                </MenuItem>
                                <MenuItem value={AvatarFemaleOne.src} sx={{ justifyContent: 'center' }}>
                                    <picture>
                                        <Image
                                            src={AvatarFemaleOne}
                                            alt='Avatar Female'
                                            width={55}
                                            height={55}
                                        />
                                    </picture>
                                </MenuItem>
                                <MenuItem value={AvatarFemaleTwo.src} sx={{ justifyContent: 'center' }}>
                                    <picture>
                                        <Image
                                            src={AvatarFemaleTwo}
                                            alt='Avatar Female'
                                            width={55}
                                            height={55}
                                        />
                                    </picture>
                                </MenuItem>
                                <MenuItem value={AnonimusUser.src} sx={{ justifyContent: 'center' }}>
                                    <picture>
                                        <Image
                                            src={AnonimusUser}
                                            alt='Avatar anonimous'
                                            width={55}
                                            height={55}
                                        />
                                    </picture>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        {errors.picture && <p className={StylesAlert.textAlertForm}>{errors.picture?.message}</p>}
                        {InfoErrorsAPI?.picture && <p className={StylesAlert.textAlertForm}>{InfoErrorsAPI?.picture}</p>}
                    </Stack>
                    <Stack className={Styles.containerBtnSave}>
                        <Button
                            className={StylesBtn.BtnModalSave}
                            color='success'
                            type='submit'
                        >
                            Guardar
                        </Button>
                    </Stack>
                </form>
            ) : (
                <LoadingComponent typeTag='div' />
            )}
        </Box>
    )
}

export default UpdateUser;