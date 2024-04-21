import CodeSection from "@/components/CodeSection"
import { Button } from "@/components/ui/button"

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <div className="mt-20 w-full flex justify-between items-center my-5 px-5">
                <Button variant="secondary">📝 Problems List</Button>
                <div className="space-x-5">
                    <Button variant="outline">► Run</Button>
                    <Button variant="secondary">Submit</Button>
                </div>
            </div>
            <div className="h-[90vh] w-[100wh] m-5">
                <CodeSection />
            </div>
        </div>
    )
}