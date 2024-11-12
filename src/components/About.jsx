import React, { useEffect } from "react";

export default function About(props) {
  useEffect(() => {
    // Change the document title
    document.title = "Textutils - About Us";

    const toggleAccordion = (event) => {
      const button = event.currentTarget;
      const target = document.querySelector(
        button.getAttribute("data-bs-target")
      );
      target.classList.toggle("hidden");
      button.setAttribute(
        "aria-expanded",
        !target.classList.contains("hidden")
      );
    };

    const buttons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    buttons.forEach((button) => {
      button.addEventListener("click", toggleAccordion);
    });

    // Clean up event listeners on component unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", toggleAccordion);
      });
    };
  }, []);

  return (
    <div className="mt-5 mx-16">
      <p className={`text-5xl underline ${props.mode=='dark'? 'text-gray-300': 'text-black'}`}>About us</p>
      <div className="space-y-4 mt-12" id="accordionExample">
        <div className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
          <h2 className="accordion-header">
            <button
              className={`w-full text-left px-4 py-2   font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                props.mode === "dark"
                  ? "text-white bg-gray-800 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text </strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse">
            <div
              className={`accordion-body px-4 py-3 ${
                props.mode === "dark"
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>

        <div className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
          <h2 className="accordion-header">
            <button
              className={`w-full text-left px-4 py-2   font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                props.mode === "dark"
                  ? "text-white bg-gray-800 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use </strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse hidden">
            <div
              className={`accordion-body px-4 py-3 ${
                props.mode === "dark"
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>

        <div className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
          <h2 className="accordion-header">
            <button
              className={`w-full text-left px-4 py-2   font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 ${
                props.mode === "dark"
                  ? "text-white bg-gray-800 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible </strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse hidden">
            <div
              className={`accordion-body px-4 py-3 ${
                props.mode === "dark"
                  ? "bg-gray-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
