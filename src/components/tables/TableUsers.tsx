import { FormEventHandler } from 'react';
import Image, { StaticImageData } from 'next/image';
// Components
import GetUser from '@components/users/GetUser';
import UpdateUser from '@components/users/UpdateUser';
import DeleteUser from '@components/users/DeleteUser';
// Tools
import LoadingComponent from '@components/tools/Loading';
import BtnActions from '@components/tools/BtnActions';
// Material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// Styles
import Styles from '@styles/tables/tableUsers.module.scss';

type TableUsersProps = {
    infoUserRow: string[];
    isLoading: boolean;
    dataUser: [];
    imageAlternative: StaticImageData;
    onChangeData: Function;
}

const TableUsers = (props: TableUsersProps) => {
    const {
        infoUserRow,
        isLoading,
        dataUser,
        imageAlternative,
        onChangeData
    } = props;

    return (
        <TableContainer className={Styles.containerTable}>
            <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                    <TableRow>
                        {infoUserRow.map((dataRow , i) => {
                            const keyDataRow = `${i}${dataRow}`

                            return (
                                <TableCell key={keyDataRow} className={Styles.tableCellHeader}>
                                    {dataRow}
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody className={Styles.tableBody}>
                    {!isLoading ? (
                        <>
                            {dataUser.map((dataUsers: any) => {
                                const { id, title, firstName, lastName, picture } = dataUsers;

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
                                    <TableRow key={id}>
                                        <TableCell className={Styles.tableCellBody}>
                                            <b>{id}</b>
                                        </TableCell>
                                        <TableCell className={Styles.tableCellBody}>
                                            {titleSpanish}
                                        </TableCell>
                                        <TableCell className={Styles.tableCellBody}>
                                            {`${firstName} ${lastName}`}
                                        </TableCell>
                                        <TableCell className={Styles.tableCellBody}>
                                            <picture>
                                                <Image
                                                    src={picture}
                                                    alt='Icon user'
                                                    width={55}
                                                    height={55}
                                                />
                                            </picture>
                                        </TableCell>
                                        <TableCell className={Styles.tableCellBody}>
                                            <BtnActions
                                                childrenView={<GetUser idUser={id} />}
                                                childrenUpdate={<UpdateUser idUser={id} />}
                                                childrenDelete={<DeleteUser idUser={id} onChange={onChangeData} /> }
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </>
                    ) : (
                        <TableRow>
                            <LoadingComponent typeTag='td' />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableUsers;