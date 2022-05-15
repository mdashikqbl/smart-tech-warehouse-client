import { useEffect, useState } from "react"

const useInventorys = () => {
    const [inventory, setInventorys] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-chamber-00283.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventorys(data));
    }, [])
    return [inventory, setInventorys]
}

export default useInventorys;