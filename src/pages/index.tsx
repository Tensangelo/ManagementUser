import type { NextPage } from 'next';
import Head from 'next/head';
// Mui
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Administrador de usuarios</title>
                <meta name="Landing Page" content="Manejo de usuarios" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Card className='containerHome' sx={{ maxWidth: 550  }}>
                <CardMedia
                    sx={{ height: 240 }}
                    image='https://jumpcloud.com//wp-content/uploads/2021/03/Manage-EDU-Identities-in-a-Remote-Learning-Environment-1-aspect-ratio-160x110-1.png'
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Módulo de consulta y registro de usuarios al sistema
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Esta herramienta permite la creacion, modificacion, eliminacion y consulta de usuarios en el sistema.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{ color: '#067566', fontWeight: 'bold' }} size='large' href='/users/AllUsers'>Entrar al administrador</Button>
                    <Button sx={{ color: '#067566', fontWeight: 'bold' }} size='large' href='https://github.com/Tensangelo/ManagementUser.git'>Repositorio Github</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Home;
