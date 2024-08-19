
import "../styling/Features.css";

interface FeatureProps {
  iconclass: string;
  title: string;
  description: string;
  direction: "rtl" | "ltr";
}

function Feature({ iconclass, title, description, direction }: FeatureProps) {
  return (
    <div className={`feature-container ${direction}` }>
      <div className="icon-container">
        <i className={iconclass} />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features-section">
      <div className="container-fluid">
        <div className="row gx-5">
          <div className="col-md-5 features-column second-features">
            <Feature
              iconclass="bi bi-tree-fill"
              title="عنوان بالعربية"
              description="وصف بالعربية"
              direction="rtl"
            />
            <Feature
              iconclass="bi bi-tree-fill"
              title="عنوان بالعربية"
              description="وصف بالعربية"
              direction="rtl"
            />
            <Feature
              iconclass="bi bi-tree-fill"
              title="عنوان بالعربية"
              description="وصف بالعربية"
              direction="rtl"
            />
          </div>
          <div className="col-md-2 phone-section">
            <img src="src/assets/mobile2.png" alt="Phone" />
          </div>
          <div className="col-md-5 features-column first-features">
            <Feature
              iconclass="bi bi-tree-fill"
              title="Title in English"
              description="Description in English"
              direction="ltr"
            />
            <Feature
              iconclass="bi bi-tree-fill"
              title="Title in English"
              description="Description in English"
              direction="ltr"
            />
            <Feature
              iconclass="bi bi-tree-fill"
              title="Title in English"
              description="Description in English"
              direction="ltr"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;