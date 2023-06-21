import Card from '../Card';
import './styles.css';
import * as productService from '../../models/product-service';

export default function SearchResult() {
    return (
        <>
            <div className="searchResultSection">
                {
                    productService.findByPrice(0,Number.MAX_VALUE)
                        .map(product =>
                            <Card
                                key={product.id}
                                product={product}
                            />)
                }
            </div>
        </>
    )
}