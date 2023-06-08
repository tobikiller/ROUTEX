const page = () => {
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
            coveredssd.
          </p>
        </div>

        <img
          className="mt-8"
          src="assets/sector-activity.svg"
          alt="LaPlace different sectors"
        />
      </section>
    </>
  );
};

export default page;
