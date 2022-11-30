import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://warehouse-management-serverside-production.up.railway.app/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts]
}
export default useProducts;