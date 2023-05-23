import { notFound } from 'next/navigation';

interface Props {
    params: {
        slug: string;
    }
}

export default function ProductsPage({params}: Props) {
    if(params.slug === 'nothing') {
        notFound();
    }

    return <h1>PantsPage {params.slug}</h1>
}

export function generateStaticParams() {
    const products = ['pants', 'skirt'];

    return products.map(product => ({
        slug: product
    }))
}