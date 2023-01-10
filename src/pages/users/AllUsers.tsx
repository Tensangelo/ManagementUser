import React from "react";
import Head from "next/head";
// Compoenentes
import AllUsersc from "@components/users/GetAllUsers";

const AllUsers = () => {

    return (
        <>
            <Head>
                <title>Usuarios</title>
                <meta name="Landing Page" content="Bienvenidos tienda online" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <AllUsersc />
        </>
    )
}

export default AllUsers;
