import RequestVehicle from '../../components/front/RequestVehicle'
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Detailcar from '../../components/front/VehicleFleetSingle/Detailcar'
import FeedBack from '../../components/front/VehicleFleetSingle/FeedBack'
import CheckList from '../../components/front/VehicleFleetSingle/CheckList'
import ImageShowCase from '../../components/front/VehicleFleetSingle/ImageShowCase'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageNotFound from '../../components/front/PageNotFound'

export default function VehicleFleetSingle() {
    const { id } = useParams()
    const location = useLocation()
    const { startDate, startTime, endDate, endTime } = location.state || {}
    const [vehicleData, setVehicleData] = useState({})

    console.log('vehicleId', id)

    const reservation = {
        name: 'Toyota Aqua',
        transmission: 'Manual',
        capacity: '6 Person',
        engine: '1500cc',
        mileage: '15km/l',
        fuel: 'Petrol',
        year: '2017',
        colour: 'White',
        rate: '15 000',
        // sdate: '12/12/2024',
        // stime: '12:00 PM',
        // edate: '12/13/2024',
        // etime: '12:00 PM'
        sdate: startDate,
        stime: startTime,
        edate: endDate,
        etime: endTime
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5062/api/Vehicle/${id}`)
                setVehicleData(response.data)
                console.log('Fetched Vehicle:', response.data)
            } catch (error) {
                console.error('Failed to fetch vehicle data:', error)
            }
        }

        fetchData()
    }, [id])

    function formatDate(date) {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            console.error('Invalid date:', date)
            return 'Invalid date'
        }

        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')

        return `${year}/${month}/${day}`
    }

    console.log('Vehicle Data:', vehicleData)
    if (!vehicleData.registrationNumber) {
        console.log('No vehicle data')
        return <PageNotFound />
    }

    return (
        <div className="flex gap-4 flex-row">
            <div className="flex flex-col w-1/2">
                <ImageShowCase id={id} />
                <CheckList id={id} />
                <FeedBack id={id} />
            </div>
            <div className="flex flex-col w-1/2">
                <Detailcar
                    id={id}
                    vehicle={reservation.name}
                    transmission={reservation.transmission}
                    capacity={reservation.capacity}
                    engine={reservation.engine}
                    mileage={reservation.mileage}
                    fuel={reservation.fuel}
                    year={reservation.year}
                    colour={reservation.colour}
                    rate={reservation.rate}
                    sdate={formatDate(reservation.sdate)}
                    stime={reservation.stime}
                    edate={formatDate(reservation.edate)}
                    etime={reservation.etime}
                />
            </div>
        </div>
    )
}
