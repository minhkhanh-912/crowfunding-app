import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthen = ({ children, heading = "", props }) => {
  return (
    <div className="relative w-full min-h-screen px-6 pt-6 pb-16 lg:p-10 bg-lite dark:bg-darkBG isolate">
      <img
        src="/eclipse.png"
        alt="bg"
        className="hidden lg:block absolute bottom-0 left-0 right-0 w-full pointer-events-none z-[-1]"
      />
      <Link to="/">
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="inline-block mb-5 lg:mb-16"
        />
      </Link>
      <div className="w-full max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto">
        <h1 className="mb-1 text-lg font-semibold text-center lg:text-xl lg:mb-3 text-text1 dark:text-white">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};
LayoutAuthen.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutAuthen, {
  FallbackComponent: ErrorComponent,
});
