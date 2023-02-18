import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
// Components
import ModalBase from '@components/modals/ModalBase';
// Mui
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
import Styles from '@styles/users/createUser.module.scss';
import StylesInputs from '@styles/forms/inputs.module.scss';
import SylesAlert from '@styles/forms/alerts.module.scss';
import StylesBtn from '@styles/buttons/buttons.module.scss';

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
    const [ selectTitle, setSelectTitle ] = useState('');
    const [ selectGender, setSelectGender ] = useState('');
    const [ selectAvatar, setSelectAvatar ] = useState('');

    const [responseData, setResponseData] = useState<ResponseDataApi>();

    const handleOpenModal = () => {
        setOpenModalCreateUser(true)
    }
    const handleCloseModal = () => {
        setOpenModalCreateUser(false)
    }

    const handlechangeTitle = (event: SelectChangeEvent) => {
        setSelectTitle(event.target.value as string)
    }
    const handlechangeGender = (event: SelectChangeEvent) => {
        setSelectGender(event.target.value as string)
    }
    const handleChangeAvatar = (event: SelectChangeEvent) => {
        setSelectAvatar(event.target.value as string)
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

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 10*20,
            },
        },
    }

    return (
        <Box className={Styles.containerCreateUser}>
            <ModalBase
                openModal={openModalCreateUser}
                closeModal={handleCloseModal}
                onClick={handleCloseModal}
                title='Creación de usuario'
            >
                <Box className={Styles.containerForm}>
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
                                        Señor
                                    </MenuItem>
                                    <MenuItem value='mrs'>
                                        Señora
                                    </MenuItem>
                                    <MenuItem value='miss'>
                                        Señorita
                                    </MenuItem>
                                    <MenuItem value='dr'>
                                        Doctor(a)
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            {errors.title && <p className={SylesAlert.textAlertForm}>{errors.title?.message}</p>}
                            {InfoErrorsAPI?.title && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.title}</p>}
                        </Stack>
                        <Stack className={Styles.containerInputs}>
                            <TextField
                                className={StylesInputs.inputViewUser}
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
                            {errors.firstName && <p className={SylesAlert.textAlertForm}>{errors.firstName?.message}</p>}
                            {InfoErrorsAPI?.firstName && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.firstName}</p>}
                        </Stack>
                        <Stack className={Styles.containerInputs}>
                            <TextField
                                className={StylesInputs.inputViewUser}
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
                            {errors.lastName && <p className={SylesAlert.textAlertForm}>{errors.lastName?.message}</p>}
                            {InfoErrorsAPI?.lastName && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.lastName}</p>}
                        </Stack>
                        <Stack className={Styles.containerInputs}>
                            <TextField
                                className={StylesInputs.inputViewUser}
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
                            {errors.email && <p className={SylesAlert.textAlertForm}>{errors.email?.message}</p>}
                            {InfoErrorsAPI?.email && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.email}</p>}
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
                            {errors.gender && <p className={SylesAlert.textAlertForm}>{errors.gender?.message}</p>}
                            {InfoErrorsAPI?.gender && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.gender}</p>}
                        </Stack>
                        <Stack className={Styles.containerInputs}>
                            <TextField
                                className={StylesInputs.inputViewUser}
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
                            {errors.phone && <p className={SylesAlert.textAlertForm}>{errors.phone?.message}</p>}
                            {InfoErrorsAPI?.phone && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.phone}</p>}
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
                                        required: true,
                                        onChange: handleChangeAvatar,
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
                            {errors.picture && <p className={SylesAlert.textAlertForm}>{errors.picture?.message}</p>}
                            {InfoErrorsAPI?.picture && <p className={SylesAlert.textAlertForm}>{InfoErrorsAPI?.picture}</p>}
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
                </Box>
            </ModalBase>
            <Button
                className={StylesBtn.BtnTools}
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