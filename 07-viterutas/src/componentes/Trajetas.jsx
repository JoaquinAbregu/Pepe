import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Tarjeta({ characters }) {
    const imprimirArgumento = () => {
        //imprimimos cada nombre de los personajes del fetch con el map, que es un ciclo for en react 
        //c de caracter
        characters.map((c) => {
            console.log(c.name);
        })
    }
    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://rickandmortyapi.com/api/character/avatar/7.jpeg" />
            <Card.Body>
                <Card.Title>Señor Bolainas</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Magnam distinctio 
                    laudantium rerum maxime et. Inventore 
                    quas quis, deleniti veritatis tempora 
                    cumque porro delectus, nesciunt placeat 
                    quia quo nemo ab! Consequuntur.
                </Card.Text>
                <Button variant="primary">El señor bolainas</Button>
            </Card.Body>
        </Card>

        <Button onClick={ imprimirArgumento }> 
            Imprimir todos los personajes de caracter
        </Button>
        </>
    );
}

export default Tarjeta;