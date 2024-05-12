import CodeSection from "@/components/CodeSection"
import { Button } from "@/components/ui/button"
import { Play, Cloud, List } from 'lucide-react';

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <div className="mt-20 w-full flex justify-between items-center my-5 px-5">
                <Button variant="secondary">Problems List <List className="ml-2" size={"20px"}/></Button>
                <div className="space-x-5">
                    <Button variant="outline">Run <Play className="ml-2" size={"20px"}/></Button>
                    <Button variant="secondary">Submit <Cloud className="ml-2" size={"20px"}/></Button>
                </div>
            </div>
            <div className="h-[90vh] w-[100wh] m-5">
                <CodeSection />
            </div>
        </div>
    )
}