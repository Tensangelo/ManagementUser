import { MouseEventHandler, ReactNode } from 'react';
// styleSheets
import Styles from '@styles/modals/modal.module.scss';
// Mui
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/material/styles/createTheme';

type ModalViewUserProps = {
    openModal: boolean;
    closeModal: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    onClick: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    children?: ReactNode;
    buttonText?: string;
    classBtn?: string;
}

const ViewUser = (props: ModalViewUserProps) => {
    const {
        openModal,
        closeModal,
        onClick,
        title,
        children,
        buttonText= 'Cerrar',
        classBtn,
    } = props;

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
        >
            <Box className={Styles.containerModal}>
                <h2>{title}</h2>
                {children}
                <Button
                    className={`BtnTools ${classBtn}`}
                    variant="contained"
                    onClick={onClick}
                >
                    {buttonText}
                </Button>
            </Box>
        </Modal>
    )
}

export default ViewUser;