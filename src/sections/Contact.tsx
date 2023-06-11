import { links } from "../constants/contact-links";
import { socials } from "../constants/socials";
import "../styles/sections/contact.scss";

export function Contact({ isMobile }: { isMobile?: boolean }) {
  return (
    <div className="content contact">
      <div className="contact_links">
        {links.map((item) => (
          <div key={item.topic} className="contact_links_item">
            <h5 className="contact_links_item_topic">{item.topic}</h5>
            {item.links.map((link) => (
              <a
                key={link.name}
                className="contact_links_item_link"
                target="_blank"
                href={link.url}
              >
                {link.name}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="divider" />
      <div className="contact_other">
        <div className="contact_other_access">
          <h5 className="contact_other_access_title">
            Early access and updates
          </h5>
          <i>* Indicate required field</i>
          <div className="contact_other_access_email">
            <label>Your Email *</label>
            <input className="contact_other_access_email_input" />
          </div>
          <button className="contact_other_access_submit">Submit</button>
          <p className="contact_other_access_disclaimer">
            Prifina will use your email address to send you Prifina’s Newsletter
            and occasional updates. Prifina will not share it with any third
            party.
          </p>
          <div className="contact_other_access_socials">
            {socials.map((social) => (
              <a target="_blank" href={social.url}>
                <img src={social.image} alt={`${social.name} logo`} />
              </a>
            ))}
          </div>
        </div>
        <div className="contact_other_company">
          <div className="contact_other_company_content">
            <h6>The User- Held Data Company</h6>
            <p>
              Prifina is a silicon valley based technological company. Prifina
              provides a personal data platform that empowers individuals to
              collect, combine and utilize their personal data to live happier
              and healthier lives. Companies and developers can build
              applications and services on top of user-held data.
            </p>
            <p>&copy; 2023 Prifina inc.</p>
          </div>
          <div className="header_logo">
            <img src="prifina-logo.svg" alt="Prifina logo" height={50} />
            Prifina
          </div>
        </div>
      </div>
    </div>
  );
}
