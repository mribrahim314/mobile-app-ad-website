import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "../styling/Social.css"

const SocialSection: React.FC = () => {
    return (
      <div className="container-fliud text-white" style={{direction:'rtl',backgroundColor:"#222223", paddingBottom:"4rem"}}>
<div className="container">
  <div className="row justify-content-center">
    <div className="col" style={{ paddingTop: "3rem", margin: "0 1rem" }}>
      <h3 style={{paddingBottom:"2rem", position: "relative"}}>عن التطبيق
      <span style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    width: "100%",
    background: "linear-gradient(to left, #dc3545 30%, transparent 30%)"
  }}></span>
      </h3>
      <p style={{ color: "#8B8B8B" ,paddingBottom:"8rem" , paddingTop:"2rem"}}>
        هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص
      </p>
      <div className="social-icons mt-3 text-center" >
  <span className="icon-circle" >
    <FontAwesomeIcon icon={faFacebookF}  />
  </span>
  <span className="icon-circle" >
    <FontAwesomeIcon icon={faTwitter} />
  </span>
  <span className="icon-circle" >
    <FontAwesomeIcon icon={faGoogle} />
  </span>
  <span className="icon-circle" >
    <FontAwesomeIcon icon={faLinkedinIn} />
  </span>
</div>

    </div>
    <div className="col" style={{ paddingTop: "3rem", margin: "0 1rem" }}>
    <h3 style={{ paddingBottom: "2rem", position: "relative" }}>
  آخر التغريدات
  <span style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    width: "100%",
    background: "linear-gradient(to left, #dc3545 30%, transparent 30%)"
  }}></span>
</h3>
      <ul className="list-unstyled" style={{ color: "#8B8B8B",paddingTop:"2rem" }}>
  <li style={{ paddingBottom: "1rem", borderBottom: "1px solid #8B8B8B" }}>
    <i className="bi bi-twitter" style={{ marginLeft: "0.5rem",color:"#ee463a" }}></i>
    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
  </li>
  <li style={{ padding: "1rem 0", borderBottom: "1px solid #8B8B8B" }}>
    <i className="bi bi-twitter" style={{ marginLeft: "0.5rem",color:"#ee463a" }}></i>
    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
  </li>
  <li style={{ padding: "1rem 0" }}>
    <i className="bi bi-twitter" style={{ marginLeft: "0.5rem" ,color:"#ee463a"}}></i>
    هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ
  </li>
</ul>

    </div>
    <div className="col" style={{ paddingTop: "3rem", margin: "0 1rem" }}>
      <h3 style={{paddingBottom:"2rem", position: "relative"}}>القائمة البريدية
      <span style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "2px",
    width: "100%",
    background: "linear-gradient(to left, #dc3545 30%, transparent 30%)"
  }}></span>
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem",paddingTop:"2rem" }}>
        <input
          type="text"
          className="form-control"
          style={{ color: "white", backgroundColor: "#454545", border: "none", borderRadius: "0" }}
          placeholder="البريد الإلكتروني"
          aria-label="البريد الإلكتروني"
        />
        <button
          className="btn"
          style={{ color: "white", backgroundColor: "#ee463a", width: "50%", borderRadius: "0" }}
          type="button"
        >
          اشترك
        </button>
      </div>
    </div>
  </div>
</div>


      </div>
    );
  };
  export default SocialSection;