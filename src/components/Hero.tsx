import "../styling/Hero.css"


export const Hero: React.FC = () => {
  return (
    <>
   <div className="hero">
      <div className="container-fluid">
        <div className="row g-0">
          <div className="col-md-7 text-section">
            <div className="store-icon">
            <img src='src\assets\icon.png' alt="Store icon" />
            </div>
            <h1>مطعمك متاح أي وقت طعام صحي وطازج دائما</h1>
            <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات</p>
            <div className="download-buttons">
              <img style={{width:'32%',height:'auto', marginRight:'1rem'}} src='src\assets\Download_on_the_App_Store_Badge_AR_RGB_blk_102417.svg' alt="Download on App Store"  />
              <img style={{width:'40%',height:'auto',marginRight:'1rem'}} src='src\assets\google-play-badge.png' alt="Get it on Google Play"  />
            </div>
          </div>
          <div className="col-md-5 phone-section">
            <img src='src\assets\mobile.png' alt="Phone with app" className="phone-image" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
