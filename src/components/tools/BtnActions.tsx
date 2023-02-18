import { ReactNode, useState } from 'react';
// Components
import ModalUser from '@components/modals/ModalBase';
// Mui
import { Box, Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
// Images && icons
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// Styles
import Styles from '@styles/buttons/buttons.module.scss';

type contentModalProps = {
    childrenView: ReactNode;
    childrenUpdate: ReactNode;
    childrenDelete: ReactNode;
}

const BtnActions = (props: contentModalProps) => {
    const { childrenView, childrenUpdate, childrenDelete } = props;
    const [ openModalView, setOpenModalView ] = useState(false);
    const [ openModalUpdate, setOpenModalUpdate ] = useState(false);
    const [ openModalDelete, setOpenModalDelete ] = useState(false);

    const handleOpenView = () => {
        setOpenModalView(true)
    }
    const handleCloseView = () => {
        setOpenModalView(false)
    }

    const handleOpenUpdate = () => {
        setOpenModalUpdate(true)
    }
    const handleCloseUpdate = () => {
        setOpenModalUpdate(false)
    }

    const handleOpenDelete = () => {
        setOpenModalDelete(true)
    }
    const handleCloseDelete = () => {
        setOpenModalDelete(false)
    }

    return (
        <>
            <Box>
                <IconButton
                    className={Styles.BtnOpenModals}
                    onClick={handleOpenView}
                >
                    <WysiwygIcon />
                </IconButton>
                <IconButton
                    className={Styles.BtnOpenModals}
                    onClick={handleOpenUpdate}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    className={Styles.BtnOpenModals}
                    onClick={handleOpenDelete}
                >
                    <DeleteIcon />
                </IconButton>
            </Box>
            <ModalUser
                title='Detalle del usuario'
                openModal={openModalView}
                closeModal={handleCloseView}
                onClick={handleCloseView}
            >
                {childrenView}
            </ModalUser>
            <ModalUser
                title='Modificar usuario'
                openModal={openModalUpdate}
                closeModal={handleCloseUpdate}
                onClick={handleCloseUpdate}
            >
                {childrenUpdate}
            </ModalUser>
            <ModalUser
                title='Eliminar usuario'
                openModal={openModalDelete}
                closeModal={handleCloseDelete}
                onClick={handleCloseDelete}
            >
                {childrenDelete}
            </ModalUser>
        </>
    )
}

export default BtnActions;