import {useLoadScript } from @react-google-maps/api
export default function Home() {
    const {isLoaded} = useLoadScript({
      googleMapsApiKey = "AIzaSyCIFeFzI08oLUYzy3blkAdkdlMHGG5CEcc",
    })
    return (
        <h1>Home Page</h1>
    )
}