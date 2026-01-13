import heroBg from "../../assets/Hero Section.png";
import logo from "../../assets/kinderra-logo.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <img
        src={heroBg}
        alt="Kinderra Play background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col items-center px-6 pb-[clamp(32px,5vw,80px)] pt-[clamp(24px,4vw,56px)] sm:px-8 lg:px-16 xl:px-[120px]">
        <div className="flex w-full flex-col items-center gap-[clamp(16px,3vw,28px)] lg:flex-row lg:items-start lg:justify-between">
          <img
            src={logo}
            alt="Kinderra Play"
            className="h-[clamp(150px,18vw,231px)] w-[clamp(120px,14vw,185px)] object-contain"
          />

          <div className="flex flex-1 items-center justify-center gap-[clamp(12px,2vw,18px)]">
            <button
              type="button"
              aria-label="Previous announcement"
              className="h-[clamp(10px,1.2vw,12px)] w-[clamp(10px,1.2vw,12px)] text-[#D98956] opacity-[0.75]"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 2L4 6L8 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="relative flex h-[clamp(48px,4.5vw,61px)] w-[clamp(320px,45vw,686px)] items-center justify-center rounded-[999px] bg-[#D98956] text-[#FFFFFF]">
              <div className="absolute left-[clamp(18px,2.2vw,34px)] top-1/2 h-[clamp(16px,1.6vw,20px)] w-[clamp(14px,1.4vw,18px)] -translate-y-1/2">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2.5C7.7 2.5 5.8 4.4 5.8 6.7V9.6C5.8 10 5.7 10.4 5.5 10.8L4.4 12.7C4.1 13.2 4.5 13.8 5.1 13.8H14.9C15.5 13.8 15.9 13.2 15.6 12.7L14.5 10.8C14.3 10.4 14.2 10 14.2 9.6V6.7C14.2 4.4 12.3 2.5 10 2.5Z"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.3 15.2C8.6 16.1 9.2 16.6 10 16.6C10.8 16.6 11.4 16.1 11.7 15.2"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="px-[clamp(56px,6vw,90px)] text-[clamp(12px,1.4vw,17px)] leading-[1.25]">
                JOIN OUR TRIAL CLASS &amp; STORY BOOK PLAYDATE{" "}
                <span className="font-semibold">ON JANUARY 17 &amp; 24!</span>
              </p>
            </div>

            <button
              type="button"
              aria-label="Next announcement"
              className="h-[clamp(10px,1.2vw,12px)] w-[clamp(10px,1.2vw,12px)] text-[#D98956] opacity-[0.75]"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 2L8 6L4 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            className="flex h-[clamp(36px,3.4vw,45px)] w-[clamp(140px,12vw,181px)] items-center justify-center gap-[clamp(6px,1vw,10px)] rounded-[999px] border-[3px] border-[#6F5F52] bg-transparent"
          >
            <span className="text-[clamp(16px,1.6vw,24px)] font-semibold uppercase text-[#6F5F52]">
              Register
            </span>
            <svg
              className="h-[clamp(10px,1vw,14px)] w-[clamp(10px,1vw,14px)]"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6H10M6 2L10 6L6 10"
                stroke="#6F5F52"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="mt-[clamp(40px,7vw,120px)] flex w-full flex-col items-center text-center">
          <h1 className="text-[clamp(36px,4.5vw,64px)] font-semibold leading-[1.1] text-[#6F5F52]">
            Early Learning Center
          </h1>
          <h2 className="mt-[clamp(6px,1.4vw,16px)] text-[clamp(22px,2.6vw,40px)] font-medium leading-[1.2] text-[#6F5F52]">
            Play – Learn – Grow
          </h2>
        </div>

        <div className="mt-[clamp(18px,3.5vw,44px)] flex w-full max-w-[900px] flex-col items-center gap-[clamp(10px,2.2vw,20px)] text-center text-[clamp(14px,1.6vw,20px)] leading-[1.5] text-[#6F5F52]">
          <p>
            <span className="font-semibold">
              Kinderra Play, a premium early learning center
            </span>{" "}
            supporting the development of{" "}
            <span className="font-semibold">confident</span>,{" "}
            <span className="font-semibold">independent</span>, and{" "}
            <span className="font-semibold">communicative</span> children through guided{" "}
            <span className="font-semibold">play, discovery, and joy.</span>
          </p>
          <p>
            Inspired by the{" "}
            <span className="font-semibold">
              Australian Early Years Learning Framework
            </span>
            , Kinderra Play delivers a calm, intentional, and professionally designed
            and structured learning experience—where play is purposeful and every day
            builds clear progress.
          </p>
        </div>

        <div className="mt-[clamp(24px,4.5vw,64px)] flex flex-col items-center justify-center gap-[clamp(16px,3vw,44px)] sm:flex-row">
          <button
            type="button"
            className="flex h-[clamp(60px,6vw,82px)] w-[clamp(220px,20vw,294px)] flex-col items-center justify-center rounded-[999px] bg-[#D98956] text-[clamp(16px,1.6vw,20px)] font-semibold leading-[1.3] text-white shadow-[0px_0px_10px_2px_rgba(255,210,49,0.5)]"
          >
            <span>Register for a</span>
            <span>Trial Class</span>
          </button>
          <button
            type="button"
            className="flex h-[clamp(60px,6vw,82px)] w-[clamp(220px,20vw,294px)] flex-col items-center justify-center rounded-[999px] border-[3px] border-[#D98956] bg-transparent text-[clamp(16px,1.6vw,20px)] font-medium leading-[1.3] text-[#D98956] shadow-[0px_0px_8px_1px_rgba(217,137,86,0.2)]"
          >
            <span>Get Enrollment</span>
            <span>Information</span>
          </button>
        </div>

        <div className="mt-[clamp(32px,6vw,88px)] flex flex-col items-center justify-center gap-[clamp(20px,4vw,54px)] text-[#6F5F52] lg:flex-row">
          <div className="text-center text-[clamp(22px,2.8vw,40px)] font-medium leading-[1.1]">
            1-5 y.o
            <div className="mt-[clamp(6px,1vw,8px)] text-[clamp(14px,1.6vw,20px)] font-normal leading-[1.2]">
              Age
            </div>
          </div>
          <div className="hidden h-[clamp(40px,4.5vw,53px)] w-[3px] rounded-[31px] bg-[#6F5F52] lg:block" />
          <div className="text-center text-[clamp(22px,2.8vw,40px)] font-medium leading-[1.1]">
            Bilingual
            <div className="mt-[clamp(6px,1vw,8px)] text-[clamp(14px,1.6vw,20px)] font-normal leading-[1.2]">
              Language
            </div>
          </div>
          <div className="hidden h-[clamp(40px,4.5vw,53px)] w-[3px] rounded-[31px] bg-[#6F5F52] lg:block" />
          <div className="text-center text-[clamp(22px,2.8vw,40px)] font-medium leading-[1.1]">
            Full &amp; Half Day Programs
            <div className="mt-[clamp(6px,1vw,8px)] text-[clamp(14px,1.6vw,20px)] font-normal leading-[1.2]">
              Program
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
