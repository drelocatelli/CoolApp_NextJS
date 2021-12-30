import Header from '../src/components/Header';
import PageView from '../src/components/PageView';

export function getServerSideProps() {
    console.log('Gerando props....');
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function dinamico(props) {
    return(
        <>
            <Header />
            <PageView title='Dinâmico'>
                <p>Número: {props.numero}</p>
            </PageView>
        </>
    )
} 