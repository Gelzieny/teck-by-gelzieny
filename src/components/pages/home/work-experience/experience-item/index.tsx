import Image from 'next/image'
import { TechBadge } from '../../../../tech-badge'

export function ExperienceItem() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="/images/icons/goias.svg"
            width={30}
            height={30}
            alt="Logo da empresa"
          />
        </div>
        <div className="h-full w-[1px]  bg-gray-300 dark:bg-gray-700" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.instagram.com/sgggoias/"
            target="_blank"
            className="dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-900/50 text-gray-700  transition-colors"
            rel="noreferrer"
          >
            @sgggoias
          </a>
          <h4 className="dark:text-gray-300 text-gray-600">
            Desenvolvedora Full-Stack
          </h4>
          <span className="dark:text-gray-500  text-color-text/50">
            Fev 2025 • Atual • (1 meses)
          </span>
          <p className=" dark:text-gray-400 text-gray-700 text-justify">
            Atuo no desenvolvimento interfaces acessíveis, projeto sistemas
            escaláveis e otimizo a experiência do usuário com foco em
            performance e qualidade.
          </p>
        </div>
        <p className="dark:text-gray-400 text-gray-500 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="JavaScript" />
          <TechBadge name="ReactJS" />
        </div>
      </div>
    </div>
  )
}
