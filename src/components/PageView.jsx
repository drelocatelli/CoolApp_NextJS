import { Container } from "react-bootstrap";

export default function PageView(props) {
    return(
        <Container style={{ marginTop: props.noSpacing ? '20px' : '80px'}}>
            {props.title ? <><h1>{props.title}</h1><br /></> : null}
            {props.children}
        </Container>
    );
}