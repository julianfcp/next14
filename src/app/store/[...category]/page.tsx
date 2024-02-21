interface CaterogyProps {
    params: {
        category: string
    }
}

export default function Category(props: CaterogyProps){
    const { category } = props.params;
    return(
        <h1>Categoria dinamica: {category} </h1>
    )
}