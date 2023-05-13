import { useAddress } from "@thirdweb-dev/react";

export default function Home() {
    const address = useAddress();

    return <pre>{address}</pre> }