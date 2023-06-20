import Search from '../Search';
import SearchResult from '../SearchResult';
import './styles.css';

export default function Body() {
    return (
        <>
            <main className='body-section'>
                <section className="container">
                    <Search />
                    <SearchResult />
                </section>
            </main>
        </>
    )
}