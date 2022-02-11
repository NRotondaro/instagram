import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

interface ProvidersProps {
  providers: {
    id: any
    name: any
  }
}

export default function signIn({ providers }: ProvidersProps) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers: providers
    },
  }
}
