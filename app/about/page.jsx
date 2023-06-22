import React from "react";

export default function About() {
  const Team = [
    {
      id: 0,
      src: "/assets/images/bel.png",
      position: "Back end (Data management)​",
      name: "Cho Bella Ngekwi",
      alt: "Data",
    },
    {
      id: 1,
      src: "/assets/images/lait.png",
      position: "Back end ( google API mapping​",
      name: "Negol-Sam Gilles ",
      alt: "Data",
    },
    {
      id: 2,
      src: "/assets/images/dl.png",
      position: "Front end (Visualization and interaction)​",
      name: "Edward Nguimeya",
      alt: "Data",
    },
  ];
  return (
    <>
      <header className="mt-24">
        <h1 className="heading max-w-auto sm:max-w-md ">
          Team passion of problem{" "}
          <span className=" text-RedOrange-0">solving</span>
        </h1>
      </header>
      <section className="mindset mt-32">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <h2 className="sub-heading">Our Mindset</h2>
          <div className="space-y-5">
            <p className="typo_normal max-w-md ">
              The success we have had so far working on this project is due to
              the fact that all team members are found in the same town.
              Therefore, despite our individual busy weekly schedules, we are
              able to meet physically from time to time to work on the project.​
            </p>
            <p className="typo_normal max-w-md ">
              The success we have had so far working on this project is due to
              the fact that all team members are found in the same town.
              Therefore, despite our individual busy weekly schedules, we are
              able to meet physically from time to time to work on the project.​
            </p>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <div className="flex flex-col gap-10 sm:flex-row justify-between items-start">
          <div className="glass p-5 space-y-2">
            <img src="/assets/images/1_Mindset_3D_Chat.png" alt="" />
            <h3 className="font-bold text-CreamyWhite-0">Communication</h3>
            <p className="typo_normal max-w-xs">
              Sharing knowledge is a great tool to achivement and problem
              solving
            </p>
          </div>
          <div className="glass p-5 space-y-2">
            <img src="/assets/images/12_Mindset_3D_Bulb.png" alt="" />
            <h3 className="font-bold text-CreamyWhite-0">Problem solving</h3>
            <p className="typo_normal max-w-xs">
              Taking our time to understand concepts which lead to problem
              solving
            </p>
          </div>
          <div className="glass p-5 space-y-2">
            <img src="/assets/images/5_Mindset_3D_Analytics.png" alt="" />
            <h3 className="font-bold text-CreamyWhite-0">Progress</h3>
            <p className="typo_normal max-w-xs">
              We keep track of our objectives and increase our progress
            </p>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="flex flex-col gap-5  sm:flex-row justify-between items-center">
          <div>
            <img
              className="w-[171px]"
              src="/assets/icons/la-place-icon 1.svg"
              alt="icon"
            />
          </div>

          <div>
            <h4 className="sub-heading-regular max-w-md">
              Story of how your project was inspired
            </h4>

            <div className="space-y-5 mt-5">
              <p className="typo_normal max-w-md ">
                The Laplace app is a great way to unlock learning and sport
                locations. It's an easy-to-use location finding app that helps
                you find the perfect spot for your learning and sport
                activities. Whether you're looking for a place to practice your
                golf swing or a spot to learn a new language, the Laplace app
                has something for everyone.
              </p>
              <p className="typo_normal max-w-md ">
                With its comprehensive database of learning and sport locations,
                you can easily find the perfect spot for whatever activity
                you're looking for. So, if you're ready to take your learning
                and sports activities to the next level, then it's time to
                unlock great learning and sports locations with the Laplace App!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team mt-40">
        <h4 className=" font-NeueLeiden font-bold text-[46px] text-CreamyWhite-0">
          Team Members
        </h4>
        <div className="container grid grid-cols-2 md:flex justify-between md:items-center ">
          {Team.map((teams) => (
            <div
              key={teams.id}
              className="text-center flex flex-col justify-center items-center space-y-2"
            >
              <div className=" object-contain">
                <img
                  className="mx-auto w-[100px] sm:w-auto"
                  src={teams.src}
                  alt={teams.alt}
                />
              </div>
              <div className="text-center w-auto sm:w-[190px]">
                <p className="text-xl sm:text-3xl text-CreamyWhite-0 ">
                  {teams.name}
                </p>
                <p className="text-sm text-BabyPowder-0 ">{teams.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
