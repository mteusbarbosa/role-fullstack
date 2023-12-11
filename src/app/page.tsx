import Header from './components/Header'
import Title from './components/Title'

export default function Home() {
  return (
    <main
      className="h-full min-h-screen bg-gradient-to-r from-yellow-600 to-red-600"
      // style={{ backgroundImage: `url("gradient.jpeg")` }}
    >
      <Header />
      <div className="mt-20 flex flex-col items-center">
        <Title className="text-9xl" />
        <h2 className="font-main text-center text-5xl font-normal text-black">
          <span className="inline-block md:block">Encontre eventos</span>
          <span className="inline-block md:block">gratuitos em sua cidade</span>
        </h2>

        <div className="relative mb-3" data-te-input-wrapper-init>
          <input
            type="text"
            className="peer-focus:text-primary dark:peer-focus:text-primary peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput1"
            placeholder="Example label"
          />
          <div className="relative flex h-12 w-full min-w-fit items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg">
            <div className="grid h-full w-12 place-items-center text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-64 pr-2 text-sm text-gray-700 outline-none"
              type="text"
              id="search"
              placeholder="Pesquise o nome da sua cidade"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
