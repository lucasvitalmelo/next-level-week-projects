// import { EmptyMemory } from '@/components/EmptyMemory'
import { cookies } from 'next/headers'
import { api } from '@/lib/api'
import { ChevronLeft, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function Memory({ params }: { params: { id: string } }) {
  const token = cookies().get('token')?.value

  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar á timeline
      </Link>
      <div className="flex gap-3">
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-200 transition-colors hover:text-gray-100"
        >
          <Pencil className="h-4 w-4 " />
          editar publicação
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1 text-sm text-gray-200 transition-colors hover:text-red-400"
        >
          <Trash className="h-4 w-4 " />
          deletar
        </Link>
      </div>
      <Image
        src={response.data.coverUrl}
        width={592}
        height={280}
        className="aspect-video w-full rounded-md object-cover"
        alt=""
      />
      <p className="text-lg leading-relaxed text-gray-100">
        {response.data.content}
      </p>
    </div>
  )
}
