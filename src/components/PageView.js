import { Container } from "react-bootstrap";

const PageView = (props) => {
    return(
        <Container style={{marginTop: '20px'}}>
            {props.title ? <h1>{props.title}</h1> : null}
            {props.children}
        </Container>
    );
}

export default PageView;