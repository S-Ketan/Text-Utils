import React, { useEffect } from "react";

export default function About(props) {
  useEffect(() => {
    const toggleAccordion = (event) => {
      const button = event.currentTarget;
      const target = document.querySelector(button.getAttribute("data-bs-target"));
      target.classList.toggle("hidden");
      button.setAttribute("aria-expanded", !target.classList.contains("hidden"));
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
    <div >
      <div className="space-y-4" id="accordionExample">
        <div className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
          <h2 className="accordion-header">
            <button
              className={`w-full text-left px-4 py-2   font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 ${props.mode==='dark' ? 'text-white bg-gray-800 hover:bg-gray-600':'bg-gray-100 hover:bg-gray-200'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse">
            <div className={`accordion-body px-4 py-3 ${props.mode==='dark' ? 'bg-gray-500 text-white' : 'bg-white text-gray-700'}`}>
              <strong>This is the first item's accordion body.</strong> It is shown by default,
              and you can style and modify this accordion body content as needed.
            </div>
          </div>
        </div>

        <div className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
          <h2 className="accordion-header">
            <button
              className={`w-full text-left px-4 py-2   font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 ${props.mode==='dark' ? 'text-white bg-gray-800 hover:bg-gray-600':'bg-gray-100 hover:bg-gray-200'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse hidden">
            <div className={`accordion-body px-4 py-3 ${props.mode==='dark' ? 'bg-gray-500 text-white' : 'bg-white text-gray-700'}`}>
              <strong>This is the second item's accordion body.</strong> You can style and modify
              this accordion body content as needed.
            </div>
          </div>
        </div>

        <div className="accordion-item border border-gray-300 rounded-lg overflow-hidden">
          <h2 className="accordion-header">
            <button
             className={`w-full text-left px-4 py-2   font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400 ${props.mode==='dark' ? 'text-white bg-gray-800 hover:bg-gray-600':'bg-gray-100 hover:bg-gray-200'}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse hidden">
            <div className={`accordion-body px-4 py-3 ${props.mode==='dark' ? 'bg-gray-500 text-white' : 'bg-white text-gray-700'}`}>
              <strong>This is the third item's accordion body.</strong> You can style and modify
              this accordion body content as needed.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

