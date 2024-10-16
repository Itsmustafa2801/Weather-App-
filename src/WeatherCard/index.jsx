import Card from 'react-bootstrap/Card';
import "./index.css";
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css';

const WeatherCard = ({ date, temp, min, max }) => {
  return (
    <Card style={{ width: '18rem', margin: "10px",}}>
      <Card.Body>
        <Card.Title>{moment(date).format("dddd ha")}</Card.Title>
        <Card.Text>
          <h1>{temp.toFixed(1)}°C</h1>
        </Card.Text>
        <Card.Title>{min.toFixed(1)}°C - {max.toFixed(1)}°C</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default WeatherCard;