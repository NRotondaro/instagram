import { signOut, useSession } from 'next-auth/react'

export const MiniProfile = () => {
  const { data: session } = useSession()
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt="profile-pic"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Bem vindo ao Instagram</h3>
      </div>
      <button
        onClick={() => signOut()}
        className="text-sm font-semibold text-blue-400"
      >
        Deslogar
      </button>
    </div>
  )
}
