import React, {useState, useEffect, ReactNode} from 'react';
// Images
import AnonymousUser from '@images/userAnonimous.png'
// Components
import CreateUser from './CreateUser';
import TableUsers from '@components/tables/TableUsers';
import LimitPageComponent  from '@components/pagination/LimitPage';
import BtnPagesComponent from '@components/pagination/BtnPages';
import ModalBase from '@components/modals/ModalBase';
// Material ui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
// Icons
import SearchIcon from '@mui/icons-material/Search';
// Styles
import Styles from '@styles/users/getAllUsers.module.scss';
import StylesBtn from '@styles/buttons/buttons.module.scss';

const AllUsers = () => {

    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const [ items, setItems ] = useState<null | { data: any }>([] as any);
    const [ loading, setLoading ] = useState(true)
    const [ pages, setPages ] = useState(0);
    const [ limit, setLimit ] = useState(10);
    const [ total, setTotal ] = useState(0);

    const infoUser = [
        'Id',
        'Titulo',
        'Nombre completo',
        'Foto',
        'Acciones'
    ]

    useEffect(() => {
        const getUsers = async() => {
            const res = await fetch(`${Api}?page=${pages}&limit=${limit}`, {
                "method": "GET",
                "headers": {
                    "app-id": `${token}`,
                }
            })

            const data = await res.json();
            setItems(data);
            setTotal(data.total);
            setLoading(false);
        }

        getUsers();
    }, [limit])

    const fetchAPI = async (currentpage: number, limit: number) => {
        const res = await fetch(`${Api}?page=${currentpage}&limit=${limit}`, {
            "method": "GET",
            "headers": {
                "app-id": `${token}`,
            }
        })
        const data = await res.json();

        return data;
    }

    const LimitPage = async(event: SelectChangeEvent<number>) => {
        setLimit(event.target.value as number)
        let currentPages = 0;
        const RefreshInfo = await fetchAPI(currentPages, limit)
        setItems(RefreshInfo);
        setPages(currentPages)
    }

    const BackPage = async() => {
        if (pages > 0) {
            let currentPages = pages - 1;
            const RefreshInfo = await fetchAPI(currentPages, limit)
            setItems(RefreshInfo);
            setPages(currentPages);
        }
    }

    const NextPage = async() => {
        if (Math.trunc(total / limit) > pages ) {
            let currentPages = pages + 1;
            const RefreshInfo = await fetchAPI(currentPages, limit)
            setItems(RefreshInfo);
            setPages(currentPages);
        }
    }

    const BtnPages = async(event: React.ChangeEvent<unknown>, value: number) => {
        const RefreshInfo = await fetchAPI(value - 1, limit)
        setItems(RefreshInfo);
        setPages(value - 1);
    }

    // Recarga de pagina al momento de crear o eliminar un usuario
    const RefreshApi = async() => {
        const res = await fetch(`${Api}?page=${pages}&limit=${limit}`, {
            "method": "GET",
            "headers": {
                "app-id": `${token}`,
            }
        })
        const data = await res.json();

        setItems(data);
    }

    // Busqueda de usuario
    const [ search, setSearch ] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);
    const handleOpenModal = () => {
        setOpenModalAlert(true)
    }
    const handleCloseModal = () => {
        setOpenModalAlert(false)
    }

    const getUserId = async(idUser: string) => {
        const res = await fetch(`${Api}/${idUser}`, {
            "method": 'GET',
            "headers": {
                "app-id": `${token}`
            }
        })

        setLoading(true);

        const data = await res.json();
        return { data, res };
    }

    const handleInputSearch = async(event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSearchUser = async() => {
        const RefreshInfo = await getUserId(search);

        console.log(RefreshInfo)

        if (RefreshInfo.res.status === 200 && search !== '') {
            const data = [] as any;
            const ArrayUser = { data } as any;
            data.push(RefreshInfo.data)

            setItems(ArrayUser);
            setLoading(false);
        } else if (RefreshInfo.res.status !== 200) {
            const resetData = await fetchAPI(0, 10)
            handleOpenModal();
            setItems(resetData)
            setLoading(false);
        } else if (RefreshInfo.res.status === 200 && search === '') {
            const resetData = await fetchAPI(0, 10)
            setItems(resetData)
            setLoading(false);
        }
    }

    return (
        <Box className={Styles.containerManagmentUser}>
            <ModalBase
                title='Usuario no encontrado'
                openModal={openModalAlert}
                closeModal={handleCloseModal}
                onClick={handleCloseModal}
            />
            <Paper className={Styles.panelHeaderTable}>
                <CreateUser onChange={RefreshApi} />
                <Box className={Styles.toolSearch}>
                    <Input
                        className={Styles.inputToolSearch}
                        defaultValue={search}
                        onChange={handleInputSearch}
                        placeholder='Buscar Usuario por Id'
                    />
                    <Button
                        type='submit'
                        startIcon={<SearchIcon />}
                        className={StylesBtn.BtnTools}
                        onClick={handleSearchUser}
                    >
                        Buscar
                    </Button>
                </Box>
            </Paper>
            <Box className={Styles.containerTable}>
                <Paper sx={{ width: '100%' }}>
                    <TableUsers
                        infoUserRow={infoUser}
                        isLoading={loading}
                        dataUser={items?.data}
                        imageAlternative={AnonymousUser}
                        onChangeData={RefreshApi}
                    />
                    <Box className={Styles.toolsPagination}>
                        <LimitPageComponent
                            valueLimit={limit}
                            onChange={LimitPage}
                        />
                        <BtnPagesComponent
                            onClickPrev={BackPage}
                            onClickNext={NextPage}
                            onChangePagination={BtnPages}
                            valueTotalResults={total}
                            valueLimit={limit}
                            valueCurrentPage={pages}
                        />
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default AllUsers;