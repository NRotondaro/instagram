export const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://media-exp1.licdn.com/dms/image/C5603AQFzINjYeGqjow/profile-displayphoto-shrink_200_200/0/1639086160833?e=1648080000&v=beta&t=zoVmr9RmTaySZJHUPX2D9VLUvaZNVG3MQfhrP2wGD6o"
        alt="profile-pic"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">Nikson Rotondaro</h2>
        <h3 className="text-sm text-gray-400">Bem vindo ao Instagram</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Deslogar</button>
    </div>
  )
}
