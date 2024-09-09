import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Workspace from './Workspace';

function FlowPage() {
  return (
    <main className='flex'>
          <Container fluid={true} className="App ">
            <Workspace params={{}}/>
          </Container>
    </main>
  )
}


export default FlowPage
