import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-[200vh] flex justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-[60px] grid-cols-1">Start your coding journey today</h1>

        <Button variant={"outline"} className="w-max">Hi There</Button>
      </div>
    </div>
  );
}
