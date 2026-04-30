// import { useState, useEffect } from "react";
// import { Col, Row, Alert } from "react-bootstrap";

// export const Newsletter = ({ status, message, onValidated }) => {
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (status === 'success') clearFields();
//   }, [status])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     email &&
//     email.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email
//     })
//   }

//   const clearFields = () => {
//     setEmail('');
//   }

//   return (
//       <Col lg={12}>
//         <div className="newsletter-bx wow slideInUp">
//           <Row>
//             <Col lg={12} md={6} xl={5}>
//               <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
//               {status === 'sending' && <Alert>Sending...</Alert>}
//               {status === 'error' && <Alert variant="danger">{message}</Alert>}
//               {status === 'success' && <Alert variant="success">{message}</Alert>}
//             </Col>
//             <Col md={6} xl={7}>
//               <form onSubmit={handleSubmit}>
//                 <div className="new-email-bx">
//                   <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
//                   <button type="submit">Submit</button>
//                 </div>
//               </form>
//             </Col>
//           </Row>
//         </div>
//       </Col>
//   )
// }
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  const handleWhatsApp = () => {
     const message = encodeURIComponent(
    "Hi! I saw your portfolio and I’d like to order a custom artwork."
  );
    window.open(`https://wa.me/9316545650?text=${message}`, "_blank");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          
          {/* LEFT TEXT */}
          <Col lg={12} md={6} xl={6}>
            <h3>
              Get Your Custom Artwork <br />
              & Let’s Create Something Beautiful ✨
            </h3>

            <p style={{ marginTop: "10px", color: "#555" }}>
              Portraits, digital art & custom designs made just for you. <br />
              {/* Starting from ₹499 | Fast delivery */}
            </p>
          </Col>

          {/* RIGHT BUTTON */}
          <Col md={6} xl={6}>
            <div className="new-email-bx" style={{ justifyContent: "center" }}>
              
              <button onClick={handleWhatsApp}>
                Let’s Connect
              </button>

            </div>
          </Col>

        </Row>
      </div>
    </Col>
  );
};