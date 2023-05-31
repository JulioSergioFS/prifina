import { AnimateComponent } from "../components/AnimateComponent";
import useLocales from "../hooks/useLocales";
import "../styles/sections/testimonials.scss";

export function TestimonialCard({
  person,
  index,
}: {
  person: {
    name: string;
    link: string;
    text: string;
    photo: string;
    alt: string;
  };
  index: number;
}) {
  const { t } = useLocales();

  return (
    <AnimateComponent
      className="testimonials_item"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 * ((index + 1) / 4) },
        },
      }}
    >
      <div className="testimonials_item_content">
        <p className="text description">{person.text}</p>
        <div className="profile">
          <img className="logo" src={person.photo} alt={person.alt} />
          <p className="name">{person.name}</p>
        </div>
      </div>
    </AnimateComponent>
  );
}
