import Image from 'next/image'
import { ProjectSection } from '@/types/page-info'

export function ProjectSections({ sections }: { sections?: ProjectSection[] }) {
  return (
    <section className="container my-5 md:my-5 flex flex-col gap-8 md:gap-32">
      {sections?.map(section => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium">{section.title}</h2>
          <Image
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            src={section.image.url}
            unoptimized
          />
        </div>
      ))}
    </section>
  )
}
