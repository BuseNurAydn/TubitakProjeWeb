import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const BilgiGiris = () => {
      // alert("Değerleri eksiksiz giriniz!!")
     // const[baslik, setBaslik] = useState('Baslik');
     // const[detay, setDetay]= useState('Detay');

     const [form, setForm] = useState({
          //JSON OBJE
          //id , detay için ekledik
          id: '',
          rid: '',
          examdate: '',
          ptgender: '',
          age: '',
          pteducat: '',
          ptethcat: '',
          ptraccat: '',
          ptmarry: '',
          ptid: '',
          site: '',
          dx:'',
          apoe4: '',
          eventtime: '',
          cens: '',
          standardise: '',
          adSoyad: '',
          tc: ''
     })

     const formKaydet = () => {
          alert('Kaydediliyor...')
          //alert(form.baslik);
          //LOCAL STORAGEDEN BLOK KAYITLARINI VER NULL İSE BOŞ BİR ARRAY VER
          //STRİNGİ ESKİ HALİNE ARRAY'E DÖNÜŞTÜRÜR !!!
          const blogKayitlari = JSON.parse(localStorage.getItem('blogs')) || []
          //STRİNGE ÇEVİRDİK !!
          localStorage.setItem('blogs', JSON.stringify([...blogKayitlari, { ...form, id: Date.now() }]));

          //FORMDAKİ İNPUT ALANLARI YAZILIP KAYDEDİLDİKTEN SONRA İNPUT ALANLARI BOŞALIR
          setForm(
               {
                    rid: '',
                    examdate: '',
                    ptgender: '',
                    age: '',
                    pteducat: '',
                    ptethcat: '',
                    ptraccat: '',
                    ptmarry: '',
                    ptid: '',
                    site: '',
                    dx: '',
                    apoe4: '',
                    eventtime: '',
                    cens: '',
                    standardise: '',
                    adSoyad: '',
                    tc: ''

               }
          )
     }
     return (
          <Container>
               <Row>
                    <Col>
                         <Form style={{ margin: '30px' }}>
                             <Form.Group className="mb-3">
                                   <Form.Label>AD VE SOYAD</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.adSoyad}
                                        onChange={(e) => setForm({ ...form, adSoyad: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>TC KİMLİK NO</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.tc}
                                        onChange={(e) => setForm({ ...form, tc: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>RID</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.rid}
                                        onChange={(e) => setForm({ ...form, rid: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>EXAMDATE</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.examdate}
                                        onChange={(e) => setForm({ ...form, examdate: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label >PTGENDER</Form.Label>
                                   <Form.Select size="sm"
                                        value={form.ptgender}
                                        onChange={(e) => setForm({ ...form, ptgender: e.target.value })}>
                                        <option>Seçiniz</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                   </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>AGE</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.age}
                                        onChange={(e) => setForm({ ...form, age: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>PTEDUCAT</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.pteducat}
                                        onChange={(e) => setForm({ ...form, pteducat: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label >PTETHCAT</Form.Label>
                                   <Form.Select size="sm"
                                        value={form.ptethcat}
                                        onChange={(e) => setForm({ ...form, ptethcat: e.target.value })}>
                                        <option>Seçiniz</option>
                                        <option value="Hisp/Latino">Hisp/Latino</option>
                                        <option value="Not Hisp/Latino">Not Hisp/Latino</option>
                                        <option value="Unknown">Unknown</option>
                                   </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label >PTRACCAT</Form.Label>
                                   <Form.Select size="sm"
                                        value={form.ptraccat}
                                        onChange={(e) => setForm({ ...form, ptraccat: e.target.value })}>
                                        <option>Seçiniz</option>
                                        <option value="White">White</option>
                                        <option value="Asian">Asian</option>
                                        <option value="Am Indian">Am Indian</option>
                                   </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label >PTMARRY</Form.Label>
                                   <Form.Select size="sm"
                                        value={form.ptmarry}
                                        onChange={(e) => setForm({ ...form, ptmarry: e.target.value })}>
                                        <option>Seçiniz</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                        <option value="Never married">Never married</option>
                                   </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>PTID</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.ptid}
                                        onChange={(e) => setForm({ ...form, ptid: e.target.value })}>
                                   </Form.Control>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>SITE</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.site}
                                        onChange={(e) => setForm({ ...form, site: e.target.value })}>
                                   </Form.Control>
                              </Form.Group >
                              <Form.Group  className="mb-3">
                                   <Form.Label>APOE4</Form.Label>
                                   <Form  value={form.apoe4}
                                          onChange={(e) => setForm({ ...form, apoe4: e.target.value })}>
                                        {['radio'].map((type) => (
                                             <div key={`inline-${type}`} className="mb-3">
                                                  <Form.Check
                                                       inline
                                                       label="0"
                                                       name="group1"
                                                       type={type}
                                                       id={`inline-${type}-1`}
                                                  />
                                                  <Form.Check
                                                       inline
                                                       label="1"
                                                       name="group1"
                                                       type={type}
                                                       id={`inline-${type}-2`}
                                                  />
                                                  <Form.Check
                                                       inline
                                                       label="2"
                                                       name="group1"
                                                       type={type}
                                                       id={`inline-${type}-3`}
                                                  />
                                             </div>
                                        ))}
                                   </Form>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label >DX</Form.Label>
                                   <Form.Select size="sm"
                                        value={form.dx}
                                        onChange={(e) => setForm({ ...form, dx: e.target.value })}>
                                        <option>Seçiniz</option>
                                        <option value="MCI">MCI</option>
                                        <option value="Dementia">Dementia</option>
                                        <option value="CN">CN</option>
                                   </Form.Select>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>EVENTTİME</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.eventtime}
                                        onChange={(e) => setForm({ ...form, eventtime: e.target.value })}>
                                   </Form.Control>
                              </Form.Group >
                              <Form.Group  className="mb-3">
                                   <Form.Label>CENS</Form.Label>
                                   <Form  value={form.cens}
                                          onChange={(e) => setForm({ ...form, cens: e.target.value })}>
                                        {['radio'].map((type) => (
                                             <div key={`inline-${type}`} className="mb-3">
                                                  <Form.Check
                                                       inline
                                                       label="0"
                                                       name="group1"
                                                       type={type}
                                                       id={`inline-${type}-1`}
                                                  />
                                                  <Form.Check
                                                       inline
                                                       label="1"
                                                       name="group1"
                                                       type={type}
                                                       id={`inline-${type}-2`}
                                                  />
                                             </div>
                                        ))}
                                   </Form>
                              </Form.Group>
                              <Form.Group className="mb-3">
                                   <Form.Label>STANDARDİSE</Form.Label>
                                   <Form.Control type="text" size="sm"
                                        value={form.standardise}
                                        onChange={(e) => setForm({ ...form, standardise: e.target.value })}>
                                   </Form.Control>
                              </Form.Group >


                              <Button onClick={() => formKaydet()} style={{ backgroundColor: 'darkGreen', border: 'darkGreen' }}>Kaydet</Button>
                         </Form>
                    </Col>
               </Row>
          </Container>
     )


}
export default BilgiGiris;