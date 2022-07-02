import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'

{/* <form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact"><input>

  <Input
    label="Imię"
    id="first_name"
    name="first_name"
    type="text"
    autoComplete="given-name"
    required
  /> */}
              
export default function Login() {
  return (
    <>
      <Head>
        <title>Demo - Findhouse.pl</title>
      </Head>
     
        <div className="bg-gray-100 h-screen -mt-12 sm:mt-0">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl rounded-2xl">
              <h2 className="sr-only">Skontaktuj się z nami</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative overflow-hidden py-10 px-6 bg-emerald-700 sm:px-10 xl:p-12 rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl ">
                  <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
s
                  </div>
                  <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">

                  </div>
                  <div className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">

                  <h3 className="text-lg font-medium text-white">
                    Chcesz wiedzieć więcej o naszym projkecie? 
                    </h3>
                  <p className="mt-6 text-base text-emerald-50 max-w-3xl">
          Jeśli zaintereoswaliśmy cię pomysłem na Finfhouse, prosimy zostaw nam swoje dane kontaktowe a odezwiemy się jak najszybciej aby nawiązać współprace
                    </p>
                    <dl className="mt-8 space-y-6">
                    <dt><span className="sr-only">Phone number</span></dt>
                    <dd className="flex text-base text-emerald-50">
                     
                      <span className="ml-3">
                      790 266 400
                      </span>
                    </dd>
                  <dt><span className="sr-only">Phone number</span></dt>
                  <dd className="flex text-base text-emerald-50">
                  
                    <span className="ml-3">
                      794 790 373
                    </span>
                  </dd>
                    <dt><span className="sr-only">Email</span></dt>
                    <dd className="flex text-base text-emerald-50">
         
                    
                      <span className="ml-3">biuro@findhouse.pl</span>
                    </dd>
                  </dl>
                  <ul role="list" className="mt-8 flex space-x-12">
                
                  </ul>
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                <form action="#" name='contact-form' method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <input type="hidden" name="form-name" value="contact-form"></input>
                    <div>
          
                      <div className="mt-1">
                        
                        <Input label="Imię" type="text" name="first-name" id="first-name" autocomplete="given-name" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-full" />
                      </div>
                    </div>
                    <div>
        
                      <div className="mt-1">
                        
                        <Input label="Nazwisko" type="text" name="last-name" id="last-name" autocomplete="family-name" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-full" />
                      </div>
                    </div>
                    <div>

                      <div className="mt-1">
                        
                        <Input label="Email" id="email" name="email" type="email" autocomplete="email" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-full" />
                      </div>
                    </div>
                    <div>

                      <div className="mt-1">
                        
                        <Input label="Telefon" type="text" name="phone" id="phone" autocomplete="tel" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-full" aria-describedby="phone-optional" />
                      </div>
                    </div>
                    {/* <div className="sm:col-span-2">
    
                      <div className="mt-1">
                        
                        <Input label="Temat" type="text" name="subject" id="subject" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 border-gray-300 rounded-full" />
                      
            
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
               
                        <span id="message-max" className="text-sm text-gray-500">Max. 500 characters</span>
                      </div>
                      <div className="mt-1">
                        <textarea id="message" name="message" rows="4" className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-emerald-500 focus:border-emerald-500 border border-gray-300 rounded-2xl" aria-describedby="message-max"></textarea>
                      </div>
                    </div> */}
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button type="submit" className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-black bg-yellow-400 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:w-auto">
                        Napisz!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
