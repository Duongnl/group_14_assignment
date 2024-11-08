'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function AppFooter() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Footer</Card.Footer>
    </Card>
  );
}

export default AppFooter;