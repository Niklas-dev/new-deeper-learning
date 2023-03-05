import React from "react";

import WHOReviewHeadline from "./WHOReviewHeadline";
import WHOReviewBody from "./WHOReviewBody";

export default function WHOReview() {
  return (
    <main className="flex justify-center items-center bg-white min-h-[500px] md:min-h-[750px] overflow-y-visible">
      <div className="max-w-[1920px]   md:min-h-[800px]    w-screen md:px-20 lg:px-40 md:py-40 lg:py-12 xl:py-28 px-12 ">
        <WHOReviewHeadline />
        <WHOReviewBody />
      </div>
    </main>
  );
}
