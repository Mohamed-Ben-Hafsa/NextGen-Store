import React from "react";

function AboutUs() {
  return (
    <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Hey 👋 I am
              <br className="block " />
              Mohamed Ben Hafsa
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              passionate about web development, with more than 3 years of
              experience in the field of design, development and deployment of
              innovative software solutions. solid knowledge of agile methods
              and quality principles. Able to work in a team, communicate
              effectively and resolve complex problems. Always motivated to
              learn new technologies and take on challenges.
            </p>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900" />
                <span className="relative"> Have a question? </span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{" "}
              <a
                href="https://ar-ar.facebook.com/ulquiorra.benhafsa/"
                title=""
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
              >
                FaceBook
              </a>
            </p>
          </div>
          <div className="relative">
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://wallpaper.dog/large/20495534.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
