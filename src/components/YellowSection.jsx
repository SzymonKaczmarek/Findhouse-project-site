import { Container } from '@/components/Container'
import Image from 'next/image'
import whoamiFamily from '@/images/whoami/whoami-family.png'
import First from '@/images/yellow/First.png'
import Second from '@/images/yellow/Second.png'
import Third from '@/images/yellow/Third.png'
import Fourth from '@/images/yellow/Fourth.png'
import Fifth from '@/images/yellow/Fifth.png'
import Pytania from '@/images/yellow/pytania.svg'

const whoami = {
  name: 'Nasza przewaga to',
  underline: 'Findhouse?',
  content:
    'Naszym celem jest zaspokojenie potrzeb klienta kupującego nieruchomość poprzez maksymalne skrócenie czasu poświęconego na jej poszukiwanie.',
  percent: '60%',
  info: 'Ilość klientów, którzy rezygnują z zakupu ze względu na długi czas poszukiwania nieruchomości.',
  image: whoamiFamily,
  swap: true,
}

export default function YellowSection() {
  var baloon = {
    lineHeight: '4px',
  }
  return (


    <div className=" w-screen bg-yellow-400 py-12">
      <Container>
        <section id="yellow"
          aria-labelledby="yellow-title">
          <figure className="flex flex-col sm:flex-row items-center gap-10 ">
            <div data-aos="fade-right"  className="w-full sm:w-3/5">
              <div className="m-0">
                <Image src={Pytania} alt="" /> 
              </div>
            </div>

            <div data-aos="fade-left"  className="relative w-full sm:w-2/5 px-5 sm:px-0">
              <h2 className="mb-4 text-3xl sm:text-5xl text-gray-800 font-bold">
                Nasza przewaga to
              
                  ANKIETA <span className="font-normal">(USP)</span>
           
              </h2>

              <ul className="marker:text-green ml-6 list-outside list-disc">
                <li className="text-md relative top-2 text-3xl text-white   ">
                  <span className="realtive sm:absolute top-2 text-base text-black">
                    Opracowywana już od 12 miesięcy!
                  </span>
                </li>

                <li className="text-md mb-13 relative text-3xl  text-white md:mb-6 xl:mb-5">
                  <span className="realtive sm:absolute top-2 text-base text-black">
                    Tworzona z zespołem psychologów i z ekspertami rynku nieruchomości.
                  </span>
                </li>

                <li className="text-md relative mb-12 text-3xl text-white md:mb-6 xl:mb-2 ">
                  <span className="realtive sm:absolute top-2 text-base text-black">
                    Unikalna - żaden inny serwis nie bada tak szeroko i w tak długiej perspektywie potrzeb użytkowników!
                  </span>
                </li>
              </ul>
            </div>
          </figure>
        </section>
      </Container>
    </div>
  )
}
