import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "react-router-dom";


//FONKSİYONEL COMPONENT
const HastaBilgileri = () => {

    const [blogs1, setBlogs] = useState([]);
    const navigate = useNavigate();


    //VERİLERİ ALMAK İÇİN
    useEffect(() => {
        const blogKayitlari = JSON.parse(localStorage.getItem('blogs')) || [] // BLOGS DİYE KAYDETMİŞTİK
        setBlogs(blogKayitlari);

    }, []);

    const blogsRender = () => {
        const bloglar = blogs1.map((item, index) => {
            return (
                <Col>
                    <ListGroup style={{marginTop:'10px'}}>
                        <ListGroup.Item>Hastanın Adı ve Soyadı :   {item.adSoyad}</ListGroup.Item>
                        <ListGroup.Item>TC :  {item.tc}</ListGroup.Item>
                        <ListGroup.Item>RID Değeri :   {item.rid}</ListGroup.Item>
                        <ListGroup.Item>EXAMDATE Değeri :  {item.examdate}</ListGroup.Item>
                        <ListGroup.Item>PTGENDER Değeri :  {item.ptgender}</ListGroup.Item>
                        <ListGroup.Item>AGE Değeri :  {item.age}</ListGroup.Item>
                        <ListGroup.Item>PTEDUCAT Değeri :  {item.pteducat}</ListGroup.Item>
                        <ListGroup.Item>PTETHCAT Değeri :  {item.ptethcat}</ListGroup.Item>
                        <ListGroup.Item>PTRACCAT Değeri :  {item.ptraccat}</ListGroup.Item>
                        <ListGroup.Item>PTMARRY Değeri :   {item.ptmarry}</ListGroup.Item>
                        <ListGroup.Item>PTİD Değeri :  {item.ptid}</ListGroup.Item>
                        <ListGroup.Item>SITE Değeri :  {item.site}</ListGroup.Item>
                        <ListGroup.Item>DX Değeri :  {item.dx}</ListGroup.Item>
                        <ListGroup.Item>APOE4 Değeri :  {item.apoe4}</ListGroup.Item>
                        <ListGroup.Item>EVENTTİME Değeri :   {item.eventtime}</ListGroup.Item>
                        <ListGroup.Item>CENS Değeri :   {item.cens}</ListGroup.Item>
                        <ListGroup.Item>STANDARDİSE Değeri :  {item.standardise}</ListGroup.Item>

                    </ListGroup>
                </Col>
            )
        })
        return bloglar;
    }


    return (

        <Container>
            <Row>
                <Col>
                    {blogsRender()}
                </Col>
            </Row>
        </Container>


    )
}
export default HastaBilgileri;




//GRİD YAPISI - BOOTSTRAP
{/*<Container >
         gerek kalmadı
            <Row>
                <Col>
                    <Navbar bg="dark" data-bs-theme="dark" style={{ marginTop: '10px' }}>
                        <Container>
                            <Navbar.Brand>React Blog</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Blog Listesi</Nav.Link>
                                <Nav.Link as={Link} to="/blogEkle">Blog Ekle</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            {/* <h1 style={{ margin: '10px' }}>Kitap Blog Yazıları</h1>}
            <Row>
                <Col>
                    <Card style={{ width: '18rem', margin: '20px', float: 'left' }}>
                        {/*<Card.Img variant="top" src="holder.js/100px180" />}
                        <Card.Body>
                            <Card.Title>Tutunamayanlar</Card.Title>
                            <Card.Text>
                                Ülkemizin en değerli yazarlarından biri olan Oğuz Atay’ın yazıldığı dönemde büyük tartışma konusu olmuş eseri 1972 yılında yayımlanmıştır.Tutunamayanlar, sadece birkaç dile çevrilebilmiştir.
                            </Card.Text>
                            <Button variant="success">Devamını Oku..</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      */}
