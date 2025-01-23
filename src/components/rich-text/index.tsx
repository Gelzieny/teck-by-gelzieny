import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

type RichTextProps = ComponentProps<typeof CMSRichText>

export function RichText({ ...props }: RichTextProps) {
  return (
    <CMSRichText
      {...props}
      renderers={{
        p: ({ children }) => (
          <p className="dark:text-gray-400 text-gray-700 text-justify">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-5 dark:text-gray-400 text-gray-700 flex flex-col gap-1">
            {children}
          </ul>
        ),
        li: ({ children }) => (
          <li className="dark:text-gray-400 text-gray-700">{children}</li>
        ),
        bold: ({ children }) => (
          <b className="text-[#0B061F] dark:text-color-bg font-bold">
            {children}
          </b>
        ),
        a: ({ children, ...props }) => (
          <a
            {...props}
            className="hover:text-main-color transition-colors underline"
          >
            {children}
          </a>
        ),
      }}
    />
  )
}
