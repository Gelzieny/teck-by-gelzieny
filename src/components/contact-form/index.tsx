'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../button'
import { SectionTitle } from '../section-title'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
  }

  return (
    <section
      className="px-16 md:py-32 flex items-center justify-center "
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 w-full flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nome"
            {...register('name')}
            className="w-full h-14 placeholder:text-gray-600 bg-gray-200 dark:bg-gray-800 rounded-lg dark:placeholder:text-gray-400 dark:text-gray-50 p-4 focus:outline-none focus:ring-2 ring-main-color"
          />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 placeholder:text-gray-600 bg-gray-200 dark:bg-gray-800 rounded-lg dark:placeholder:text-gray-400 dark:text-gray-50 p-4 focus:outline-none focus:ring-2 ring-main-color"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] placeholder:text-gray-600 bg-gray-200 dark:bg-gray-800 rounded-lg dark:placeholder:text-gray-400 dark:text-gray-50 p-4 focus:outline-none focus:ring-2 ring-main-color"
            {...register('message')}
            maxLength={500}
          />
          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative" disabled={isSubmitting}>
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-color-bg blur-2xl opacity-20" />
          </div>
        </form>
      </div>
    </section>
  )
}
