import Navbar from "../components/Navbar";
import Head from "next/head";

const Index = () => {
    return <>
        <Head>
            <title>Тестовое задание</title>
            <meta
                name="description"
                content="Выполнение тестового задания на базе Next.js"
                key="desc"
            />
        </Head>
        <div>
            <Navbar />
            <h1>Тестовое задание</h1>
        </div>
    </>
}

export default Index;
