import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header.jsx';

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col className="containerCol">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col className="containerCol">
                        <h1>Main</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="containerCol">
                        <h1>Footer</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
