import React, { useState } from 'react';
import "../styling/FAQ.css"

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-md-6 mb-3">
      <div className="card text-white" style={{border: "none",background: "rgba(194, 186, 186, 0.3)",backdropFilter: "blur(1px)",borderRadius: "0"}}>
        <div className="card-body" style={{direction:'rtl'}}>
          <h5 
            className="card-title " 
            onClick={() => setIsOpen(!isOpen)}
            style={{ cursor: 'pointer', }}
          >
            {question}
            <span className={`float-start ${isOpen ? 'rotate' : ''}`}>^</span>
          </h5>
          {isOpen && <p className="card-text ">{answer}</p>}
        </div>
      </div>
    </div>
  );
};



const FAQSection: React.FC = () => {
  const faqItems = [
    { question: "هل التطبيق متاح للأندرويد؟", answer: "نعم، التطبيق متاح للأندرويد." },
    { question: "هل التطبيق متاح للايفون؟", answer: "نعم، التطبيق متاح للايفون أيضاً." },
    { question: "هل التطبيق مجاني بالكامل؟", answer: "التطبيق مجاني للتحميل مع بعض الميزات المدفوعة." },
    { question: "ما هو المطعم المفضل على التطبيق؟", answer: "يختلف المطعم المفضل حسب تقييمات المستخدمين." }
  ];

  return (
    <section className="faq-section py-5">
      <div className="container">
        <h2 className="text-center mb-4" style={{color:"white", padding: "3rem 0"}}>الأسئلة الأكثر شيوعاً عن التطبيق</h2>
        <div className="row">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;