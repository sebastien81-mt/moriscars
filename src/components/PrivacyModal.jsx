import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import './PrivacyModal.css';

export default function PrivacyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terms-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="privacy-modal-heading">
      <div className="terms-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Top Sticky Bar */}
        <div className="terms-modal-header">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              <span>LEGAL</span>
            </div>
            <h2 id="privacy-modal-heading" className="terms-modal-title">Privacy Policy</h2>
          </div>
          <button 
            type="button" 
            className="terms-modal-close-btn" 
            onClick={onClose} 
            aria-label="Close Privacy Policy"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="terms-modal-body">
          <div className="privacy-meta-bar">
            <p><strong>Last updated:</strong> 16 June 2026</p>
            <p><strong>Governing law:</strong> Data Protection Act 2017 (Mauritius)</p>
          </div>

          <p className="terms-intro">
            This policy explains what personal information we collect when you hire a vehicle or book a transfer with us, how we use and protect it, and the rights you have over it.
          </p>

          <article className="terms-document-body">
            
            {/* Section 1 */}
            <section className="legal-section">
              <h2>Who we are</h2>
              <p>
                {siteConfig.brandName} ("we", "us" or "our") is a family-run car rental company operating across Mauritius and Rodrigues. We respect your privacy and are committed to handling your personal data responsibly and lawfully.
              </p>
              <p>
                For the purposes of the Data Protection Act 2017 of Mauritius, we are the data controller responsible for the personal data you provide to us through this website, our booking platform, our team, and our partners.
              </p>
              <div className="contact-details-box">
                <p><strong>Our details:</strong></p>
                <p>{siteConfig.brandName}</p>
                <p>Mon Deser Road, Plaine Magnien, Mauritius</p>
                <p>Email: {siteConfig.supportEmail}</p>
                <p>Phone / WhatsApp: {siteConfig.whatsappNumber}</p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="legal-section">
              <h2>Scope of this policy</h2>
              <p>This policy applies to personal data we process about:</p>
              <ul>
                <li>Customers and prospective customers who request a quote, make a booking, or hire a vehicle from us;</li>
                <li>People who use our website and our online booking platform;</li>
                <li>Drivers and additional drivers named on a rental agreement;</li>
                <li>People who contact us by phone, email, WhatsApp or social media; and</li>
                <li>Affiliates and partners who promote our vehicles through our affiliate platform.</li>
              </ul>
              <p>It does not cover the privacy practices of any third-party website we link to, which have their own policies.</p>
            </section>

            {/* Section 3 */}
            <section className="legal-section">
              <h2>Information we collect</h2>
              <p>
                Because hiring a vehicle is a regulated, contractual activity, we need to collect more information than a typical website. We only collect what is necessary to provide our services safely and meet our legal obligations.
              </p>

              <h3>Identity &amp; driver information</h3>
              <ul>
                <li>Full name, date of birth and nationality;</li>
                <li>Driving licence details (including licence number, country of issue, categories and expiry);</li>
                <li>Passport or national identity card details, used to verify your identity and age;</li>
                <li>Details of any additional drivers you add to the rental.</li>
              </ul>

              <h3>Contact &amp; booking details</h3>
              <ul>
                <li>Email address, phone number and WhatsApp number;</li>
                <li>Your accommodation, hotel or address in Mauritius for delivery and recovery of the vehicle;</li>
                <li>Pick-up and drop-off locations, dates and times;</li>
                <li>Flight number and arrival details where you book an airport transfer or airport collection;</li>
                <li>Your vehicle preferences, insurance and child-seat selections, and any special requests.</li>
              </ul>

              <h3>Payment &amp; financial information</h3>
              <ul>
                <li>Information needed to process your booking, deposit and security hold. Card payments are handled by our payment provider and we do not store full card numbers on our own systems;</li>
                <li>Billing details and invoice records.</li>
              </ul>

              <h3>Rental &amp; account information</h3>
              <ul>
                <li>Your booking history, rental agreements and account login details on our booking platform;</li>
                <li>Records of vehicle condition, fuel, mileage, damage, fines or accidents relating to your hire;</li>
                <li>Correspondence and notes from your interactions with our sales and admin teams.</li>
              </ul>

              <h3>Technical &amp; website information</h3>
              <ul>
                <li>IP address, device and browser type, and pages viewed on our site;</li>
                <li>Cookies and similar technologies.</li>
              </ul>

              <p>
                Some of this information — such as a copy of your driving licence or passport — may be treated as sensitive or otherwise requires extra care under the Data Protection Act 2017. We collect it only where it is necessary to fulfil the rental contract or to meet a legal requirement, and we protect it accordingly.
              </p>
            </section>

            {/* Section 4 */}
            <section className="legal-section">
              <h2>How we collect it</h2>
              <ul>
                <li><strong>Directly from you</strong> — when you request a quote, complete a booking, sign a rental agreement, collect a vehicle, or contact our team;</li>
                <li><strong>Through our booking platform</strong> — when you create an account or make a reservation online;</li>
                <li><strong>From affiliates and travel partners</strong> — where you book one of our vehicles through a partner that we work with;</li>
                <li><strong>Automatically</strong> — through cookies and analytics when you browse our website.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="legal-section">
              <h2>Why we use your information &amp; our legal basis</h2>
              <p>Under the Data Protection Act 2017 we must have a lawful basis for each use of your personal data:</p>
              <ul>
                <li><strong>Take and manage your booking, deliver and recover the vehicle, and provide transfers</strong> — Performance of our contract with you.</li>
                <li><strong>Verify your identity, age and driving licence before handing over a vehicle</strong> — Contract and compliance with legal obligations.</li>
                <li><strong>Process payments, deposits and security holds</strong> — Performance of our contract with you.</li>
                <li><strong>Manage insurance, damage, fuel, fines and accident claims</strong> — Contract, legal obligation and our legitimate interests.</li>
                <li><strong>Keep accounting, tax and business records</strong> — Compliance with legal obligations.</li>
                <li><strong>Respond to your enquiries and provide customer support</strong> — Contract and our legitimate interests.</li>
                <li><strong>Improve our website, services and fleet</strong> — Our legitimate interests.</li>
                <li><strong>Send you marketing messages and offers</strong> — Your consent (which you may withdraw at any time).</li>
                <li><strong>Prevent fraud, recover unpaid amounts and protect our business</strong> — Our legitimate interests and legal obligations.</li>
              </ul>
              <p>"Legitimate interests" means we use your data in ways you would reasonably expect and that do not override your rights and freedoms.</p>
            </section>

            {/* Section 6 */}
            <section className="legal-section">
              <h2>Who we share your information with</h2>
              <p>We do not sell your personal data. We share it only where necessary, with:</p>
              <ul>
                <li>Insurers and insurance partners, to arrange cover and manage any claim relating to your hire;</li>
                <li>Payment processors, to take payment, deposits and security holds securely;</li>
                <li>Our booking platform, hosting and IT service providers, who operate the systems we use to run the business;</li>
                <li>Affiliates and travel partners, where your booking was made through them;</li>
                <li>Authorities, the police and regulators, where required by law — for example in relation to traffic offences, fines or accidents;</li>
                <li>Professional advisers such as accountants and lawyers, where necessary.</li>
              </ul>
              <p>Where we use service providers, they may only process your data on our instructions and must keep it secure.</p>
            </section>

            {/* Section 7 */}
            <section className="legal-section">
              <h2>International transfers</h2>
              <p>
                Many of our customers are international travellers, and some of the providers we rely on (for example, cloud hosting, booking software or payment processing) may store or process data outside Mauritius.
              </p>
              <p>
                Where we transfer personal data outside Mauritius, we take steps required by Part V of the Data Protection Act 2017 to ensure an appropriate level of protection — for example by relying on your consent, the performance of our contract with you, or appropriate safeguards and contractual protections with the provider.
              </p>
              <p>
                If you are located in the European Economic Area or the United Kingdom, transfers of your data are also handled in line with the GDPR and equivalent UK rules.
              </p>
            </section>

            {/* Section 8 */}
            <section className="legal-section">
              <h2>How long we keep your information</h2>
              <p>
                We keep your personal data only for as long as we need it for the purposes set out in this policy, and to meet our legal, accounting and tax obligations.
              </p>
              <ul>
                <li>Booking and rental records are kept for the duration of your hire and for a reasonable period afterwards to handle queries, claims, fines or disputes;</li>
                <li>Accounting and tax records are kept for the period required by Mauritian law;</li>
                <li>Marketing data is kept until you withdraw your consent or ask us to stop;</li>
                <li>Website and analytics data is kept for a limited period in line with our cookie settings.</li>
              </ul>
              <p>When we no longer need your data, we securely delete or anonymise it.</p>
            </section>

            {/* Section 9 */}
            <section className="legal-section">
              <h2>How we protect your information</h2>
              <p>
                We use appropriate technical and organisational measures to keep your personal data secure and to protect it against unauthorised access, loss, misuse or alteration. These include restricting access to those who need it, securing our systems, and working with providers who maintain suitable safeguards.
              </p>
              <p>
                No method of transmission over the internet is completely secure, but we take reasonable steps to protect your information and to respond appropriately should a personal data breach occur.
              </p>
            </section>

            {/* Section 10 */}
            <section className="legal-section">
              <h2>Cookies &amp; tracking</h2>
              <p>
                Our website uses cookies and similar technologies to make the site work, remember your preferences, understand how the site is used, and support our marketing. You can control non-essential cookies through your browser settings.
              </p>
            </section>

            {/* Section 11 */}
            <section className="legal-section">
              <h2>Marketing messages</h2>
              <p>
                Where you have agreed, we may send you offers, news and updates about our vehicles and services by email, WhatsApp or other channels. You can opt out at any time by using the unsubscribe link in our messages, replying to ask us to stop, or contacting us using the details provided above. Opting out of marketing does not affect messages we need to send you about a booking you have made.
              </p>
            </section>

            {/* Section 12 */}
            <section className="legal-section">
              <h2>Your rights</h2>
              <p>Under the Data Protection Act 2017 you have the right to:</p>
              <ul>
                <li>Be informed about how your data is used — which this policy explains;</li>
                <li>Access the personal data we hold about you;</li>
                <li>Rectify inaccurate or incomplete data;</li>
                <li>Erase your data where there is no longer a lawful reason for us to keep it;</li>
                <li>Restrict or object to certain processing, including direct marketing;</li>
                <li>Withdraw consent at any time, where we rely on your consent;</li>
                <li>Data portability, where applicable.</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us. We may need to verify your identity before acting on your request, and we will respond within the timeframe required by law.
              </p>
              <p>
                If you are unhappy with how we handle your personal data, you may also lodge a complaint with the Data Protection Office (Mauritius), the supervisory authority responsible for the Data Protection Act 2017. We would, however, appreciate the chance to address your concerns first.
              </p>
            </section>

            {/* Section 13 */}
            <section className="legal-section">
              <h2>Children</h2>
              <p>
                Our services are intended for adults who meet the minimum age and licence requirements to hire a vehicle. We do not knowingly collect personal data from children except where it relates to a booking made by their parent or guardian (for example, when arranging a child seat).
              </p>
            </section>

            {/* Section 14 */}
            <section className="legal-section">
              <h2>Third-party links</h2>
              <p>
                Our website may contain links to other websites, including social media, partners and payment pages. We are not responsible for the privacy practices of those sites, and we encourage you to read their privacy policies.
              </p>
            </section>

            {/* Section 15 */}
            <section className="legal-section">
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy from time to time to reflect changes in our practices or the law. When we do, we will revise the "last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

          </article>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="terms-modal-footer">
          <button 
            type="button" 
            className="btn-primary terms-modal-action-btn" 
            onClick={onClose}
          >
            Close &amp; Return to Website
          </button>
        </div>

      </div>
    </div>
  );
}
