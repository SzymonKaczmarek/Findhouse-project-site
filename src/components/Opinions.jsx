import { Container } from '@/components/Container'
import bg from '@/images/opinions/bg.svg'
import Image from 'next/image'

export default function Opinions() {
  return (
    <div className="w-screen bg-white pb-16" id='opinions'>
      <Container>
        <h2 className=" mb-8 mt-12 text-center text-3xl	font-bold">
          <span className="inline-block sm:h-9 sm:border-b-[10px] border-yellow-300">
            Opinie naszych klientów
          </span>
        </h2>
        <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 overflow-hidden bg-white">
          <div>
            <div className="relative flex">
              <div className="mr-3">
                <img
                  className="h-24 w-24 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="pt-2 text-xl font-bold">
                HANNA I JACEK ŁĘGOWSCY
                <div className="font-normal">Klient - grupa testowa</div>
              </div>
              <Image src={bg} />
            </div>
            <div className="mt-5">
              <span className="text-sm leading-3	">
                Pragniemy gorąco podziękować pani Katarzynie Jankowskiej za pomoc w kupnie mieszkania. Przeprowadziła nas przez kolejne kroki kupna mieszkania. Wskazywała nam, na co zwracać uwagę podczas jego kupna. Wskazywała plusy i minusy obiektu (komunikacja, deweloper). Wykazała się fachową wiedzą, profesjonalizmem. W każdej porze dnia służyła pomocą, korzystaliśmy z jej wiedzy odnośnie kredytów mieszkaniowych. Doradzała nam na jakich warunkach korzystnie wybrać kredyt mieszkaniowy. To bardzo
                ważne mieć pomocną dłoń. Dzięki jej pomocy spokojniej podejmowaliśmy kolejne decyzje. Była z nami również podczas przekazywania mieszkania.
                Jesteśmy zadowoleni ze współpracy z Panią Katarzyną.
              </span>
            </div>
          </div>{' '}
          <div>
            <div className="flex">
              <div className="mr-3">
                <img
                  className="h-24 w-24 rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="pt-2 text-xl font-bold">
                ALEKSANDER LACH
                <div className="font-normal">Klient - grupa testowa</div>
              </div>
              <Image src={bg} />
            </div>
            <div className="mt-5">
              <span className="text-sm leading-3	">
                Zdecydowanie polecam współpracę! Pani Kasia Jankowska jest profesjonalistką w swoim fachu. Tak jak 4 lata temu pomogła mnie i mojej żonie w kupnie jednego mieszkania, tak teraz świetnie poradziła sobie ze sprzedażą drugiego. Mam wrażenie, że zawsze wychodzi poza pewne ramy i pomaga ‚nadprogramowo’, za co bardzo dziękuję. Następnym razem również będę wiedział, do kogo się zgłosić!
              </span>
            </div>
          </div>{' '}
          <div>
            <div className="flex">
              <div className="mr-3">
                <img
                  className="h-24 w-24 rounded-full"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="pt-2 text-xl font-bold">
                MIROSŁAWA GAŁĄZKA
                <div className="font-normal">Klient - grupa testowa</div>
              </div>
              <Image src={bg} />
            </div>
            <div className="mt-5">
              <span className="text-sm leading-3	">
                Mieliśmy przyjemność poznać Panią Kasię , która jest bardzo profesjonalną , miłą, cierpliwą, uprzejmą osobą z ogromną wiedzą , zarówno w zakresie nieruchomości jak i finansów. Niezwykle uczynna w sprawach nawet tych które jej nie dotyczyły. Wykazała dużo cierpliwości i wyrozumiałości związanych z naszym stresem  i niewiedzą. Serdecznie dziękujemy
              </span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
