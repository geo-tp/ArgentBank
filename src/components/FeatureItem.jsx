import PropTypes from "prop-types";

export const FeatureItem = ({ icon, alt, title, description }) => {
  return (
    <div class="feature-item">
      <img src={icon} alt={alt} class="feature-icon" />
      <h3 class="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

FeatureItem.propsType = {
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
