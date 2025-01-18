import Image from 'next/image'

import { FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdFileDownload } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io5'
import { TbBrandGithub, TbBrandLinkedin } from 'react-icons/tb'
import { useContext } from 'react'
import { ThemeContext } from '../../../theme/theme-provider'

const MOCK_CONTACTS = [
  {
    url: 'https://www.facebook.com/gelzieny/',
    icon: <FaFacebookF />,
  },
  {
    url: 'https://x.com/GelzienyRM',
    icon: <FaXTwitter />,
  },
  {
    url: 'https://www.instagram.com/gelzieny/',
    icon: <IoLogoInstagram />,
  },
  {
    url: 'https://www.linkedin.com/in/gelzieny/',
    icon: <TbBrandLinkedin />,
  },
  {
    url: 'https://github.com/gelzieny',
    icon: <TbBrandGithub />,
  },
]

export function HeroSection() {
  const { theme } = useContext(ThemeContext)

  return (
    <section className="w-full h-auto  flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[100px]">
      <div className="container flex items-start justify-between flex-col lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="text-2xl font-medium">Olá 👋, eu sou</p>
          <h1 className="text-5xl font-bold mt-1">Gelzieny R. Martins</h1>
          <p className="text-justify text-lx my-6">
            Desenvolvedor Fullstack apaixonado por tecnologia, com mais de{' '}
            <span className="font-bold">5 anos de experiência </span> no
            desenvolvimento de soluções completas, desde o backend eficiente até
            interfaces de usuário atraentes e funcionais. Tenho como missão
            liderar equipes técnicas em projetos desafiadores, entregando
            software de alta qualidade. Estou sempre aberto a novas
            oportunidades que me permitam inovar e crescer profissionalmente.
          </p>
          <div className="flex gap-4 sm:gap-3 items-center flex-wrap sm:flex-nowrap  sm:mt-0">
            {MOCK_CONTACTS.map(({ url, icon }, index) => (
              <a
                href={url}
                key={index}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center rounded-full w-10 h-10 bg-transparent border-2 border-main-color box-shadow text-main-color hover:bg-main-color hover:text-white dark:border-main-color dark:text-main-color dark:hover:bg-main-color dark:hover:text-color-bg"
              >
                {icon}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="#"
              download
              className="inline-flex items-center gap-1 px-4 py-2 bg-main-color rounded-xl text-white-color tracking-widest font-semibold border border-transparent ease-in duration-300 hover:bg-transparent hover:text-main-color hover:border-main-color"
            >
              Download CV <MdFileDownload />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-[420px] flex justify-center mt-6 lg:mt-0 relative">
          <Image
            src="/images/user.png"
            alt="Foto de perfil da Gelzieny R. Martins"
            width={420}
            height={404}
            className="w-[420px] h-[404px] rounded-[10%] lg:w-[404px] mb-6 lg:mb-0 shadow-[0px_0px_68px_7px_rgba(75,45,187,0.4)] object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:animate-wiggle"
          />
        </div>
      </div>
    </section>
  )
}
