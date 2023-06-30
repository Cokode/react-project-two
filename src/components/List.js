export default function List({items}) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.field}> 
                <span>{item.field}:</span> 
                <span>{item.value}</span></li>
            ))} 
        </ul>
    )
}
