"use client";
import { NotionRenderer as NotionRendererLib } from "react-notion-x";
// import { Code } from "react-notion-x/build/third-party/code";
// import CodeBlock from "./CodeBlock";

export const NotionRenderer = ({ recordMap }: { recordMap: any }) => {
    return (
        <div className="w-full">
            <style>
                {`
          .notion-header {
            display: none !important;
          }

          .notion-page {
            padding: 0px !important;
        }
        .notion-title {
            font-size: x-large !important;
            font-weight: bold !important;
          }
        `}
            </style>
            <div className="rounded-full">
                <NotionRendererLib
                    className="text-primary"
                    // components={{
                    // Code: CodeBlock,
                    // }}
                    recordMap={recordMap}
                    fullPage={true}
                    darkMode={true}
                />
            </div>
        </div>
    );
};
