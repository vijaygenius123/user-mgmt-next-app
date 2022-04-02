import Head from 'next/head'
import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

export default function Home() {
    return (
        <div>
            <Head>
                <title>User Management App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <UserList />

        </div>
    )
}
