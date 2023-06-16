import './styles.css';

export default function Search() {
    return (
        <>
            <div className="searchSection">
                <form className="searchUserF">
                    <input className="searchUser" placeholder="Preço Mínimo"
                    />
                    <input className="searchUser" placeholder="Preço Máximo"
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