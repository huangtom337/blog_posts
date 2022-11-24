import { useState, useEffect } from 'react'
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(null)

    useEffect(() => {
        //runs when renders
        const abortController = new AbortController()

        const fetchData = async() => {
            const res = await fetch(url, { signal: abortController.signal })
            if (!res.ok) {
                throw Error(`Error ${res.status}`)
            }
            const json = await res.json()
            setData(json)
            setErr(null)
            setIsLoading(false)
        }

        fetchData().catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setIsLoading(false)
                setErr(err.message)
            }
        })
        // fetch(url, { signal: abortController.signal })
        //     .then(res => {
        //         if (!res.ok) {
        //             throw Error(`Error ${res.status}`)
        //         } 

        //         return res.json()
        //     })
        //     .then(data => {
        //         // console.log(data)
        //         setData(data)
        //         setErr(null)
        //         setIsLoading(false)
        //     })
        //     .catch(err => {
        //         if (err.name === 'AbortError') {
        //             console.log('fetch aborted')
        //         } else {
        //             setIsLoading(false)
        //             setErr(err.message)
        //         }

        //     })
        
        return () => abortController.abort()
    },[url]) //dependency, runs when whatever is in the array changes
          //empty means never, except for first render
    return {data, isLoading, err}
}
 
export default useFetch;