import Healthcheck from '../healthcheck/Healthcheck';
import './Main.css';

function Main() {
    return (        
        <div className='main-container'>            
            <Healthcheck serviceUrl="backend:8080/health" serviceName="Backend 8080" />
            <Healthcheck serviceUrl="http://localhost:8082/health" serviceName="Localhost 8082" />
            <Healthcheck serviceUrl="mongo:27017" serviceName="Mongo 27017" />            
            <Healthcheck serviceUrl="http://localhost:27018" serviceName="Localhost 27018" />
        </div>
    );
}

export default Main;