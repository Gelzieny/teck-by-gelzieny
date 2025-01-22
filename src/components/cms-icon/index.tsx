type CMSIconProps = {
  icon: string
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
  const updatedSocials = icon
    .replace(/height="200px"/g, 'height="24px"')
    .replace(/width="200px"/g, 'width="24px"')

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: updatedSocials,
      }}
    />
  )
}
