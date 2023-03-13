import React from 'react'
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className='d-flex bg-dark mx-0 text-light'>
      <Container className='row mx-auto'>
      <div className="col-md-4 col-12 d-flex justify-content-center align-items-center fw-bold">&copy; Rick and morty</div>

      <div className="col-md-4 col-12 d-flex justify-content-center text-light">
        <a href="/#" className='mx-3 my-3'><i class="bi bi-facebook text-light"></i></a>
        <a href="/#" className='mx-3 my-3'><i class="bi bi-instagram text-light"></i></a>
        <a href="/#" className='mx-3 my-3'><i class="bi bi-whatsapp text-light"></i></a>
        <a href="/#" className='mx-3 my-3'><i class="bi bi-tiktok text-light"></i></a>
      </div>

      <div className="col-md-4 col-12 d-flex justify-content-center align-items-center fw-bold">
        <a href="/#" className='mx-3 my-3 text-decoration-none text-light'>Cuenta</a>
        <a href="/#" className='mx-3 my-3 text-decoration-none text-light'>Capitulos</a>
      </div>
      </Container>
    </div>
  )
}

export default Footer