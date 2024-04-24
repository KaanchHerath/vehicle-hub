import React from 'react'
import BookNowCard from './BookNowCard'
import BookingStrip2 from './BookingStrip/BookingStrip2'
import SearchStrip from './BookingStrip/SearchStrip'
import Aqua from '../../assets/vehicles/aqua.png'
import FilterCard from './Filtercard'

const data = [
    {
        key: '001',
        name: 'Toyota aqua',
        type: 'SUV',
        imageSrc: Aqua,
        imageAlt: 'Toyota Aqua',
        year: '2017',
        transmission: 'Manual',
        capacity: '6 Persons',
        price: '15 000'
    },
    {
        key: '002',
        name: 'Toyota prius',
        type: 'SUV',
        imageSrc: Aqua,
        imageAlt: 'Toyota Aqua',
        year: '2017',
        transmission: 'Manual',
        capacity: '6 Persons',
        price: '15 000'
    },
    {
        key: '002',
        name: 'Toyota prius',
        type: 'SUV',
        imageSrc: Aqua,
        imageAlt: 'Toyota Aqua',
        year: '2017',
        transmission: 'Manual',
        capacity: '6 Persons',
        price: '15 000'
    },
    {
        key: '002',
        name: 'Toyota prius',
        type: 'SUV',
        imageSrc: Aqua,
        imageAlt: 'Toyota Aqua',
        year: '2017',
        transmission: 'Manual',
        capacity: '6 Persons',
        price: '15 000'
    },
    {
        key: '002',
        name: 'Toyota prius',
        type: 'SUV',
        imageSrc: Aqua,
        imageAlt: 'Toyota Aqua',
        year: '2017',
        transmission: 'Manual',
        capacity: '6 Persons',
        price: '15 000'
    },
    {
        key: '002',
        name: 'Toyota prius',
        type: 'SUV',
        imageSrc: Aqua,
        imageAlt: 'Toyota Aqua',
        year: '2017',
        transmission: 'Manual',
        capacity: '6 Persons',
        price: '15 000'
    }
]

export default function VehicleFleet() {
    return (
        <div>
            <div className="flex flex-row justify-center gap-[30px]">
                <div>
                    <FilterCard />
                </div>
                <div className="flex-col">
                    <div>
                        <SearchStrip />
                    </div>
                    <div className="mt-[20px]">
                        <BookingStrip2 />
                    </div>
                    <div className="flex flex-row flex-wrap justify-between mt-10 gap-5">
                        {data.map((vehicle) => (
                            <BookNowCard
                                key={vehicle.key}
                                name={vehicle.name}
                                type={vehicle.type}
                                imageSrc={vehicle.imageSrc}
                                imageAlt={vehicle.imageAlt}
                                year={vehicle.year}
                                transmission={vehicle.transmission}
                                capacity={vehicle.capacity}
                                price={vehicle.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        // <div className="flex w-full">
        //     <div className="flex w-1/4">
        //         <FilterCard />
        //     </div>
        //     <div className="flex flex-col w-3/4 items-center justify-center">
        //         <BookingStrip2 />
        //         <div className="flex flex-col mt-10 w-full max-w-screen-lg">
        //             <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        //                 {data.map(
        //                     (
        //                         vehicle // Changed variable name to avoid conflict with 'data' object
        //                     ) => (
        //                         <BookNowCard
        //                             key={vehicle.key} // Fixed key
        //                             name={vehicle.name}
        //                             type={vehicle.type}
        //                             imageSrc={vehicle.imageSrc}
        //                             imageAlt={vehicle.imageAlt}
        //                             year={vehicle.year}
        //                             transmission={vehicle.transmission}
        //                             capacity={vehicle.capacity}
        //                             price={vehicle.price}
        //                         />
        //                     )
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
