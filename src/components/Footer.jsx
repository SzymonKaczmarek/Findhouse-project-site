import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          {/* <Logo className="mx-auto h-10 w-auto" /> */}
          <nav className="mt-10 text-sm" aria-label="quick links">
            <ul className="-my-1 flex justify-center space-x-6">
              <li>
                <Link href="#whoami">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    O Nas
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#yellow">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Możliwości
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#yellow">
                  <a className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                    Możliwości
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='pt-6 pb-6 border-t border-t-zinc-200 text-gray-500 text-sm text-center'>
          FindHouse 2022. All rights reserved
        </div>

      </Container>
    </footer>
  )
}
