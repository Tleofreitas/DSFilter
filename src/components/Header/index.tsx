import './styles.css';
import { ContextListCount } from '../../util/context-listing';
import { useContext } from 'react';

export default function Header() {
    const { contextListCount } = useContext(ContextListCount);

    return (
        <header>
            <div className="container">
                <div className='headerComponent'>
                    <h2 className="site-name">DSFilter Thiago Freitas</h2>
                    <h3 className="products-site-count">{contextListCount} Produtos</h3>
                </div>
            </div>
        </header>
    )
}