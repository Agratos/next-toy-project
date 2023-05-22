interface Props {
    params: {
        slug: string;
    }
}

export default function ProductsPage({params}: Props) {
    return <h1>PantsPage {params.slug}</h1>
}