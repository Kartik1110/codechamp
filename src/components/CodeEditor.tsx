"use client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function CodeEditor() {
    const [language, setLanguage] = useState("JavaScript");

    const [codeValue, setCodeValue] = useState({
        "javascript": "// Write your code here"
    });

    const handleChange = (value?: string) => {
        console.log(value);
        if (value) setCodeValue((prev: any) => ({ ...prev, [language]: value }));
    };

    return (
        <div className="h-full">
            <LanguageSelector languages={[{
                id: 1,
                value: "javascript",
                label: "JavaScript",
            }, {
                id: 2,
                value: "typescript",
                label: "TypeScript",
            }, {
                id: 3,
                value: "python",
                label: "Python",
            }
            ]} setLanguage={setLanguage} />
            <Editor
                height={"calc(100% - 2.4rem)"}
                value={codeValue[language as keyof typeof codeValue]}
                theme="vs-dark"
                onMount={() => { }}
                options={{
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                }}
                language={language}
                onChange={handleChange}
                defaultLanguage="javascript"
            />
        </div>
    )
}

function LanguageSelector({ languages, setLanguage }: { languages: { id: number, value: string, label: string }[], setLanguage: (value: string) => void }) {
    return (
        <div className="pb-2 flex">
            <Select
                onValueChange={(value) => {
                    setLanguage(value);
                }}
                defaultValue="javascript"
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    {languages.map(({ id, value, label }) => (
                        <SelectItem key={id} value={value}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}