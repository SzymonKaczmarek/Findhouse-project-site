import Image from 'next/image'

import { Container } from '@/components/Container'
import kartaObiektu from '@/images/screenshots/findhouse_karta_obiektu.png'
import kartaObiektuMobile from '@/images/screenshots/findhouse_karta_obiektu_mobile.png'
import backgroundImage from '@/images/background-hero.svg'

export function Hero() {
return (
<Container className="p-4  sm:h-auto sm:pt-20 sm:pb-16 text-center lg:pt-12">
      <div className="absolute w-full overflow-hidden sm:block top-32 left-1/2 -translate-x-[50%] -translate-y-[43%] -z-10">
        <Image
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        layout="fixed"
        unoptimized
      />
    </div>
    <div data-aos="fade-down" data-aos-delay="4000">
    <p  className="mx-auto font-bold mt-6 max-w-2xl inline-block text-2xl tracking-tight text-white border-yellow-400 border-b-8 h-7">
      Twój czas się liczy.
    </p>
    <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-tight text-white sm:text-7xl">
      Poznaj FindHouse
    </h1>
    <p className='text-xl font-semibold pt-2 pb-8 w-full sm:w-1/4 m-auto'>
    Jak uprościć transakcje na rynku nieruchomości?
  </p>
    </div>

    <div data-aos="fade-up" data-aos-delay="4000" data-aos-duration="1000"  className='relative mx-auto w-full sm:w-1/2 mb-14'>
      <div className="block rounded-2xl bg-black py-0.5 px-1 border-2 border-yellow-400 drop-shadow-2xl">
      <Image src={kartaObiektu} alt="" />
    </div>
    <div
      className="hidden sm:block absolute overflow-hidden -bottom-4 -right-24 rounded-2xl bg-black py-0.5 px-1 border-2 border-yellow-400">
      <Image src={kartaObiektuMobile} alt="" />
    </div>
  </div>

  <div className='sm:grid grid-cols-8 gap-0 grid-flow-col grid-rows-2 h-auto -mx-4 sm:mx-0 p-4 sm:p-0 sm:h-44 bg-white'>
    <div className=''>
      <div className="inline-block mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="71.919" height="71.919" viewBox="0 0 71.919 71.919">
          <g id="Group_64" data-name="Group 64" transform="translate(-142.021 -983.614)">
            <path id="Path_52" data-name="Path 52"
              d="M25.338,0A25.338,25.338,0,0,1,50.676,25.338c0,6.927.257,25.069-.07,25.393-.573.494-18.2-.055-25.268-.055A25.338,25.338,0,0,1,25.338,0Z"
              transform="translate(178.039 983.614) rotate(45)" fill="#2c2c2c" />
            <ellipse id="Ellipse_24" data-name="Ellipse 24" cx="19.389" cy="19.777" rx="19.389" ry="19.777"
              transform="translate(158.591 999.659)" fill="#fff" />
            <g id="Group_59" data-name="Group 59" transform="translate(0 1.025)">
              <g id="Group_58" data-name="Group 58" transform="translate(167.664 1007.684)">
                <path id="Icon_material-center-focus-strong" data-name="Icon material-center-focus-strong"
                  d="M6.79,18.238H4.5v4.579a2.3,2.3,0,0,0,2.29,2.29h4.579v-2.29H6.79Zm0-11.448h4.579V4.5H6.79A2.3,2.3,0,0,0,4.5,6.79v4.579H6.79ZM22.817,4.5H18.238V6.79h4.579v4.579h2.29V6.79A2.3,2.3,0,0,0,22.817,4.5Zm0,18.317H18.238v2.29h4.579a2.3,2.3,0,0,0,2.29-2.29V18.238h-2.29Z"
                  transform="translate(-4.5 -4.5)" fill="#2c2c2c" />
              </g>
              <path id="Icon_material-center-focus-strong-2" data-name="Icon material-center-focus-strong"
                d="M15.088,10.509a4.579,4.579,0,1,0,4.579,4.579A4.578,4.578,0,0,0,15.088,10.509Z"
                transform="translate(162.879 1002.899)" fill="#f8d23a" />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div>
      <div className='h-full mx-auto bg-green-500 w-1'></div>
    </div>
    <div>
    </div>
    <div className='text-center sm:text-left'>
      <div className='sm:-ml-10'>
      <span className="font-bold">Wygodne centrum </span> pomiędzy biurem nieruchomości a klientem
        </div>
    </div>
    <div>
      <div className="inline-block mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="71.919" height="71.919" viewBox="0 0 71.919 71.919">
          <g id="Group_65" data-name="Group 65" transform="translate(-440 -983.614)">
            <path id="Path_53" data-name="Path 53"
              d="M25.338,0A25.338,25.338,0,0,1,50.676,25.338c0,6.927.257,25.069-.07,25.393-.573.494-18.2-.055-25.268-.055A25.338,25.338,0,0,1,25.338,0Z"
              transform="translate(476.018 983.614) rotate(45)" fill="#2c2c2c" />
            <ellipse id="Ellipse_25" data-name="Ellipse 25" cx="19.389" cy="19.777" rx="19.389" ry="19.777"
              transform="translate(456.571 999.659)" fill="#fff" />
            <path id="Icon_awesome-check" data-name="Icon awesome-check"
              d="M8.491,22.854.366,14.729a1.25,1.25,0,0,1,0-1.768l1.768-1.768a1.25,1.25,0,0,1,1.768,0l5.473,5.473L21.1,4.943a1.25,1.25,0,0,1,1.768,0l1.768,1.768a1.25,1.25,0,0,1,0,1.768L10.259,22.854A1.25,1.25,0,0,1,8.491,22.854Z"
              transform="translate(463 1006.096)" fill="#f8d23a" />
          </g>
        </svg>
      </div>
    </div>
    <div>
      <div className='h-full mx-auto bg-green-500 w-1'></div>
    </div>
    <div>
    </div>
    <div className='text-center sm:text-left'>
      <div className='sm:-ml-10'>
      <span className="font-bold">Pewność doboru nieruchomości</span> pod względem oczekiwań i potrzeb.
    </div>
    </div>
    <div>
      <div className="inline-block mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="71.919" height="71.919" viewBox="0 0 71.919 71.919">
          <g id="Group_66" data-name="Group 66" transform="translate(-739.081 -983.614)">
            <path id="Path_54" data-name="Path 54"
              d="M25.338,0A25.338,25.338,0,0,1,50.676,25.338c0,6.927.257,25.069-.07,25.393-.573.494-18.2-.055-25.268-.055A25.338,25.338,0,0,1,25.338,0Z"
              transform="translate(775.099 983.614) rotate(45)" fill="#2c2c2c" />
            <ellipse id="Ellipse_26" data-name="Ellipse 26" cx="19.389" cy="19.777" rx="19.389" ry="19.777"
              transform="translate(755.651 999.659)" fill="#fff" />
            <g id="Group_60" data-name="Group 60" transform="translate(1.464 3.813)">
              <path id="Icon_material-timer" data-name="Icon material-timer" d="M17.33,28.4h3.276V14.9H17.33Z"
                transform="translate(754.231 987.763)" fill="#f8d23a" />
              <path id="Icon_material-timer-2" data-name="Icon material-timer" d="M0,13.5H3.276V0H0Z"
                transform="matrix(0.454, 0.891, -0.891, 0.454, 783.588, 1010.025)" fill="#f8d23a" />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div>
      <div className='h-full mx-auto bg-green-500 w-1'></div>
    </div>
    <div>
    </div>
    <div className='text-center sm:text-left'>
      <div className='sm:-ml-10'>
      Maksymalnie <span className="font-bold">krótki czas realizacji</span> transakcji.</div>
    </div>
    <div>
      <div className="inline-block mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="71.919" height="71.919" viewBox="0 0 71.919 71.919">
          <g id="Group_67" data-name="Group 67" transform="translate(-1036.081 -983.614)">
            <path id="Path_55" data-name="Path 55"
              d="M25.338,0A25.338,25.338,0,0,1,50.676,25.338c0,6.927.257,25.069-.07,25.393-.573.494-18.2-.055-25.268-.055A25.338,25.338,0,0,1,25.338,0Z"
              transform="translate(1072.099 983.614) rotate(45)" fill="#2c2c2c" />
            <ellipse id="Ellipse_27" data-name="Ellipse 27" cx="19.389" cy="19.777" rx="19.389" ry="19.777"
              transform="translate(1052.651 999.659)" fill="#fff" />
            <path id="Icon_open-shield" data-name="Icon open-shield"
              d="M11.715,0l-.556.264L.908,4.569,0,4.95v.908A20.732,20.732,0,0,0,4.305,18.129a18.624,18.624,0,0,0,3.661,3.749,6.439,6.439,0,0,0,3.749,1.552,6.364,6.364,0,0,0,3.749-1.552,18.624,18.624,0,0,0,3.661-3.749A20.732,20.732,0,0,0,23.43,5.857V4.95l-.908-.381L12.271.264,11.715,0Zm0,3.192V20.5a4.817,4.817,0,0,1-1.933-.908,16.192,16.192,0,0,1-3.1-3.192A18.336,18.336,0,0,1,3.1,6.795l8.61-3.573Z"
              transform="translate(1060.826 1007.721)" fill="#2c2c2c" />
          </g>
        </svg>
      </div>
    </div>
    <div>
      <div className='h-full mx-auto bg-green-500 w-1'></div>
    </div>
    <div>
    </div>
    <div className='text-center sm:text-left'>
      <div className='sm:-ml-10'>
      <span className="font-bold">Wygoda i bezpieczeństwo</span> dla klienta.</div>
  </div>
  </div>
</Container>
)
}
