import { useRouter } from "next/router";
import { Button, Container } from "react-bootstrap";
import Header from "../../src/components/Header";
import PageView from "../../src/components/PageView";

export default function Person() {

    const router = useRouter();
    const {personName} = router.query;
    
    return(
        <>
            <Header />
            <Container style={{marginTop: '80px'}}>
                <div style={{float: 'right'}}>
                    <Button href='/people' variant='secondary'>Go back</Button>
                </div>
            </Container>
            <PageView title={`Hello, ${personName}`} noSpacing={true}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </PageView>
        </>
    );
    
}