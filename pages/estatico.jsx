import Header from '../src/components/Header';
import PageView from '../src/components/PageView';

export function getStaticProps() {
    console.log('Gerando props....');
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function estatico(props) {
    return(
        <>
            <Header />
            <PageView title='Static'>
                <p>Número: {props.numero}</p>
            </PageView>
        </>
    )
} 