import Image from 'next/image'

export function ProjectCard() {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden group transition-all border-2 dark:border-gray-800 hover:border-main-color opacity-70 hover:opacity-100">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
          alt="Imagem do projeto"
          src="/images/portfolio1.jpg"
          unoptimized
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-main-color transition-all">
          Projeto 01
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          necessitatibus, non pariatur atque ad quisquam illo porro voluptatem
          totam sunt, ab eaque aut a! Vel totam tempore quam dolorum delectus?
        </p>

        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, Tailwind CSS
        </span>
      </div>
    </div>
  )
}
