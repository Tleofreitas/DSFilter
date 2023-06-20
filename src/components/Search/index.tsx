import { useState } from 'react';
import './styles.css';

type FormData = {
    min: string;
    max: string;
}

type Props = {
    onSearch: Function;
}

export default function Search({ onSearch }: Props) {

    const [minMax, setMinMax] = useState<string>();

    const [formData, setFormData] = useState<FormData>({
        min: '',
        max: ''
    })

    function handleImputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        setMinMax(formData.min + " / "+formData.max);
    }

    return (
        <>
            <div className="searchSection">
                <form className="searchProdF" onSubmit={handleSubmit}>
                    <input className="searchProd" placeholder="Preço Mínimo"
                        name='min'
                        value={formData.min}
                        type="number"
                        onChange={handleImputChange}
                    />
                    <input className="searchProd" placeholder="Preço Máximo"
                        name='max'
                        value={formData.max}
                        type="number"
                        onChange={handleImputChange}
                    />
                    <div className="dflex mt25">
                        <button type='submit' className="buttonSub">
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}