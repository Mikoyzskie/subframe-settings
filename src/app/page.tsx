"use client";

import React from "react";
import { Alert } from "@/subframe/components/Alert";
import { Button } from "@/subframe/components/Button";

function InstallationSuccessPage() {
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-8 bg-default-background pt-12 pr-6 pb-12 pl-6">
      <img
        className="h-6 flex-none"
        src="https://res.cloudinary.com/subframe/image/upload/v1711417518/shared/fdb8rlpzh1gds6vzsnt0.svg"
      />
      <div className="flex w-full max-w-[576px] flex-col items-center gap-4">
        <div className="flex w-full flex-col items-center gap-4 rounded bg-brand-100 pt-12 pr-12 pb-12 pl-12">
          <span className="text-[40px] font-[600] leading-[40px] text-default-font">
            🥳
          </span>
          <div className="flex flex-col items-center gap-1">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Nice work, you&#39;re all set up!
            </span>
            <span className="text-body font-body text-subtext-color">
              Get started building your own UI below
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-4">
          <Alert
            className="h-full w-full grow shrink-0 basis-0"
            icon="FeatherTerminalSquare"
            title="Components are synced"
            description="Run the CLI anytime you add or edit components"
          />
          <Alert
            className="h-full w-full grow shrink-0 basis-0"
            icon="FeatherClipboardCheck"
            title="Pages are copy & pasted"
            description="Export your code to a .tsx file and start developing"
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center gap-6 bg-default-background pt-6 pr-6 pb-6 pl-6">
            <div className="flex w-full flex-col items-center">
              <div className="flex w-full items-start gap-4">
                <div className="flex h-full flex-col items-center pt-1.5">
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <div className="flex h-full w-0.5 grow shrink-0 basis-0 flex-col items-start gap-2 bg-brand-600" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1 pb-9">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Build your first page
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Choose from our designer-curated templates, or start from
                      scratch.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex h-full flex-col items-center">
                  <div className="flex h-1.5 w-0.5 flex-none flex-col items-start gap-2 bg-brand-600" />
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                  <div className="flex h-full w-0.5 grow shrink-0 basis-0 flex-col items-start gap-2 bg-brand-600" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 pb-9">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Export page code
                    </span>
                    <span className="w-full text-caption font-caption text-subtext-color">
                      Copy &amp; paste generated code to your project, just like
                      you did here.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-start gap-4">
                <div className="flex h-full flex-col items-center">
                  <div className="flex h-1.5 w-0.5 flex-none flex-col items-start gap-2 bg-brand-600" />
                  <div className="flex h-2.5 w-2.5 flex-none flex-col items-start gap-2 rounded-full bg-brand-600" />
                </div>
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4">
                  <div className="flex w-full flex-col items-start gap-1">
                    <span className="text-body-bold font-body-bold text-default-font">
                      Write your business logic
                    </span>
                    <span className="text-caption font-caption text-subtext-color">
                      The code is all yours! Refactor or add custom code to your
                      pixel-perfect UI.
                    </span>
                  </div>
                  <Button icon="FeatherCode">
                    Try adding an onClick handler to me!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallationSuccessPage;