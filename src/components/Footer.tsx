import React from 'react'
import Link from 'next/link'
import { SITE_CONFIG } from '@/config/site'

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center p-10 text-primary  border-t-2 border-gray-800">
            <div className='flex flex-col justify-center items-center pb-10'>
                <h1 className='text-3xl'>💪</h1>
                <p className="font-bold pt-5">
                    {SITE_CONFIG.name}
                </p>
                <p>{SITE_CONFIG.description}</p>
                <p className='pt-5'>Copyright © 2024 - All right reserved</p>
            </div>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link className="text-gray-500" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                    </Link>
                    <Link className="text-gray-500" href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.385-1.334-1.753-1.334-1.753-1.09-0.745 0.082-0.729 0.082-0.729 1.205 0.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.304 3.495 0.998 0.108-0.775 0.418-1.305 0.762-1.604-2.667-0.3-5.467-1.333-5.467-5.93 0-1.31 0.468-2.38 1.235-3.22-0.125-0.303-0.535-1.524 0.115-3.176 0 0 1.005-0.322 3.3 1.23 0.957-0.267 1.982-0.399 3-0.404 1.017 0.005 2.042 0.137 3 0.404 2.295-1.552 3.3-1.23 3.3-1.23 0.65 1.652 0.24 2.873 0.115 3.176 0.767 0.84 1.235 1.91 1.235 3.22 0 4.61-2.8 5.625-5.475 5.92 0.43 0.371 0.815 1.102 0.815 2.222 0 1.606-0.015 2.896-0.015 3.293 0 0.32 0.22 0.694 0.825 0.577 4.767-1.587 8.205-6.084 8.205-11.385 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                    </Link>
                </div>
            </nav>
        </footer >
    )
}