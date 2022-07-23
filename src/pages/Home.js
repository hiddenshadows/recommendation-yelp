import {useLoadScript } from @react-google-maps/api
export default function Home() {
    const {isLoaded} = useLoadScript({
      googleMapsApiKey = "DO NOT EXPOSE KEY TO PUBLIC",
    })
    return (
        <h1>Home Page</h1>
    )
}