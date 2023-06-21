import { useEffect, useState } from 'react';
import Search from '../Search';
import SearchResult from '../SearchResult';
import './styles.css';
import * as productServive from '../../models/product-service';
// import { ProductDTO } from '../../models/product';

// const [products, setProducts] = useState<ProductDTO[]>();

const [min, setMin] = useState(0);
const [max, setMax] = useState(Number.MAX_VALUE);

useEffect(() => {
    productServive.findByPrice(min,max);
},[min,max]);

function handleSearch(searchMin: number, searchMax: number) {
    setMin(searchMin);
    setMax(searchMax);
}

export default function Body() {
    return (
        <>
            <main className='body-section'>
                <section className="container">
                    <Search onSearch={handleSearch}/>
                    <SearchResult />
                </section>
            </main>
        </>
    )
}