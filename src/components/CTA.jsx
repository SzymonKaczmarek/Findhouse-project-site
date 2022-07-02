import { Container } from '@/components/Container'
import { Input } from '@/components/Input'

export default function cta() {
  return (
    <div className=" w-screen bg-zinc-100 py-12">
      <Container>
        <section id="cta">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="relative rounded-2xl px-6 py-10 bg-emerald-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                  <path className="text-emerald-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                  <path className="text-emerald-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                </svg>
              </div>
              <div className="relative">
                <div className="sm:text-center">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Chcesz zobaczyć więcej? 
                    </h2>
                  <p className="mt-6 mx-auto max-w-2xl text-lg text-emerald-200">
                    Jeśli chcesz dowiedzieć się więcej o naszym projekcie, serdecznie zapraszamy do kontaktu. Zostaw nam swój e-mail a odpiszemy z propozycją spotkania.
                    </p>
                </div>
                <form className="mt-12 sm:mx-auto sm:max-w-lg sm:flex" name="email" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="email" />
                  <div className="min-w-0 flex-1">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-3">
                    <button type="submit" className="block w-full rounded-full border border-transparent px-5 py-3 bg-yellow-400 text-base font-medium text-black shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 sm:px-10">
                      Zostaw swój e-mail
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
