import './styles.css';

export default function Search() {
    return (
        <>
            <div className="searchSection">
                <form className="searchProdF">
                    <input className="searchProd" placeholder="Preço Mínimo"
                    />
                    <input className="searchProd" placeholder="Preço Máximo"
                    />
                    <div className="dflex mt25">
                        <button className="buttonSub">
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}