import WineTable from "./components/client";
import { Plus } from "lucide-react";
import { PiCircleDuotone, PiCircleFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import useAddWineModal from "@/hooks/useAddWineModal";
import Client from "./components/client";

const WinesPage = () => {
  // const addWineModal = useAddWineModal()

  return (
    <>
      <div className="max-w-screen-xl mx-auto flex lg:gap-10">
        {/* SIDEBAR */}
        <div className="lg:py-10 lg:pr-10 p-4 w-96 border-r">
          <div>
            <h1 className="text-2xl font-bold">Välkommen Sara!</h1>
            <h2 className="font-bold text-gray-500">
              Det här är CMS:et till mat- och vinbloggen.
            </h2>
          </div>

          <div className="mt-8 text-sm">
            <div className="flex gap-10 items-start">
              <PiCircleFill />
              <div>Lista på viner</div>
            </div>
            <div className="h-10 border-l ml-[6px] my-2" />
            <div className="flex gap-10 items-start">
              <PiCircleDuotone />
              <div>Lista på artiklar</div>
            </div>
            <div className="h-10 border-l ml-[6px] my-2" />
            <div className="flex gap-10 items-start">
              <PiCircleDuotone />
              <div>Lista på API-länkar</div>
            </div>
          </div>
        </div>
        <Client />
      </div>
    </>
  );
};

export default WinesPage;
