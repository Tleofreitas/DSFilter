import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function Card({ product }: Props) {
    return (
        <>
            <div className='cardResult'>
                <p className='productTitle'>{product.name}</p>
                <p className='productPrice'><b>R$ {product.price.toFixed(2)}</b></p>
            </div>
        </>
    )
}