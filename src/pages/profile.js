import WithAuth from "@/hoc/WithAuth";
import Head from "next/head";

const Profile = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Profile page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>Profile</div>
      </main>
    </>
  )
}

export default WithAuth(Profile)