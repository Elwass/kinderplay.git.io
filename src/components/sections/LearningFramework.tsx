import rectTop from "../../assets/Rectangle 29.png";
import rectBottom from "../../assets/Rectangle 30.png";
import starLeft from "../../assets/vector.png";
import starRight from "../../assets/vector (1).png";

const LearningFramework = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6EFE7] py-[clamp(56px,7vw,120px)]">
      <img
        src={starLeft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[32px] top-[120px] hidden h-[132px] w-[132px] lg:block"
      />
      <img
        src={starRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[40px] top-[140px] hidden h-[120px] w-[120px] lg:block"
      />

      <div className="mx-auto flex w-full max-w-[1560px] flex-col gap-[clamp(28px,4.5vw,56px)] px-6 md:px-12 lg:px-24">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(32px,4.2vw,56px)] font-semibold leading-[1.15]">
            The <span className="text-[#D98956]">Kinderra</span> Learning Framework
          </h2>
          <p className="mx-auto mt-[clamp(10px,1.6vw,18px)] max-w-[720px] text-[clamp(15px,1.2vw,20px)] leading-[1.5]">
            Our Play to Readiness Program provides a Structured but Fun Learning
            Pathway
          </p>
        </div>

        <div className="grid items-start gap-[clamp(28px,4vw,56px)] lg:grid-cols-[minmax(0,540px)_minmax(0,1fr)] lg:items-center">
          <div className="flex flex-col gap-[clamp(20px,2.5vw,32px)]">
            <div className="h-[clamp(220px,24vw,320px)] w-full overflow-hidden rounded-[36px]">
              <img
                src={rectTop}
                alt="Children learning together"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[clamp(220px,24vw,320px)] w-full overflow-hidden rounded-[36px]">
              <img
                src={rectBottom}
                alt="Children in classroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(16px,2.2vw,28px)] text-[#6F5F52]">
            <p className="text-[clamp(16px,1.3vw,20px)] font-semibold leading-[1.6]">
              At Kinderra Play, learning through play is never random.
            </p>
            <p className="text-[clamp(15px,1.15vw,18px)] leading-[1.7]">
              Our Play to Readiness Pathway is designed to ensure children enjoy
              meaningful and steady development in the skills they need for both
              school readiness and life readiness.
            </p>
            <h3 className="text-[clamp(16px,1.3vw,20px)] font-semibold leading-[1.5]">
              What Children Build at Kinderra:
            </h3>
            <ul className="list-disc space-y-[clamp(10px,1.4vw,16px)] pl-6 text-[clamp(15px,1.15vw,18px)] leading-[1.7]">
              <li>
                <span className="font-semibold">Independence</span> — managing
                routines, self-care, and daily choices
              </li>
              <li>
                <span className="font-semibold">Confidence</span> — expressing
                ideas, trying new things, and speaking in groups
              </li>
              <li>
                <span className="font-semibold">Communication</span> — bilingual
                language development in English and Bahasa Indonesia
              </li>
            </ul>
            <p className="text-[clamp(15px,1.15vw,18px)] leading-[1.7]">
              Each activity is guided by trained educators with clear goals,
              milestones, and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFramework;
