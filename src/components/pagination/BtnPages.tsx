import { ChangeEvent, ReactNode } from 'react';
// Material ui
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type ButtonsPagesProps = {
    onClickPrev: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClickNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onChangePagination: (event: ChangeEvent<unknown>, page: number) => void
    valueTotalResults: number;
    valueLimit: number;
    valueCurrentPage: number;
}

const BtnPagesComponent = (props: ButtonsPagesProps) => {
    const {
        onClickPrev,
        onClickNext,
        onChangePagination,
        valueTotalResults,
        valueLimit,
        valueCurrentPage
    } = props;

    return (
        <Box  className='botonsToolsPagination'>
            <Button
                className='BtnTools BtnPagination'
                variant='contained'
                onClick={onClickPrev}
            >
                Back
            </Button>
            <Stack spacing={2} display='flex' justifyContent='center' >
                <Pagination
                    count={Math.ceil(valueTotalResults / valueLimit)}
                    page={valueCurrentPage + 1}
                    onChange={onChangePagination}
                    siblingCount={1}
                    boundaryCount={1}
                    variant="outlined"
                    shape="rounded"
                    hidePrevButton
                    hideNextButton
                />
            </Stack>
            <Button
                className='BtnTools BtnPagination'
                variant='contained'
                onClick={onClickNext}
            >
                Next
            </Button>
        </Box>
    )
}

export default BtnPagesComponent;