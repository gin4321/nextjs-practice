import React from 'react';
import data from '../../utils/data';
import {useRouter} from "next/router";

export default function ProductScreen() {
    const router = useRouter()
    const {slug} = router.query
    const product = data.products.find(product => product.slug === slug)

    return !product ?
        <div>Product Not Found</div> :
        <div>
            <h1>
                {product.name}
            </h1>
        </div>
}