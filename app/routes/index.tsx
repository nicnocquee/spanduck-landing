import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Lottie from "lottie-react";
import duck from "../../public/duck.json";
import rocket from "../../public/rocket.json";
import working from "../../public/working.json";

export const loader = async (args: LoaderArgs) => {
  const data = [
    { text: `We're coming. Be ready.`, animation: duck },
    { text: `Launching soon. Strap on.`, animation: rocket },
    {
      text: `Come again later. We're crafting something special.`,
      animation: working,
    },
  ];

  const index = 0; // Math.floor(Math.random() * data.length);

  return json(data[index]);
};

export const handle = { hydrate: true };

export default function Index() {
  const { animation, text } = useLoaderData<typeof loader>();
  return (
    <div className="flex flex-col space-y-2 p-8">
      <div className="mx-auto max-w-sm max-h-16">
        <Lottie animationData={animation} loop={true} />
        <p className="text-center text-xl font-extrabold">{text}</p>
        <p className="text-center text-xs text-white">
          Namanya Spanduck. Dari kata spanduk. Tapi biar ada kata binatangnya
          kek Bannerbear, jadi Spanduck. That's right, we're clonning Bannerbear
          lol.
        </p>
      </div>
    </div>
  );
}
