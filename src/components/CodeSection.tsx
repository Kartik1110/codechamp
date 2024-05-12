import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { NotionRenderer } from "@/components/NotionRender"
import { NotionAPI } from 'notion-client'
import CodeEditor from "./CodeEditor"
import CodeSectionNav from "@/components/CodeSectionNav"

const api = new NotionAPI()

export default async function CodeSection() {
    // fetch the data for a specific page
    const page = await api.getPage(
        '2565257ddd2d44d59148c2598488e31e',
        // '1e2ea744a84e431e906d292a3a49b420'
    )
    return (
        <>
            <ResizablePanelGroup
                direction="horizontal"
                className="rounded-lg border border-gray-800"
            >
                <ResizablePanel className="overflow-y-scroll" defaultSize={50}>
                    <CodeSectionNav tabs={[{ href: "/problem/1", label: "Description" }, { href: "/submissions", label: "Submissions" }]} />
                    <div className="h-full p-5 overflow-y-auto">
                        {page && <NotionRenderer recordMap={page} />}
                    </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={25}>
                            <div className="h-full overflow-y-auto">
                                <CodeEditor />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex h-full items-center justify-center p-6">
                                <span className="font-semibold text-primary">Three</span>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}