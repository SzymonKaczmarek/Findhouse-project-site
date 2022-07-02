import Image from 'next/image'
import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import whoamiFamily from '@/images/whoami/whoami-family.png'
import whoamiScreen from '@/images/whoami/whoami-screen.png'

const whoami = [
  [
    {
      name: 'Czym jest ',
      underline: 'Findhouse?',
      content: 'FindHouse to wirtualny agent nieruchomości, umieszczony na portalu internetowym czyli jest to usługa w realnym świecie podparta dużą ilości innowacyjnej technologii z wykorzystaniem Big Data i Machine Learning.',
      percent: '60%',
      info: 'Ilość klientów, którzy rezygnują z zakupu ze względu na długi czas poszukiwania nieruchomości.',
      image: whoamiFamily,
      swap: true,
    },
    {
      name: 'Stawiamy ',
      underline: 'na efekt.',
      content: 'Przedstawione nieruchomości będą efektem ankiety, którą każdy z naszych klientów będzie zobowiązany wypełnić.',
      percent: '40%',
      info: 'Ilość nieruchomości nieaktualnych, które nadal są widoczne na wiodących portalach.',
      image: whoamiScreen,
      swap: false,
    },
  ],
]

export function WhoAmI() {
  var baloon = {
    lineHeight: '4px',
  };

  return (
    <section
      id="whoami"
      aria-labelledby="whoami-title"
      className=" py-2 sm:py-3 bg-[#F5F4F2]"
    >
      <Container>
        <ul className="mx-auto mt-16 max-w-xl lg:mt-20 lg:max-w-none mx-5 sm:mx-0">
          {whoami.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((whoami, whoamiIndex) => (
                  <li key={whoamiIndex}>
                    <div>
                      {whoami.swap ? (
                        <figure data-aos="fade-right" className='pb-2 flex flex-col sm:flex-row items-center gap-16'>
                          <div className='relative'>
                            <Image src={whoami.image} alt="" />
                          </div>
                          <div className='w-full sm:w-1/2'>
                            <h2 className='text-3xl font-bold mb-4'>{whoami.name}<span className="h-9 inline-block border-b-[10px] border-yellow-300">{whoami.underline}</span></h2>
                            <p className='w-full sm:w-2/3'>
                              {whoami.content}
                            </p>
                          </div>
                        </figure>
                      ) : (
                        <figure data-aos="fade-left" className='pb-2 flex flex-col sm:flex-row items-center gap-16'>
                          <div className='w-full sm:w-1/2'>
                            <h2 className='text-3xl font-bold mb-4'>{whoami.name}<span className="h-9 inline-block border-b-[10px] border-yellow-300">{whoami.underline}</span></h2>
                            <p className='w-full sm:w-2/3'>
                              {whoami.content}
                            </p>
                          </div>
                          <div className='relative w-3/5'>
                            <div className=''>
                              <Image src={whoami.image} alt="" className='w-full' />
                            </div>
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
