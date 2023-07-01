import React, { useState } from "react";

function Contactrole() {
  const [data, setdata] = useState("");
  function Changehandler(event) {
    let str = event.target.value;
    setdata(str);
    console.log(setdata);
  }
  function ClickHandler() {
    let save = [];
    save.push("...", data);
    console.log(save);
  }
  return (
    <div style={{ width: "100%", backgroundColor: "#141414", height: "40vh" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          gap: "20vw",
          marginLeft: "12vw",
          marginTop: "10vh",
        }}
      >
        <div style={{ display: "flex", gap: "7vw" }}>
          <div>
            <h4 style={{ color: "white" }}>Customer Service</h4>
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://service.rado.com/?country=in&_gl=1*1p3ntd5*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzIzNzMwOS4xNi4xLjE2ODcyMzg1MzUuMC4wLjA."
            >
              All our services
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://service.rado.com/faq?country=in&_gl=1*gm3wha*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzIzNzMwOS4xNi4xLjE2ODcyMzg1MzUuMC4wLjA."
            >
              Did you know?
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://www.rado.com/en_in/contact-us"
            >
              Contact us
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://store.rado.com/?_gl=1%2am01zyd%2a_ga%2aMTM5OTA0NTM0Ny4xNjg2ODI2MzEz%2a_ga_31SBFMJ4EN%2aMTY4NzIzNzMwOS4xNi4xLjE2ODcyMzkzMDYuMC4wLjA."
            >
              Store Locator
            </a>
          </div>
          <div>
            <h4 style={{ color: "white" }}>Legal & Corporate</h4>
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://www.rado.com/en_in/legal/terms-use"
            >
              Terms of Use
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://www.rado.com/en_in/legal/privacy-notice"
            >
              Privacy Notice
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://www.rado.com/en_in/legal/notice-regarding-cookies"
            >
              Cookies Notice
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://www.rado.com/en_in/legal/impressum"
            >
              Impressum
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
                marginTop: "10px",
              }}
              href="https://service.rado.com/jobs?_gl=1*z7r8rs*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzIzNzMwOS4xNi4xLjE2ODcyMzk0MDUuMC4wLjA."
            >
              Jobs
            </a>
            <br />
            <a
              style={{
                textDecoration: "none",
                color: "#EBE5E5",
                fontSize: "14px",
              }}
              href="https://press.rado.com/"
            >
              Press Room
            </a>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div>
            <h4 style={{ color: "white" }}>Follow Us</h4>
            <div>
              <a href="https://www.facebook.com/Rado/">
                {" "}
                <i
                  style={{ marginRight: "20px", color: "white" }}
                  class="bi bi-facebook"
                ></i>
              </a>
              <a href="https://www.instagram.com/rado/">
                {" "}
                <i
                  style={{ marginRight: "20px", color: "white" }}
                  class="bi bi-instagram"
                ></i>
              </a>
              <a href="https://twitter.com/rado/">
                {" "}
                <i
                  style={{ marginRight: "20px", color: "white" }}
                  class="bi bi-twitter"
                ></i>
              </a>
              <a href="https://www.youtube.com/channel/UCSS_ij7QnkSLe7nt3A0-nLA">
                <i
                  style={{ marginRight: "20px", color: "white" }}
                  class="bi bi-youtube"
                ></i>
              </a>

              <div style={{ marginTop: "10px" }}>
                <a href="https://www.pinterest.ch/radowatches/">
                  <i
                    style={{ marginRight: "20px", color: "white" }}
                    class="bi bi-printer"
                  ></i>
                </a>
                <a href="https://www.tiktok.com/@rado">
                  <i
                    style={{ marginRight: "20px", color: "white" }}
                    class="bi bi-file-music-fill"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "7vw" }}>
            <h4 style={{ color: "white" }}>Newsletter</h4>
            <input
              onChange={Changehandler}
              style={{
                borderStyle: "none",
                backgroundColor: "black",
                color: "white",
                borderBottomStyle: "solid",
              }}
              placeholder="Enter your email address"
            />
            <br />
            <button
              onClick={ClickHandler}
              style={{
                width: "16vw",
                height: "5vh",
                borderRadius: "50px 50px",
                marginTop: "20px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactrole;
