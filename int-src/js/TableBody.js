import { useState, useEffect } from 'react'
import Loader from './Loader'
import Error from './Error'

const TableBody = ({ tableHeaders }) => {
  const [launches, setLaunches] = useState([])
  const [rockets, setRockets] = useState([])
  const [sites, setSites] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    Promise.all([
      fetch('https://api.spacexdata.com/v4/launches/').then((res) => res.json()),
      fetch('https://api.spacexdata.com/v4/rockets').then((res) => res.json()),
      fetch('https://api.spacexdata.com/v4/launchpads').then((res) => res.json())
    ])
      .then(([launchData, rocketData, siteData]) => {
        setLaunches([...launchData])
        setRockets([...rocketData])
        setSites([...siteData])
      })
      .catch(() => setError(true))
  }, [])

  return (
    <tbody aria-live='polite'>
      {
        launches.length > 0 ? (
          launches.map((launch) => {
            return (
              <tr key={ launch.name }>
                <td data-label={ tableHeaders[0] }>{ launch.name }</td>
                <td data-label={ tableHeaders[1] }>
                  {
                    launch.links.patch.small ? (
                      <img
                        src={ launch.links.patch.small }
                        alt={ launch.name + ' Mission Patch' }
                      />
                    ) : (
                      'No patch available.'
                    )
                  }
                </td>
                <td data-label={ tableHeaders[2] }>
                  {
                    rockets.find((rocket) => rocket.id === launch.rocket)?.name || 'N/A'
                  }
                </td>
                <td data-label={ tableHeaders[3] }>
                  {
                    sites.find((site) => site.id === launch.launchpad)?.full_name || 'N/A'
                  }
                </td>
                <td data-label={ tableHeaders[4] }>
                  {
                    new Date(launch.date_local)?.getFullYear() || 'N/A'
                  }
                </td>
                <td data-label={ tableHeaders[5] }>
                  {
                    launch.success
                      ? 'Yes'
                      : launch.success === null
                        ? 'N/A'
                        : 'No' }
                </td>
                <td data-label={ tableHeaders[6] }>
                  {
                    launch.details
                      ? launch.details
                      : `No details available${new Date() < new Date(launch.date_local) ? ' yet' : ''}.`
                  }
                </td>
              </tr>
            )
          })
        ) : error ? (
          <Error columns={ tableHeaders.length } />
        ) : (
          <Loader columns={ tableHeaders.length } />
        ) }
    </tbody>
  )
}


export default TableBody