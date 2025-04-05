import AboutAll from "./components/AboutUs/aboutAll";
import ContactAll from "./components/ContactUs/contactAll";
import FAQAccordion from "./components/fAQAccordion";
import FlushWarrantyFooter from "./components/FlushWarrantyFooter";
import FlushWarrantyLandingPage from "./components/flushWarrantyLandingPage";
import FlushWarranty from "./components/flushWarrantyVideo";
import HowItWorks from "./components/howItWorks";
import PropertySale from "./components/propertySale";
import ProtectionPlan from "./components/protectionPlan";
import SepticSystemSlider from "./components/septicSystemSlider";
import TestimonialsComponent from "./components/testimonialsComponent";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about-us" element={<AboutAll/>} />
        <Route path="/contact-us" element={<ContactAll/>} />
        <Route path="/" element={
          <>
            <div>
              <FlushWarrantyLandingPage />
              <ProtectionPlan />
              <PropertySale />
              <HowItWorks id="how-it-works" />
              <FlushWarranty />
              <SepticSystemSlider />
              <TestimonialsComponent />
              <FAQAccordion id="faq" />
              <FlushWarrantyFooter />
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}


export default App;
