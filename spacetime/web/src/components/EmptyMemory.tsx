export function EmptyMemory() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[22.5rem] text-center leading-relaxed">
        Você ainda não registrou nenhuma lembrança, comece a {''}
        <a className="underline hover:text-gray-50" href="">
          criar agora
        </a>
      </p>
    </div>
  )
}
