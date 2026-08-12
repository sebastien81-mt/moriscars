import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './TermsAndConditions.css';

export default function TermsAndConditions({ onNavigateHome }) {
  useEffect(() => {
    // Scroll to top when page opens
    window.scrollTo(0, 0);

    // Update document title & meta description for SEO
    const prevTitle = document.title;
    document.title = "Terms & Conditions | MorisCars";

    let metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read the Terms & Conditions governing MorisCars car rental services in Mauritius.');
    }

    return () => {
      document.title = prevTitle;
      if (metaDesc && prevDesc) {
        metaDesc.setAttribute('content', prevDesc);
      }
    };
  }, []);

  const handleBackHome = (e) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.location.pathname = '/';
    }
  };

  return (
    <div className="terms-page-wrapper section-padding">
      <div className="container terms-container">
        
        {/* Back Link */}
        <a href="/" onClick={handleBackHome} className="terms-back-link">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </a>

        {/* Page Header */}
        <header className="terms-header">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            <span>LEGAL</span>
          </div>
          <h1 className="terms-title">Terms &amp; Conditions</h1>
          <p className="terms-intro">
            In this section you’ll find all the Terms and Conditions for renting our cars with {siteConfig.brandName}.
          </p>
        </header>

        {/* Legal Document Content Body */}
        <article className="terms-document-body">
          
          {/* Section 1 */}
          <section className="legal-section">
            <h2>1. General conditions</h2>
            <p>
              By checking the box, you accept the terms and conditions for the use of this website. These terms include all content present within the booking engine. Prior to utilizing this website, we recommend reviewing these conditions to ensure your understanding. Your continued access to or usage of this website signifies your agreement to abide by the stated terms and any potential modifications made therein. Please note that we reserve the right to modify these conditions at any time, and such modifications will be immediately effective upon their posting on this website. Your ongoing access to or use of this website following such modifications will be deemed as your acceptance of the updated conditions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="legal-section">
            <h2>2. Insurance &amp; Coverage</h2>
            
            <h3>2.1. Insurance</h3>
            <p>
              All vehicles we provide are rented with “Comprehensive Insurance” which include collision damage &amp; theft protection waivers. Collision Damage Waiver will waive your liability to pay for any damages caused to the vehicle during the period of rental. Theft waivers provides coverage for the theft or damage resulting from attempted theft of the vehicle, its parts and accessories up to their full value and any loss that our rental vehicles may occur. Both are subject to certain exclusions. Your liability is waived subject to you paying a charge, referred to as an excess which limits your liability to the cost of the excess only. In the event that the renter has behaved recklessly or negligently or driven under the influence of drugs or alcohol the renter may be liable for the full cost damage.
            </p>

            <h3>2.2. Full insurance cover</h3>
            <p>
              With us, you have the option to reduce the deductible to ZERO by paying an additional daily rate to your normal rental charges but which is non-refundable as compared to the excess. This simply means that if any damage occurs to your rented vehicle you won’t be liable to pay the deductible or excess as you already choose an extra insurance. However extra insurance excludes the following:
            </p>
            <ul>
              <li>Any Damage caused by a driver being influenced by alcohol or drugs.</li>
              <li>Loss of car keys.</li>
              <li>Damage caused by an unauthorized driver.</li>
              <li>Loss for extras like GPS, Mobile Phone, Baby Seat and Booster Seats.</li>
              <li>Any damage not reported to us.</li>
              <li>Negligent driving or without due care and attention, including driving off-road and on un-tarmacked roads.</li>
              <li>Car Interior Damages</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="legal-section">
            <h2>3. Car Rental Inclusions &amp; Exclusions</h2>
            
            <h3>3.1. Included in your car rental</h3>
            <ul>
              <li>Unlimited mileage</li>
              <li>Local taxes</li>
              <li>Insurance</li>
              <li>24 Hour road assistance (chargeable)</li>
              <li>First and second additional driver</li>
              <li>Delivery and recovery of car anywhere around the island</li>
            </ul>

            <h3>3.2. Excluded in your rental</h3>
            <ul>
              <li>Fines</li>
              <li>Fuel</li>
              <li>Cancellation fee</li>
              <li>Late return</li>
              <li>Loss of car keys or documents</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="legal-section">
            <h2>4. Delivery and recovery</h2>
            <p>
              Vehicle delivery and recovery services are available for all rentals made through our website.
            </p>
            <p>
              Delivery and return at the airport remain free of charge.
            </p>
            <p>
              For locations outside the airport, delivery and recovery services will incur an additional fee, which will be communicated to the client at the time of booking.
            </p>
            <p>
              For bookings made less than 48 hours prior to the rental start time, vehicle delivery will be arranged within a designated delivery window.
            </p>
            <p>
              While every effort is made to ensure timely service, exact delivery times cannot be guaranteed, as priority is given to deliveries scheduled earlier.
            </p>
            <p>
              Clients will be informed in advance of any delivery arrangements or timing adjustments to ensure a smooth and transparent process.
            </p>

            <h3>4.1. Delivery</h3>
            <p>
              At SSR International Airport; A representative of ours will welcome you at gate 5. Flight Information for airport pick-up is essential and if this information is not available at the time of booking, please ensure that you inform us at least 7 days prior to your departure, via email or by phone. We take no responsibility for a failed rental due to late or improper supply of this information. Failure to supply this information also alleviates our responsibility.
            </p>
            <p>
              Moreover, at the time of collecting the car, customers will be required to produce a valid driver’s license from country of origin, a valid passport and a valid credit card in renter’s (driver’s) name. After signing the rental agreement, an inspection of the rental vehicle shall be carried out between the “Renter” and our representatives. All apparent defects and fuel level shall be listed and signed by both parties.
            </p>
            <p>
              For bookings made less than 48 hours prior to the rental start time, vehicle delivery will be scheduled within an allocated delivery window.
            </p>
            <p>
              While we strive to ensure timely service, an exact delivery time cannot be guaranteed, as priority will be given to deliveries that were scheduled earlier.
            </p>
            <p>
              Clients will be notified in advance of any required delivery arrangements or adjustments to the timing to ensure a smooth and transparent process.
            </p>

            <h3>4.2. Recovery</h3>
            <p>
              At the end of rental, an inspection shall be done upon drop off of the rented vehicle in the presence of our representatives. The inspection form must be duly signed by both parties to avoid any disputes, which might arise later. It is the responsibility of the renter to sign the inspection form, failing which, the renter shall bear any further charges at a later stage.
            </p>
          </section>

          {/* Section 5 */}
          <section className="legal-section">
            <h2>5. Late pick-ups and early returns</h2>
            <p>
              The rental starts and finishes according to the pick-up and drop-off dates and times as mentioned on your voucher. Unfortunately, we are unable to provide refunds for unused time if a car is picked up late or returned early.
            </p>
            <p>
              If you are unable to pick up the rental car at the agreed time and date, it is very important to inform us as soon as possible. Otherwise, there is no guarantee that the car will still be available and you will not be entitled to any refund. In case of late drop-off without informing us, a surcharge is applicable and may be higher than normal rates.
            </p>
          </section>

          {/* Section 6 */}
          <section className="legal-section">
            <h2>6. Payment Policy</h2>
            <p>
              Credit cards are accepted (Visa, Mastercard &amp; American Express).
            </p>
            <p>
              Kindly be advised that subsequent to your online booking, a receipt will be transmitted to your email address. This receipt will duly document the deposited amount and articulate the outstanding balance to be settled during the car collection process.
            </p>
          </section>

          {/* Section 7 */}
          <section className="legal-section">
            <h2>7. Provision of cars</h2>
            <p>
              We reserve the right to refuse a car to any person who is considered unfit to drive or does not meet eligibility requirements. We will not be liable for the completion of travel arrangements, nor for any refund, compensation or any other costs to you, the renter, may have to pay in such a case.
            </p>
            <p>
              We will not be held responsible for anyone driving under the influence of alcohol / drugs, causing damage while driving off-road or driving without due care and attention.
            </p>
            <p>
              In case of an accident or any unforeseen circumstances, we shall provide you with either a downgrade or an upgrade and necessary adjustments shall be done. The customer will be informed in advance of any changes in his reservation. For instance, due to unavailability, If no car cannot be supplied, we shall refund you your deposit accordingly.
            </p>
            <p>
              However, no adjustment will be our concern if the client try to choose another car rental company. We will not be held responsible for any surplus charges by the third party.
            </p>
          </section>

          {/* Section 8 */}
          <section className="legal-section">
            <h2>8. Daily rate calculation</h2>
            <p>
              Vehicles are rented at a daily rate according to the agreed charge; one day being defined as any period of 24 hrs from the time of commencement of the rental agreement. A grace period of 60 minutes is allowed for the time due back. After this a day charge will be made for each additional day.
            </p>
          </section>

          {/* Section 9 */}
          <section className="legal-section">
            <h2>9. Vehicle Category / Model</h2>
            <p>
              We cannot guarantee any particular make, model or fuel type of car that has been booked by the renter. Cars on display are the most commonly used and may be substituted for an alternative, similar or upgraded car (at no extra cost) at our discretion.
            </p>
            <p>
              If, at time of pickup, it becomes impossible to provide your booked car as shown on your rental voucher due to breakdown or an accident or any other reason due to unforeseen circumstances, a similar or upgraded car will be provided by us.
            </p>
            <p>
              If we are unable to provide either a similar or upgraded car, we'll issue a full refund of the initial deposit. However, in such circumstances, we exclude any liability of any additional charges, compensation or any direct or indirect loss resulting from such changes.
            </p>
          </section>

          {/* Section 10 */}
          <section className="legal-section">
            <h2>10. Additional driver</h2>
            <p>
              It is allowed to add additional drivers. When collecting the vehicle, all drivers must be present and produce valid documentation. First and second additional driver is free of charge. There is a one time charge of Rs 500 each additional driver.
            </p>
          </section>

          {/* Section 11 */}
          <section className="legal-section">
            <h2>11. Additional Options, Returns &amp; Cancellations</h2>
            
            <h3>What happens if the rental car breaks down?</h3>
            <p>
              In the event of a breakdown, call our 24/7 roadside assistance number, and we will send help or arrange for a replacement vehicle if needed.
            </p>

            <h3>Is there an option to deliver the rental car?</h3>
            <p>
              Yes, as part of our service we offer rental car delivery and pick up.
            </p>

            <h3>Do you offer child seats?</h3>
            <p>
              Yes, child seats are available upon request for an additional fee.
            </p>

            <h3>Do you offer GPS Navigation?</h3>
            <p>
              Yes, GPS navigation devices are available upon request at an additional fee.
            </p>

            <h3>What is your cancellation policy?</h3>
            <p>
              Cancellation is free up to 24 hours before delivery.
            </p>
            <p>
              If your rental ends early for any reason:
            </p>
            <ul>
              <li>You will receive 50% refund on the unused rental days only.</li>
              <li>Used days and extra services are not refundable.</li>
            </ul>

            <h3>What are the car drop-off options?</h3>
            <p>
              Cars can be returned at any agreed location across Mauritius. We offer collection from you at no extra charge.
            </p>
          </section>

        </article>
      </div>
    </div>
  );
}
