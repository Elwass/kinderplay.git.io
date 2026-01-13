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
        className="pointer-events-none absolute left-[64px] top-[220px] hidden h-[140px] w-[140px] lg:block"
      />
      <img
        src={starRight}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[96px] top-[260px] hidden h-[120px] w-[120px] lg:block"
      />

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[clamp(28px,4vw,52px)] px-6 md:px-12 lg:px-20">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(32px,3.4vw,52px)] font-semibold leading-[1.2]">
            The <span className="text-[#D98956]">Kinderra</span> Learning Framework
          </h2>
          <p className="mx-auto mt-[14px] max-w-[640px] text-[clamp(14px,1.1vw,18px)] leading-[1.5] tracking-[0.01em]">
            Our Play to Readiness Program provides a Structured but Fun Learning
            Pathway
          </p>
        </div>

        <div className="grid items-start gap-[clamp(28px,4vw,52px)] lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center">
          <div className="flex flex-col gap-[clamp(18px,2.4vw,28px)]">
            <div className="h-[clamp(230px,23vw,300px)] w-full overflow-hidden rounded-[32px]">
              <img
                src={rectTop}
                alt="Children learning together"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-[clamp(230px,23vw,300px)] w-full overflow-hidden rounded-[32px]">
              <img
                src={rectBottom}
                alt="Children in classroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(14px,2vw,22px)] text-[#6F5F52]">
            <p className="text-[clamp(15px,1.1vw,18px)] font-semibold leading-[1.6]">
              At Kinderra Play, learning through play is never random.
            </p>
            <p className="text-[clamp(14px,1.05vw,17px)] leading-[1.65]">
              Our Play to Readiness Pathway is designed to ensure children enjoy learning
              while steadily developing the skills they need for both school readiness and
              life readiness.
            </p>
            <h3 className="text-[clamp(15px,1.1vw,18px)] font-semibold leading-[1.5]">
              What Children Build at Kinderra :
            </h3>
            <ul className="flex flex-col gap-[clamp(10px,1.4vw,14px)] text-[clamp(14px,1.05vw,17px)] leading-[1.6]">
              <li className="flex items-start gap-3">
                <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-[#6F5F52]" />
                <span>
                  <span className="font-semibold">Independence</span> – managing
                  routines, self-care, and dailychoices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-[#6F5F52]" />
                <span>
                  <span className="font-semibold">Confidence</span> – expressing ideas,
                  trying new things, and speaking in groups
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-[#6F5F52]" />
                <span>
                  <span className="font-semibold">Communication</span> – bilingual
                  language development in Englishand Bahasa Indonesia
                </span>
              </li>
            </ul>
            <p className="text-[clamp(14px,1.05vw,17px)] leading-[1.65]">
              Each activity is guided by trained educators with clear goals, milestones
              , and outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFramework;
