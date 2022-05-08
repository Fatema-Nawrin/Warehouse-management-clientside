import { useEffect, useState } from "react"

const useDetails = productId => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://murmuring-caverns-68130.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])
    return [product];
}
export default useDetails;