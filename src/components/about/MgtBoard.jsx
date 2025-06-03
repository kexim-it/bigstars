import React from "react";
import CEO from "@/app/assets/images/staff/ceo.jpg";
import MD from "@/app/assets/images/staff/md.jpg";
import MgtCard from "./MgtCard";

const MgtBoard = () => {
  return (
    <section
      className="max-w-[80vw] mx-auto my-10 flex flex-col md:flex-row items-center gap-8"
      aria-label="Management Board"
    >
      <MgtCard
        company="Big Stars Animal Feed"
        name="Dr. James Ghanaraj Rajamani"
        position="Chief Executive Officer"
        profile="Dr. James Gnanaraj Rajamani is the Founder and Group Chief Executive Officer of Kingdom Exim Group, a diversified conglomerate headquartered in Ghana. Among its subsidiaries is Big Stars Animal Feed, established in 2017, which has become one of Ghana's top producers of compounded poultry and livestock feed."
        img={CEO}
      />
      <MgtCard
        company="Big Stars Animal Feed"
        name="Dr. Immanuel Rajamani"
        position="Managing Director"
        profile="Dr. Immanuel Rajamani is the Co-Founder and Group Managing Director of Kingdom Exim Group, a diversified conglomerate in Ghana with subsidiaries including Big Stars Animal Feed, a leading producer of compounded poultry and livestock feed established in 2017."
        img={MD}
      />
    </section>
  );
};

export default MgtBoard;
