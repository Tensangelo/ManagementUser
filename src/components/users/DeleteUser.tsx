import React, {useState, useEffect, FormEventHandler} from 'react';
// Mui
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
// Styles
import Styles from '@styles/users/deleteUser.module.scss';
import StylesBtn from '@styles/buttons/buttons.module.scss';

type UserProps = {
    idUser: string;
    onChange: Function;
}

const DeleteUser = (props: UserProps) => {

    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { idUser, onChange } = props;
    const [ status, setStatus ] = useState<number>();

    const onDeleteUser = async() => {
        const response = await fetch(`${Api}/${idUser}`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'app-id': `${token}`,
            },
        })

        setStatus(response?.status);
        onChange();
    }

    return (
        <Box className={Styles.containerDeleteUser}>
            {status === undefined ? (
                <Alert sx={{ width: '100%' }} severity="warning" >
                    <AlertTitle>¿Está seguro de eliminar este usuario?</AlertTitle>
                    Estos cambios son permanentes y no se podrán recuperar.
                </Alert>
            ) : (
                <>
                    {status === 200 ? (
                        <Alert sx={{ width: '100%' }} severity="success">
                            <AlertTitle>Completado</AlertTitle>
                            Usuario Eliminado correctamente
                        </Alert>
                    ) : (
                        <Alert severity="error">
                            <AlertTitle>¡Error!</AlertTitle>
                            Ha ocurido un error, por favor intenta nuevamente. <strong>Si el error persiste comuníquese con administración</strong>
                        </Alert>
                    )}
                </>
            )}
            <Button
                className={StylesBtn.BtnWarning}
                color='success'
                type='submit'
                onClick={onDeleteUser}
                fullWidth
            >
                Eliminar
            </Button>
        </Box>
    )
}

export default DeleteUser;