interface Props {
    params: {
        bus: string;
    }
}

export default function CarPage({params}: Props) {
    return <h1>CarPage {params.bus}</h1>
}