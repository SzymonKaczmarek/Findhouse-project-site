import Image from 'next/image'
import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import BigDataFirst from '@/images/bigdata/BigDataFirst.png'
import BigDataFirst2 from '@/images/bigdata/BigDataFirst2.png'
import BigDataSecond from '@/images/bigdata/BigDataSecond.png'
import BigDataThird from '@/images/bigdata/BigDataThird.png'
import whoamiScreen from '@/images/whoami/whoami-screen.png'

const whoami = [
  [
    {
      name: 'Czym jest ',
      underline: 'Findhouse?',
      content:
        'Naszym celem jest zaspokojenie potrzeb klienta kupującego nieruchomość poprzez maksymalne skrócenie czasu poświęconego na jej poszukiwanie.',
      percent: '60%',
      info: 'Ilość klientów, którzy rezygnują z zakupu ze względu na długi czas poszukiwania nieruchomości.',
      image: '',
      swap: true,
    },
    {
      name: 'Stawiamy ',
      underline: 'na efekt.',
      content:
        'Przedstawione nieruchomości będą efektem ankiety, którą każdy z naszych klientów będzie zobowiązany wypełnić.',
      percent: '40%',
      info: 'Ilość nieruchomości nieaktualnych, które nadal są widoczne na wiodących portalach.',
      image: whoamiScreen,
      swap: false,
    },
  ],
]

export function BigData() {
  var baloon = {
    lineHeight: '4px',
  }

  return (
    <section id="whoami" className="bg-zinc-100 py-2 sm:py-3">
      <Container data-aos="fade-left">
        <ul className="mx-auto mb-20 mt-16 max-w-xl lg:mt-20 lg:max-w-none mx-5 sm:mx-0">
          {whoami.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((whoami, whoamiIndex) => (
                  <li key={whoamiIndex}>
                    <div>
                      {whoami.swap ? (
                        <figure className="mb-12 flex flex-col sm:flex-row items-center gap-16 pb-2">
                          <div className="w-full sm:w-1/2">
                            <h2 className="mb-4 text-3xl font-bold">
                              <span className="inline-block h-9 border-b-[10px] border-yellow-300">
                                Big data
                              </span> i Machine Learning.
                            </h2>
                            <p className="w-full sm:w-2/3">{whoami.content}</p>
                          </div>
                          <div className="relative hidden sm:block w-full sm:w-1/2">
                            <div className="relative w-[367px] ">
                              <Image
                                src={BigDataFirst}
                                alt=""
                                className="z-10 w-full "
                              />
                              <div className=" absolute -right-12 -top-8 z-0 h-48 w-48 overflow-hidden rounded-full bg-yellow-400 p-4 text-center"></div>
                              {/* <div className="h-15  w-15 absolute  -bottom-8 left-12   z-10">
                                <Image
                                  src={BigDataSecond}
                                  alt=""
                                  height={90}
                                  width={90}
                                />
                              </div> */}
                            </div>
                          </div>
                        </figure>
                      ) : (
                        <figure className="flex flex-col sm:flex-row items-center gap-16 pb-2">
                          <div className="relative">
                            <Image src={BigDataThird} alt="" />
                          </div>
                          <div className="w-full sm:w-1/2">
                            <h2 className="mb-4 text-3xl font-bold">
                              <span className="font-normal">
                                Od kliknięcia{' '}
                              </span>
                              <span className="inline-block h-9 border-b-[10px] border-yellow-300">
                                do zakupu
                              </span>
                            </h2>
                            <p className="w-full sm:w-2/3">
                              Naszym celem jest zaspokojenie potrzeb klienta kupującego nieruchomość poprzez maksymalne skrócenie czasu poświęconego na jej poszukiwanie.
                            </p>
                          </div>
                        </figure>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
