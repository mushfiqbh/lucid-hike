import Link from "next/link";
import Image from "next/image";
import { blogImage } from "@/assets/assets";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <span className="text-sm text-gray-500">
            Popular Article • October 21, 2023
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4">
            Best Strategy to Achieve Profitable Harvest
          </h1>
          <p className="text-gray-600 mb-6">
            Optimal strategies achieving profitable harvests involve a
            comprehensive approach to farm management, efficient resource
            allocation, and adopting sustainable practices.
          </p>
          <Image
            src={blogImage}
            alt="Orange on tree"
            width={600}
            height={400}
            className="mx-auto rounded-lg"
          />
        </div>

        <section className="mt-8 text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            Achieve a profitable harvest
          </h2>
          <p className="mb-4">
            Achieving a profitable harvest relies on several strategic steps
            that focus on selecting the right varieties, efficient farm
            management, use of agricultural technology, optimal timing of
            harvest, and sustainable practices.
          </p>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Selection of the Right Varieties and Seeds:</strong>{" "}
              Choosing the right variety is key to a successful harvest. This
              includes in-depth research on the varieties suited to
              environmental, climate, soil conditions, as well as selecting
              high-quality seeds that can achieve a high yield.
            </li>
            <li>
              <strong>Efficient Crop Management:</strong> Efficient plant
              management involves regular maintenance, application of
              appropriate fertilizers according to plant needs, as well as
              monitoring the growth, health, and pest conditions.
            </li>
            <li>
              <strong>Use of Agricultural Technology:</strong> Utilization of
              agricultural technology involves the use of various advanced tools
              and techniques such as sensors, drones, and precision farming
              tools to optimize the agricultural process.
            </li>
            <li>
              <strong>Choosing the Right Harvest Time:</strong> Choosing the
              right time to harvest is careful monitoring of crop maturity,
              weather conditions, and other factors to ensure crops are
              harvested under the best conditions to achieve maximum profitable
              yields.
            </li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Blogs</h2>
          {[
            { title: "t", content: "tf" },
            { title: "t", content: "tf" },
            { title: "t", content: "tf" },
          ].map((item, index) => (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" key={index}>
              <div className="bg-white rounded-lg shadow-sm p-4">
                <Image
                  src="/tomatoes.jpg"
                  alt="Tomatoes in hand"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.content}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <section className="bg-green-100 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Get involved in the agricultural uprising
          </h2>
          <div className="flex justify-center space-x-4">
            <Link
              href="/explore"
              className="bg-white px-6 py-3 rounded-full shadow hover:bg-gray-100"
            >
              Explore Now
            </Link>
            <Link
              href="/join"
              className="bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600"
            >
              Join Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
