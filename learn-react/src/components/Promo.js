import PromoHeading from "./PromoHeading";

function Promo(props) {
  return (
    <div className="promo-section">
      <PromoHeading heading={props.heading} subheading={props.subheading} />
    </div>
  );
}

export default Promo;
