import { useEffect, useState } from "react"
import { Item } from "../types"

function Homepage() {

    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(resp => resp.json())
            .then((items) => setItems(items))
    }, [])


    return (
        <main>
            <article>
                <ul>
                    {items.map(item =>
                        <li>
                            <h3>{item.title}</h3>
                            <img src={item.image} />
                        </li>
                    )}
                </ul>
            </article>
        </main>
    )
}

export default Homepage