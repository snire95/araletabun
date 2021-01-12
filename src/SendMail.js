import items from './data';







FunFetch = async (location, information) =>{
    const response = await fetch(location, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(information),
        cache: "no-cache",
        headers: new Headers({"content-type": "application/json"})
    })
    console.log(location)
    const data = await response.json()
    StatusFetch(response.status)
    CatchFetch(response.status)
    return data
}

