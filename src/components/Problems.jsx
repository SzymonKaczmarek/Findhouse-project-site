import Image from 'next/image'
import { Container } from '@/components/Container'

import backgroundImage from '@/images/background-problems.png'
// import pipol from '@/images/problems/pipol.png'

export function Problems() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-title"
      className="relative overflow-hidden bg-zinc-800 pt-20 pb-28 sm:py-32 z-10">
      <div className="absolute hidden sm:block top-0 left-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          width={1919}
          height={636}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="z-20">
        <div className='grid grid-cols-1 sm:grid-cols-2 text-white'>
          <div className='mb-10 sm:mb-0'>
            <h3 className='font-bold text-2xl pb-6 pl-6'>Problemy klientów</h3>
            <ul className='list-disc px-6'>
              <li className='pb-4 text-yellow-400'>
                <span className='text-white'>
                Zbyt duży wybór ofert uniemożliwiający podjęcie optymalnej decyzji
                </span>
                </li>
              <li className='pb-4 text-yellow-400'>
                <span className='text-white'>
                Za dużo nieaktualnych ofert na rynku Skutkiem tego jest poszukiwanie nieruchomości nawet do 12 miesięcy
                </span>
                </li>
            </ul>
          </div>
          <div className='mb-10 sm:mb-0'>
            <h3 className='font-bold text-2xl pb-6 pl-6'>Problemy biur nieruchomości</h3>
            <ul className='list-disc px-6'>
            <li className='pb-4 text-yellow-400'>
              <span className='text-white'>
              Duża ilość ofert, jakie trzeba pokazać klientowi przed wyborem tej konkretnej odpowiadającej oczekiwaniom i potrzebom
              </span>
              </li>
            <li className='pb-4 text-yellow-400'>
              <span className='text-white'>
              Za długi czas wyboru nieruchomości przez klienta
              </span>
              </li>
            <li className='pb-4 text-yellow-400'>
              <span className='text-white'>
              Pozyskiwanie nieruchomości, czyli kluczowy element pracy biura jest coraz trudniejsze i najbardziej problematyczne dla agentów. (zimne telefony)
            </span>
            </li>
            </ul>
          </div>
        </div>


 
        </Container>
    </section>
  )
}
