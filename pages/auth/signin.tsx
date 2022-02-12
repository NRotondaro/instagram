import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import { Header } from '../../components/Header'

interface ProvidersProps {
  providers: {
    id: any
    name: any
  }
}

export default function signIn({ providers }: ProvidersProps) {
  return (
    <>
      <Header />
      <div className="-mt-24 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="instagram-logo"
        />
        <p className="font-xs italic">
          Este não é um aplicativo real, tem apenas propósito educacionais
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: '/' })
                }
              >
                Entrar com {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers: providers,
    },
  }
}
