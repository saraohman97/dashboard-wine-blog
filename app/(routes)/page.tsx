import { Card } from "@/components/ui/card";
import { IoIosWine } from "react-icons/io";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4">
        {/* HEADING */}
        <div>
          <h1 className="text-3xl font-bold mt-10">CMS</h1>
          <h2 className="font-bold text-gray-500">
            Det här är CMS:et till mat- och vinbloggen.
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Antal viner</h3>
              <IoIosWine className="text-gray-400" size={30} />
            </div>

            <h2 className="font-bold text-4xl">+4</h2>

            <small className="text-gray-500 text-xs">Sedan år 2024</small>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Antal viner</h3>
              <IoIosWine className="text-gray-400" size={30} />
            </div>

            <h2 className="font-bold text-4xl">+4</h2>

            <small className="text-gray-500 text-xs">Sedan år 2024</small>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Antal viner</h3>
              <IoIosWine className="text-gray-400" size={30} />
            </div>

            <h2 className="font-bold text-4xl">+4</h2>

            <small className="text-gray-500 text-xs">Sedan år 2024</small>
          </Card>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Antal viner</h3>
              <IoIosWine className="text-gray-400" size={30} />
            </div>

            <h2 className="font-bold text-4xl">+4</h2>

            <small className="text-gray-500 text-xs">Sedan år 2024</small>
          </Card>
        </div>
      </div>
    </main>
  );
}
