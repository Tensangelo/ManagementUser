import React, { ReactNode, useState } from 'react';
// Material Ui
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// Styles
import Styles from '@styles/pagination/limitPage.module.scss';

type LimitPageProps = {
    valueLimit: number;
    onChange: (event: SelectChangeEvent<number>, child: ReactNode) => void;
}

const LimitPageComponent = (props: LimitPageProps) => {
    const { valueLimit, onChange } = props;

    return (
        <Paper className={Styles.containerLimitPage} >
            <p>Limit: </p>
            <FormControl sx={{ m: 1, minWidth: 70 }} size='small'>
                <Select
                    value={valueLimit}
                    label="Age"
                    onChange={onChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Paper>
    )
}

export default LimitPageComponent;