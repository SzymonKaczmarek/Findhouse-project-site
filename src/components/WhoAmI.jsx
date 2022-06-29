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
      content: 'Naszym celem jest zaspokojenie potrzeb klienta kupującego nieruchomość poprzez maksymalne skrócenie czasu poświęconego na jej poszukiwanie.',
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
      className="bg-zinc-100 py-2 sm:py-3"
    >
      <Container>
        <ul className="mx-auto mt-16 max-w-xl lg:mt-20 lg:max-w-none">  
          {whoami.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((whoami, whoamiIndex) => (
                  <li key={whoamiIndex}>
                    <div>

                      {whoami.swap ? (
                        <figure className='pb-2 flex items-center gap-16'>
                          <div className='relative'>
                            <Image src={whoami.image} alt="" />
                            <div className='absolute -bottom-12 left-8  bg-yellow-400 rounded-full w-48 overflow-hidden p-4 z-10 text-center'>
                              <div className='text-4xl font-bold'>{whoami.percent}</div>
                              <span className='text-xs' style={baloon}>{whoami.info}</span>
                            </div>

                          </div>
                          <div className='w-1/2'>
                            <h2 className='text-3xl font-bold mb-4'>{whoami.name}<span className="h-9 inline-block border-b-[10px] border-yellow-300">{whoami.underline}</span></h2>
                            <p className='w-2/3'>
                              {whoami.content}
                            </p>
                          </div>
                        </figure>
                      ) : (
                          <figure className='pb-2 flex items-center gap-16'>
                            <div className='w-1/2'>
                              <h2 className='text-3xl font-bold mb-4'>{whoami.name}<span className="h-9 inline-block border-b-[10px] border-yellow-300">{whoami.underline}</span></h2>
                              <p className='w-2/3'>
                                {whoami.content}
                              </p>
                            </div>
                            <div className='relative w-1/2'>
                              <div className='border-2 w-[367px] p-1 pb-0 bg-black rounded-2xl border-yellow-400'>
                                <Image src={whoami.image} alt="" className='w-full'  />
                              </div>
                              <div className='absolute -bottom-8 left-6 bg-yellow-400 rounded-full w-48 overflow-hidden p-4 z-10 text-center'>
                                <div className='text-4xl font-bold'>{whoami.percent}</div>
                                <span className='text-xs'>{whoami.info}</span>
                              </div>

                            </div>
                    
                          </figure>
                      )}
                      
                    </div>
                    {/* <figure className='pb-2 flex items-center gap-16'>
                      <div className='relative'>
                        <Image src={whoami.image} alt="" />
                        <div className='absolute -bottom-8 left-12  bg-yellow-400 rounded-full w-44 overflow-hidden p-4 z-10 text-center'>
                          <div className='text-4xl font-bold'>{whoami.percent}</div>
                          <span className='text-xs leading-3'>{whoami.info}</span>
                        </div>
                        
                      </div>
                      <div className='w-1/2'>
                        <h2 className='text-3xl font-bold mb-4'>{whoami.name}<span className="border-b-[4px] border-yellow-400">{whoami.underline}</span></h2>
                        <p>
                        {whoami.content}
                        </p>
                      </div>
                    </figure> */}
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
