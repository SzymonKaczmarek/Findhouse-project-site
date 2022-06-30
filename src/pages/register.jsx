import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'

export default function Login() {
  return (
    <>
      <Head>
        <title>Demo - Findhouse.pl</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">
          <Link href="/">
            <a>
              <Logo className="mb-2 h-10 w-auto" />
            </a>
          </Link>
          <h2 className="mt-16 text-lg font-semibold text-gray-900">
            Zapoznaj się z naszym systemem.
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Jeśli niemasz jeszcze dostępu do demo skontaktuj się z nami a zaprezentujemy Tobie ideę naszej platwformy
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-6">
            <form action="#" method="" className="space-y-7">
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <Input
                  label="Imię"
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="given-name"
                  required
                />
                <Input
                  label="Nazwisko"
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </div>
              <Input
                label="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <Input
                label="Hasło"
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full rounded-full border border-transparent bg-yellow-400 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Skontaktuj się <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
