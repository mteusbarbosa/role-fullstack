import { UserCircle2 } from 'lucide-react'

interface Props {
  className?: string
}

export default function Login({ className }: Props) {
  return (
    <>
      <div className={className}>
        Login
        <UserCircle2 className="ml-2 inline" />
      </div>
    </>
  )
}
