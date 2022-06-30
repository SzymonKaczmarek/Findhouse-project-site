import { Container } from '@/components/Container'



export default function cta() {

  return (
    <div className=" w-screen bg-zinc-100 py-12">
      <Container>
        <section>
          <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="relative rounded-2xl px-6 py-10 bg-emerald-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
              <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                  <path class="text-emerald-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                  <path class="text-emerald-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                </svg>
              </div>
              <div class="relative">
                <div class="sm:text-center">
                  <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                    Chcesz zobaczyć więcej? 
                    </h2>
                  <p class="mt-6 mx-auto max-w-2xl text-lg text-emerald-200">
                    Jeśli chcesz dowiedzieć się więcej o naszym projekcie, serdecznie zapraszamy do kontaktu!
                    </p>
                </div>
                <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="cta-email" class="sr-only">
                      E-mail
                    </label>
                    <input id="cta-email" type="email" class="block w-full border border-transparent rounded-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600" placeholder="" />
                  </div>
                  <div class="mt-4 sm:mt-0 sm:ml-3">
                    <button type="submit" class="block w-full rounded-full border border-transparent px-5 py-3 bg-yellow-400 text-base font-medium text-black shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600 sm:px-10">
                      Umów się na rozmowę
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
