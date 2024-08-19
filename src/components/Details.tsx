import "../styling/Details.css";

interface DetailProps {
  image: string;
  title: string;
  description: string;
}

function Detail({ image, title, description }: DetailProps) {
  return (
    <div className="row detail-container" >
        <div className="col-2 image-detail" style={{paddingTop:"4rem"}}>
            <img src={image} alt={title} />
      </div>
      <div className="col-10 text-section" >
        <h2>{title}</h2>
        <p className="text-muted">{description}</p>
      </div>

    </div>
  );
}

export const Details: React.FC = () => {
  const images = [
    "src/assets/icons/1.png",
    "src/assets/icons/2.png",
    "src/assets/icons/3.png"
  ];

  return (
    <div className="details-container">
      <div className="row g-0">
        <div className="col-6 details-section">
          <Detail image={images[0]} title="عنوان 1" description="وصف 1" />
          <Detail image={images[1]} title="عنوان 2" description="وصف 2" />
          <Detail image={images[2]} title="عنوان 3" description="وصف 3" />
        </div>
        <div className="col-6 phone-section">
          <img className="phone-img" src="src/assets/mobile-3.png" alt="Phone" />
        </div>
      </div>
    </div>
  );
};
