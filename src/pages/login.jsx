import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'

export default function Login() {
  return (
    <>
      <Head>
        <title>Demo - Findhouse</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">
          <Link href="/">
            <a>
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="224.735" height="48.228" viewBox="0 0 224.735 48.228">
                  <g id="logo_findhouse" transform="translate(-401.269 773.688)">
                    <path id="Path_34" data-name="Path 34" d="M3.782-23.987h5.31v-8.819h6.645v-4.13H9.092v-4.6h8.881v-4.254H3.782Zm16.024,0h5.31V-41.315h-5.31Zm2.671-19.129a2.923,2.923,0,0,0,3.136-2.857,2.928,2.928,0,0,0-3.136-2.888,2.938,2.938,0,0,0-3.167,2.888A2.933,2.933,0,0,0,22.476-43.116ZM39.959-23.987h5.279V-34.111c0-4.658-2.671-7.391-6.676-7.391a6.354,6.354,0,0,0-5.248,2.484v-2.3H28v17.328h5.31V-33.4c0-2.36,1.3-3.664,3.323-3.664s3.323,1.3,3.323,3.664Zm6.956-8.695c0,5.465,3.385,8.943,7.639,8.943A5.993,5.993,0,0,0,59.9-26.472v2.484h5.31v-22.98H59.9v8.043a6.361,6.361,0,0,0-5.341-2.64C50.3-41.563,46.915-38.148,46.915-32.682Zm12.98.031c0,2.764-1.77,4.285-3.789,4.285-1.987,0-3.789-1.553-3.789-4.316s1.8-4.254,3.789-4.254C58.125-36.936,59.9-35.415,59.9-32.651Zm21.768,8.664h5.31v-21.8h-5.31v8.54H73.4v-8.54h-5.31v21.8H73.4v-8.974h8.26Zm25.122-8.664c0-5.5-3.913-8.912-9.005-8.912-5.062,0-9.005,3.416-9.005,8.912s3.851,8.912,8.943,8.912S106.786-27.155,106.786-32.651Zm-12.608,0c0-2.95,1.677-4.316,3.6-4.316,1.863,0,3.6,1.366,3.6,4.316,0,2.919-1.77,4.316-3.664,4.316C95.793-28.335,94.178-29.732,94.178-32.651Zm31.581-8.664h-5.31v9.409c0,2.36-1.3,3.664-3.354,3.664-1.987,0-3.323-1.3-3.323-3.664v-9.409h-5.279v10.123c0,4.627,2.7,7.391,6.708,7.391a6.314,6.314,0,0,0,5.248-2.546v2.36h5.31Zm16.924,12.3c-.093-6.459-9.471-4.5-9.471-7.266,0-.838.683-1.335,1.925-1.335a2.284,2.284,0,0,1,2.546,1.956h4.906c-.342-3.416-2.826-5.9-7.3-5.9-4.534,0-7.049,2.422-7.049,5.372,0,6.366,9.44,4.347,9.44,7.142,0,.776-.714,1.4-2.081,1.4a2.432,2.432,0,0,1-2.671-2.018h-5.248c.248,3.354,3.354,5.931,7.981,5.931C140.013-23.739,142.684-26.006,142.684-29.018Zm9.937-8.291a3,3,0,0,1,3.261,2.981h-6.645A3.284,3.284,0,0,1,152.621-37.309Zm8.291,7.577H155.26a2.823,2.823,0,0,1-2.764,1.677c-1.708,0-3.105-1.056-3.292-3.323h12.018a13.42,13.42,0,0,0,.093-1.553c0-5.279-3.571-8.633-8.633-8.633-5.155,0-8.757,3.416-8.757,8.912s3.664,8.912,8.757,8.912A8.1,8.1,0,0,0,160.912-29.732Z" transform="translate(447.653 -713.375)" fill="#2c2c2c" />
                    <g id="Group_49" data-name="Group 49" transform="translate(401.269 -773.688)">
                      <path id="Path_1" data-name="Path 1" d="M16.991,0A16.991,16.991,0,0,1,33.982,16.991c0,4.645.172,16.811-.047,17.028-.384.332-12.206-.037-16.944-.037A16.991,16.991,0,0,1,16.991,0Z" transform="translate(24.153 0) rotate(45)" fill="#2c2c2c" />
                      <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="13.002" cy="13.262" rx="13.002" ry="13.262" transform="translate(11.149 10.759)" fill="#fff" />
                      <path id="Path_2" data-name="Path 2" d="M9.882,0a9.882,9.882,0,0,1,9.882,9.882c0,5.457-1.7,3.213-9.882-1.582C1.226,13.419,0,15.339,0,9.882A9.882,9.882,0,0,1,9.882,0Z" transform="translate(14.269 14.4)" fill="#f8d23a" />
                      <path id="Union_1" data-name="Union 1" d="M14.608,3.81V0L29.215,8.935,27.61,11.611ZM0,8.935,14.608,0V3.81l-13,7.8Z" transform="translate(9.761 20.509)" fill="#2c2c2c" />
                      <g id="Group_1" data-name="Group 1" transform="translate(21.55 28.442)">
                        <rect id="Rectangle_1" data-name="Rectangle 1" width="2.6" height="2.6" fill="#2c2c2c" />
                        <rect id="Rectangle_2" data-name="Rectangle 2" width="2.6" height="2.6" transform="translate(3.12)" fill="#2c2c2c" />
                        <rect id="Rectangle_3" data-name="Rectangle 3" width="2.6" height="2.6" transform="translate(0 3.12)" fill="#2c2c2c" />
                        <rect id="Rectangle_4" data-name="Rectangle 4" width="2.6" height="2.6" transform="translate(3.12 3.12)" fill="#2c2c2c" />
                      </g>
                    </g>
                    <path id="Path_35" data-name="Path 35" d="M4.014-11.369a1.347,1.347,0,0,0-1.44-1.34,1.351,1.351,0,0,0-1.454,1.34,1.346,1.346,0,0,0,1.454,1.311A1.342,1.342,0,0,0,4.014-11.369ZM7.449-17v-1.126H5.011V-6.38H7.449v-4.9A2.861,2.861,0,0,0,9.9-10.058c1.953,0,3.506-1.6,3.506-4.105S11.853-18.24,9.9-18.24A2.8,2.8,0,0,0,7.449-17Zm3.478,2.837a1.8,1.8,0,0,1-1.753,1.981,1.784,1.784,0,0,1-1.739-1.967,1.784,1.784,0,0,1,1.739-1.967A1.773,1.773,0,0,1,10.927-14.163Zm3.321,3.991h2.437V-20.72H14.248Z" transform="translate(609.318 -727.19)" fill="#2c2c2c" />
                  </g>
                </svg>
              </div>
            </a>
          </Link>

          <h2 className="mt-16 text-lg font-semibold text-gray-900">
           Zalohguj się do wersji demo findhouse.pl
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Jeśli niemasz dostępu do demo skontaktuj się z nami a zaprezentujemy Tobie ideę naszej platwformy
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-6">
            <form action="#" method="POST" className="space-y-7">
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
                autoComplete="current-password"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full rounded-full border border-transparent bg-yellow-400 py-4 px-4 text-sm font-semibold text-black shadow-xl hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Zaloguj się <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
