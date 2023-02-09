import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { NextResponse } from 'next/server';
import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';


export default function Layout({
  setAuth, auth
}: {
setAuth: Dispatch<SetStateAction<boolean>>
auth: boolean
}){
  const router = useRouter()
  return (
      <div style={{zIndex: "200"}}>
        <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
            {({ signOut, user }) => {
                router.push("/")
                setAuth(true)
                return(
                  <></>
                )              
            }}
          </Authenticator>
      </div>
  );
}
