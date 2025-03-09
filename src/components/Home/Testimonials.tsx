import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonies" className="py-20 ">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center ">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-white rounded-lg md:text-center text-cn bg-primary  hover:cursor-pointer hover:bg-opacity-90">
              Words from Our Community
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-primary md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-700 md:text-center md:text-2xl">
              Here's what our students and tutors have to say about us.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                {/* <div className="absolute transition rounded-lg opacity-25 -inset-1 shadow-lg shadow-cyan-500/40 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div> */}
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Emily Johnson
                        </h3>
                        <p className="text-gray-800 text-md">Biology Student</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      The personalized study plans completely transformed my
                      approach to learning. I went from struggling with complex
                      concepts to acing my finals in just one semester!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Dr. Robert Chen
                        </h3>
                        <p className="text-gray-500 text-md">Physics Tutor</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      The platform makes it incredibly easy to connect with
                      engaged students. I've been able to share my passion for
                      physics while helping students overcome challenges I once
                      faced myself.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/kanyewest"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Michael Torres
                        </h3>
                        <p className="text-gray-500 text-md">
                          Computer Science Student
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      The one-on-one coding sessions helped me understand
                      algorithms in ways textbooks never could. My tutor didn't
                      just help with assignments—she taught me how to think like
                      a programmer.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Sarah Williams
                        </h3>
                        <p className="text-gray-500 text-md">
                          Literature Tutor
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      Being able to discuss classic literature with diverse
                      students has been incredibly rewarding. The flexible
                      scheduling lets me continue my PhD research while making a
                      meaningful impact.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Aisha Patel
                        </h3>
                        <p className="text-gray-500 text-md">Math Student</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      I was failing calculus before finding this platform. My
                      tutor broke down complex concepts into manageable steps
                      and taught me study techniques that helped me ace my AP
                      exam with a perfect score!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Marcus Alvarez
                        </h3>
                        <p className="text-gray-500 text-md">Chemistry Tutor</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      The interactive virtual lab simulations make teaching
                      chemistry concepts so much more engaging. Students can
                      visualize reactions and understand mechanisms in ways
                      traditional tutoring never allowed.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Jordan Kim
                        </h3>
                        <p className="text-gray-500 text-md">History Student</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      My tutor's passion for historical narratives made what
                      used to be boring dates and facts come alive. The essay
                      writing techniques I learned helped me get accepted to my
                      dream college with a full scholarship.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/tim_cook"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Tim Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Professor James Wilson
                        </h3>
                        <p className="text-gray-500 text-md">Economics Tutor</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      The platform's data analytics help me track student
                      progress and customize lessons accordingly. I've seen
                      remarkable improvement in my students' grasp of economic
                      theories and their application to real-world scenarios.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Tyler Rodriguez
                        </h3>
                        <p className="text-gray-500 text-md">ESL Student</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      Learning English as a second language was intimidating
                      until I found my tutor here. The conversation practice and
                      cultural context helped me gain confidence, and I now work
                      as a translator for a multinational company.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/dan_schulman"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Grace Thompson
                        </h3>
                        <p className="text-gray-500 text-md">
                          Art History Tutor
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      The virtual museum tours feature lets me bring
                      masterpieces to life for my students. Watching them
                      develop critical analysis skills and deep appreciation for
                      art makes every session rewarding.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Olivia Washington
                        </h3>
                        <p className="text-gray-500 text-md">
                          Psychology Student
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      My tutor's real-world clinical experience brought textbook
                      concepts to life. The practice quizzes and case studies
                      prepared me so well that I received the department award
                      for highest GPA in the psychology program.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6 shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1  duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/dan_schulman"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-teal-800 ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Dan Schulman"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          David Nguyen
                        </h3>
                        <p className="text-gray-500 text-md">
                          Mathematics Tutor
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                      As a former Math Olympiad winner, I love guiding students
                      through challenging problems. The platform's collaborative
                      whiteboard makes explaining complex proofs intuitive,
                      leading to those wonderful "aha!" moments.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
