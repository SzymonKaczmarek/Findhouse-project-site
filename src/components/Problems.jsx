import Image from 'next/image'
import { Container } from '@/components/Container'

import backgroundImage from '@/images/background-problems.png'

export function Problems() {
  return (
    <section
      id="problems"
      aria-labelledby="problems-title"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32">
      <div className="absolute top-0 left-0 ">
        <Image
          src={backgroundImage}
          alt=""
          width={1919}
          height={636}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="p-20 bg-red-500">

  asdasdad

        </Container>
    </section>
  )
}
