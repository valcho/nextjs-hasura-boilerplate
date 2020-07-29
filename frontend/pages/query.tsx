import React from "react";
import Head from "next/head";
import Page from "components/pages/query";
import { NextPage } from "next";
import Loader from "components/loader";
import AccessDeniedIndicator from "components/access-denied-indicator";
import { useSession } from "next-auth/client";
import WithGraphQL from "lib/with-graphql";

const QueryPage: NextPage = () => {
  const [session, loading] = useSession();

  if (loading) {
    return <Loader />;
  }

  if (!session) {
    return <AccessDeniedIndicator />;
  }

  return (
    <WithGraphQL>
      <Head>
        <title>People Page</title>
      </Head>
      <Page />
    </WithGraphQL>
  );
};

export default QueryPage;