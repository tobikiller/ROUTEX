import Marquee from "react-fast-marquee";
import Head from "next/head";
import Link from "next/link";
const page = () => {
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
      <section className="mt-24">
        <h1 className="heading">
          The Place For Great
          <br />
          Hidden <span className="text-RedOrange-0 font-bold">Location</span>
        </h1>
        <img
          className="mt-8"
          src="assets/Map-locations.svg"
          alt="LaPlace map illustrations"
        />
      </section>
      <section className="mt-24  flex flex-col md:flex-row gap-10 items-center justify-between">
        <div className="space-y-5 sm:max-w-xl md:max-w-[428px]">
          <h2 className="heading">
            Every thing you
            <br />
            need to know
          </h2>
          <p className="typo_normal">
            LA PLACE provides a comprehensive listing of sports and learning
            facilities in your area. Our web map includes locations such as
            gyms, dance studios, libraries, and tutoring centers. Whether you're
            looking to get fit or learn something new, LA PLACE has got you
            covered.
          </p>
        </div>

        <img
          className="mt-8"
          src="assets/sector-activity.svg"
          alt="LaPlace different sectors"
        />
      </section>

      {/* features services */}
      <section className="grid grid-cols-1 sm:grid-cols-2  gap-5 md:gap-x-40 place-content-center sm:max-w-3xl md:max-w-full w-full justify-items-center mt-24 ">
        <div className="glass    p-5 space-y-2">
          <div className="space-y-1">
            <div className="glass-circle h-10 w-10 rounded-full flex justify-center items-center">
              <img src="assets/icons/search.svg" alt="" />
            </div>
            <p className="font-bold text-CreamyWhite-0 text-base ">
              Search Function
            </p>
          </div>

          <p className="typo_normal">
            Our search function allows you to easily find the location you're
            looking for, whether it's a gym, library, or tutoring center.
          </p>
        </div>
        <div className="glass   p-5 space-y-2">
          <div className="space-y-1">
            <div className="glass-circle h-10 w-10 rounded-full flex justify-center items-center">
              <img src="assets/icons/blur_on.svg" alt="" />
            </div>
            <p className="font-bold text-CreamyWhite-0 text-base ">
              Filtering Options
            </p>
          </div>

          <p className="typo_normal">
            Our filtering options allow you to narrow down your search based on
            specific criteria, such as distance, price, and rating.
          </p>
        </div>
        {/* icon */}
        <div className=" sm:col-span-2 place-self-center place-items-center max-w-2xl flex justify-center items-center w-20 h-20 rounded-full glass-icon p-4">
          <img className="w-14" src="assets/la-place-icon.svg" alt="" />
        </div>
        {/* end-icon */}
        <div className="glass w-full    p-5 space-y-2">
          <div className="space-y-1">
            <div className="glass-circle h-10 w-10 rounded-full flex justify-center items-center">
              <img src="assets/icons/reviews.svg" alt="" />
            </div>
            <p className="font-bold text-CreamyWhite-0 text-base ">
              User Reviews
            </p>
          </div>

          <p className="typo_normal">
            Our filtering options allow you to narrow down your search based on
            specific criteria, such as distance, price, and rating.
          </p>
        </div>
        <div className="glass    p-5 space-y-2 h-full">
          <div className="space-y-1">
            <div className="glass-circle h-10 w-10 rounded-full flex justify-center items-center">
              <img src="assets/icons/assistant_navigation-1.svg" alt="" />
            </div>
            <p className="font-bold text-CreamyWhite-0 text-base ">
              interactive map
            </p>
          </div>

          <p className="typo_normal">
            Our interactive map allows you to easily navigate and explore the
            locations in your area.
          </p>
        </div>
      </section>

      {/* marquee side */}
      <div className="realtive mb-24">
        <section className="left-0 absolute overflow-hidden  w-screen">
          <Marquee className="py-4">
            <div className="flex gap-10">
              <div className="flex  items-center space-x-5">
                <div className="flex items-center gap-5">
                  <p className=" uppercase text-CreamyWhite-0 sm:text-[58.73px] text-4xl ">
                    A Place to be for
                  </p>
                  <div className="md:w-14 md:h-14 w-5 h-5 rounded-full p-1  glass-icon flex items-center justify-center md:p-3">
                    <img
                      src="/assets/icons/footballer.svg"
                      alt="football-icon"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <p className=" uppercase text-CreamyWhite-0 sm:text-[58.73px] text-4xl ">
                    A Place to be for
                  </p>
                  <div className="md:w-14 md:h-14 w-5 h-5 rounded-full p-1  glass-icon flex items-center justify-center md:p-3">
                    <img
                      src="/assets/icons/footballer.svg"
                      alt="football-icon"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 ">
                  <p className=" uppercase text-CreamyWhite-0 sm:text-[58.73px] text-4xl ">
                    A Place to be for
                  </p>
                  <div className="md:w-14 md:h-14 w-5 h-5 rounded-full p-1  glass-icon flex items-center justify-center md:p-3">
                    <img
                      src="/assets/icons/footballer.svg"
                      alt="football-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
          <Marquee direction="right" className="p-8 h-[150px]">
            <div className="flex gap-10">
              <div className="flex  items-center space-x-5">
                <div className="flex items-center gap-5">
                  <p className=" uppercase text-CreamyWhite-0 sm:text-[58.73px] text-4xl ">
                    A Place to be for
                  </p>
                  <div className="md:w-14 md:h-14 w-5 h-5 rounded-full p-1  glass-icon flex items-center justify-center md:p-3">
                    <img
                      src="/assets/icons/footballer.svg"
                      alt="football-icon"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <p className=" uppercase text-CreamyWhite-0 sm:text-[58.73px] text-4xl ">
                    A Place to be for
                  </p>
                  <div className="md:w-14 md:h-14 w-5 h-5 rounded-full p-1  glass-icon flex items-center justify-center md:p-3">
                    <img
                      src="/assets/icons/footballer.svg"
                      alt="football-icon"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5 ">
                  <p className=" uppercase text-CreamyWhite-0 sm:text-[58.73px] text-4xl ">
                    A Place to be for
                  </p>
                  <div className="md:w-14 md:h-14 w-5 h-5 rounded-full p-1  glass-icon flex items-center justify-center md:p-3">
                    <img
                      src="/assets/icons/footballer.svg"
                      alt="football-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Marquee>
        </section>
      </div>
      <section className="team mt-80">
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

      {/* <section className="flex-col flex sm:flex-row sm:justify-between items-center gap-5 mt-24">
        <div className=" bg-CreamyWhite-0 flex flex-col items-start w-full  justify-end  p-5 e-g  h-[150px] sm:h-[200px] rounded-xl">
          <Link className="flex gap-5 text-2xl sm:text-4xl" href="/">
            La place brand <br></br> guideline
            <img src="/assets/icons/arrow_downward.svg" alt="" />
          </Link>
        </div>
        <div className=" bg-CreamyWhite-0 flex flex-col items-start w-full hover:di  justify-end p-5  e-g h-[150px] sm:h-[200px] rounded-xl">
          <Link className="flex gap-5 text-2xl sm:text-4xl" href="/">
            How la place was <br></br> created
            <img src="/assets/icons/arrow_downward.svg" alt="" />
          </Link>
        </div>
      </section> */}
    </>
  );
};

export default page;
