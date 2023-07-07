// import Image from 'next/image'
import Login from '../components/Login'
import Title from './Title'

export default function Header() {
  return (
    <nav className="bg-transparent">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center">
          {/* <Image
            src="/icon.png"
            className="mr-3 h-8"
            width={20}
            height={20}https://twitter.com/home
            alt="Flowbite Logo"
          /> */}
          <Title className="text-3xl" />
        </a>

        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent">
            <li>
              <Login className=" text-black" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
