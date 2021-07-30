import PropTypes from "prop-types";
import React from "react";
const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);
export default Section;
Section.prototype = {
  title: PropTypes.string.isRequired,
};
