import Image from 'next/image'
import { ptBR } from 'date-fns/locale'
import { format, differenceInMonths, differenceInYears } from 'date-fns'

import { TechBadge } from '../../../../tech-badge'
import { WorkExperiences } from '../../../../../types/page-info'

type ExperienceItemProps = {
  experience: WorkExperiences
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const {
    endDate,
    startDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    technologies,
  } = experience

  // Certifique-se de validar as datas antes de usá-las
  if (!startDate) {
    throw new Error('startDate é obrigatório e deve ser uma data válida.')
  }

  // Converte as datas em objetos Date
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()

  // Valida se as datas são válidas
  if (isNaN(start.getTime()) || (endDate && isNaN(end.getTime()))) {
    throw new Error('startDate ou endDate são inválidos.')
  }

  // Formatação das datas
  const formattedStartDate = format(start, 'MMM yyyy', { locale: ptBR })
  const formattedEndDate = endDate
    ? format(end, 'MMM yyyy', { locale: ptBR })
    : 'O momento'

  // Cálculo da duração em anos e meses
  const totalMonths = differenceInMonths(end, start)
  const years = Math.floor(totalMonths / 12) // Converte meses em anos completos
  const monthsRemaining = totalMonths % 12 // Calcula os meses restantes

  // Formatação da duração
  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mês${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${totalMonths} mês${totalMonths > 1 ? 'es' : ''}`

  // Output (se necessário, para debug)
  console.log({ formattedStartDate, formattedEndDate, formattedDuration })

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex items-center flex-col gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src={companyLogo.url}
            width={30}
            height={30}
            alt={`Logo da empresa ${companyName}`}
          />
        </div>
        <div className="h-full w-[1px]  bg-gray-300 dark:bg-gray-700" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-900/50 text-gray-700  transition-colors"
            rel="noreferrer"
          >
            @ {companyName}
          </a>
          <h4 className="dark:text-gray-300 text-gray-600">{role}</h4>
          <span className="dark:text-gray-500  text-color-text/50">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>
          <p className=" dark:text-gray-400 text-gray-700 text-justify">
            {description.raw.children.map((item, index) => {
              if (item.type === 'paragraph') {
                // Renderiza parágrafos
                return (
                  <p
                    key={`experience-${companyName}-description-${index}`}
                    className="dark:text-gray-400 text-gray-700 text-justify"
                  >
                    {item.children
                      .map((child, childIndex) => child.text)
                      .join(' ')}
                  </p>
                )
              } else if (item.type === 'bulleted-list') {
                // Renderiza listas não ordenadas
                return (
                  <ul
                    key={`experience-${companyName}-description-${index}`}
                    className="list-disc pl-5 dark:text-gray-400 text-gray-700"
                  >
                    {item.children.map((listItem, listItemIndex) => (
                      <li key={`list-item-${listItemIndex}`}>
                        {listItem.children
                          .map(listChild =>
                            listChild.children.map(c => c.text).join(' ')
                          )
                          .join(' ')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return null // Ignora outros tipos se necessário
            })}
          </p>
        </div>
        <p className="dark:text-gray-400 text-gray-500 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          {technologies.map((tech, i) => (
            <TechBadge
              name={tech.name}
              key={`experience-${companyName}-tech-${tech.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
