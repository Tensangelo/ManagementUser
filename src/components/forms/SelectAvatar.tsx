import React, {useState} from 'react';
import Image from 'next/image';
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

const SelectAvatar = () => {
    const [ selectTitle, setSelectTitle ] = useState('');
    const [ selectGender, setSelectGender ] = useState('');
    const [ selectAvatar, setSelectAvatar ] = useState('');

    const handlechangeTitle = (event: SelectChangeEvent) => {
        setSelectTitle(event.target.value as string)
    }
    const handlechangeGender = (event: SelectChangeEvent) => {
        setSelectGender(event.target.value as string)
    }
    const handleChangeAvatar = (event: SelectChangeEvent) => {
        setSelectAvatar(event.target.value as string)
    }

    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: 10*20,
            },
        },
    }

    return (
        <Stack display={'inline-flex'} sx={{ maxWidth: '17rem' }}>
            <FormControl className='inputViewUserAvatar'>
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
            {errors.picture && <p className='textAlertForm'>{errors.picture?.message}</p>}
            {InfoErrorsAPI?.picture && <p className='textAlertForm'>{InfoErrorsAPI?.picture}</p>}
        </Stack>
    )
}

export default SelectAvatar;