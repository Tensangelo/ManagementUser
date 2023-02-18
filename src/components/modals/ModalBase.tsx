import { MouseEventHandler, ReactNode } from 'react';
// styleSheets
import Styles from '@styles/modals/modal.module.scss';
// Mui
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// Icons
import CloseIcon from '@mui/icons-material/Close';

type ModalViewUserProps = {
    openModal: boolean;
    closeModal: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    onClick: MouseEventHandler<HTMLButtonElement>;
    title?: string;
    children?: ReactNode;
}

const ViewUser = (props: ModalViewUserProps) => {
    const {
        openModal,
        closeModal,
        onClick,
        title,
        children,
    } = props;

    return (
        <Modal
            open={openModal}
            onClose={closeModal}
        >
            <Box className={Styles.containerModal}>
                <Stack className={Styles.containerBtnClose}>
                    <Button
                        className={Styles.BtnCloseModal}
                        variant="contained"
                        onClick={onClick}
                    >
                        <CloseIcon />
                    </Button>
                </Stack>
                <h2>{title}</h2>
                {children}
            </Box>
        </Modal>
    )
}

export default ViewUser;