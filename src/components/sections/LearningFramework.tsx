import rectTop from "../../assets/Rectangle 29.png";
import rectBottom from "../../assets/Rectangle 30.png";

const LearningFramework = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6EFE7] py-[clamp(48px,6vw,96px)]">
      <div className="pointer-events-none absolute left-[40px] top-[120px] hidden h-[120px] w-[120px] text-[#D98956]/20 lg:block">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M60 12L72 48L108 60L72 72L60 108L48 72L12 60L48 48L60 12Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="pointer-events-none absolute right-[48px] top-[160px] hidden h-[96px] w-[96px] text-[#D98956]/20 lg:block">
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M48 10L56 38L86 48L56 58L48 86L40 58L10 48L40 38L48 10Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-[clamp(28px,4vw,48px)] px-6 lg:px-16">
        <div className="text-center text-[#6F5F52]">
          <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-[1.2]">
            The <span className="text-[#D98956]">Kinderra</span> Learning Framework
          </h2>
          <p className="mt-[clamp(8px,1.4vw,16px)] text-[clamp(14px,1.2vw,18px)] leading-[1.4]">
            Our Play to Readiness Program provides a Structured but Fun Learning
            Pathway
          </p>
        </div>

        <div className="grid items-start gap-[clamp(24px,4vw,48px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-[clamp(18px,2.5vw,28px)]">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[32px]">
              <img
                src={rectTop}
                alt="Children learning together"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[32px]">
              <img
                src={rectBottom}
                alt="Children in classroom"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[clamp(16px,2.4vw,24px)] text-[#6F5F52]">
            <p className="text-[clamp(16px,1.3vw,20px)] font-semibold leading-[1.5]">
              At Kinderra Play, learning through play is never random.
            </p>
            <p className="text-[clamp(14px,1.1vw,18px)] leading-[1.6]">
              Our Play to Readiness Pathway is designed to ensure children enjoy
              meaningful and steady development in the skills they need for both
              school readiness and life readiness.
            </p>
            <h3 className="text-[clamp(16px,1.3vw,20px)] font-semibold leading-[1.4]">
              What Children Build at Kinderra:
            </h3>
            <ul className="space-y-[clamp(10px,1.4vw,16px)] pl-5 text-[clamp(14px,1.1vw,18px)] leading-[1.6]">
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
            <p className="text-[clamp(14px,1.1vw,18px)] leading-[1.6]">
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
