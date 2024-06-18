import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-600">
                        But don't worry, you can find plenty of other things starting from our dashboard.
                    </p>
                    <Link to={'/admin/dashboard'}>
                        <button className="text-[#FBDAC6] bg-[#283280] hover:bg-[#283299] py-2.5 px-5 w-1/2 rounded-lg text-sm mt-20">
                            Back to Dashboard
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
