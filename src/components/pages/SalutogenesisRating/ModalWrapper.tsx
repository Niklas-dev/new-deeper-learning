import React from "react";

export default function ModalWrapper({ children }: { children: any }) {
  return (
    <div className="pt-20 pb-6 flex justify-center md:justify-start">
      <div className="bg-white question-modal-shadow h-[500px] w-[900px] sm:h-[600px] sm:w-[900px] md:h-[600px] md:w-[900px] lg:h-[600px] lg:w-[900px] xl:h-[600px] xl:w-[900px] rounded-xl">
        {children}
      </div>
    </div>
  );
}
