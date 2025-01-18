import { IoMdHeart } from 'react-icons/io'

export function Footer() {
  return (
    <footer className="h-14 w-full flex items-center justify-center ">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Made with
        <IoMdHeart size={13} className="text-main-color" />
        by
        <strong className="font-medium">Gelzieny R. Martins</strong>
      </span>
    </footer>
  )
}
