import { Button, Code, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>React 2025 Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>React 2025 Project</Heading>
        <Text>
          <Code>{auth?.user?.email}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={() => auth.signOut()}>Sign out</Button>
        ) : (
          <Button onClick={() => auth.signInWithGitHub()}>
            Sign in with github
          </Button>
        )}
      </main>
    </>
  );
}
