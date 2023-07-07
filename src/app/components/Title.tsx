import localFont from 'next/font/local'

interface Props {
  className?: string
}

const lot = localFont({
  src: '../../../public/fonts/Lot-Regular.woff2',
  display: 'swap',
  variable: '--font-lot',
})

export default function Title({ className }: Props) {
  return (
    <h1
      className={`font-main bg-gradient-to-br  from-stone-900 to-stone-800 bg-clip-text  font-lot tracking-widest text-transparent ${className} ${lot.className}`}
    >
      ROLE
    </h1>
  )
}
