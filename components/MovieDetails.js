import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MovieDetails({ movie }) {
  return (
      <>
          <Container>
              <Row>
                  { movie.poster && <Col md><img src={ movie.poster } alt="poster" className="w-100" /><br /><br /></Col> }
                  <Col md>
                      <strong>Directed By: </strong>{ movie.directors.join(", ") }<br /><br />
                      <p>{ movie.fullplot }</p>
                      <strong>Cast: </strong>{ movie.cast.join(", ") }<br /><br />
                      <strong>Awards: </strong>{ movie.awards.text }<br />
                      <strong>IMDB Rating: </strong> { movie.imdb.rating } ({ movie.imdb.votes })
                  </Col>
              </Row>
          </Container>
      </>
  );
}