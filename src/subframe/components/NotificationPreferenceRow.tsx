"use client";
/*
 * Documentation:
 * Notification Preference Row — https://app.subframe.com/library?component=Notification+Preference+Row_0fab5426-b3eb-4759-af2d-3bc2820176b3
 * Checkbox — https://app.subframe.com/library?component=Checkbox_3816e3b5-c48c-499b-b45e-0777c6972523
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Checkbox } from "./Checkbox";

interface NotificationPreferenceRowRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  title?: boolean;
  className?: string;
}

const NotificationPreferenceRowRoot = React.forwardRef<
  HTMLElement,
  NotificationPreferenceRowRootProps
>(function NotificationPreferenceRowRoot(
  {
    label,
    title = false,
    className,
    ...otherProps
  }: NotificationPreferenceRowRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/0fab5426 flex w-full items-start",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {label ? (
        <span
          className={SubframeCore.twClassNames(
            "w-full grow shrink-0 basis-0 text-body font-body text-subtext-color",
            { "text-body-bold font-body-bold text-default-font": title }
          )}
        >
          {label}
        </span>
      ) : null}
      <div className="flex h-full w-16 flex-none items-center justify-center gap-2">
        <Checkbox label="" />
      </div>
      <div className="flex h-full w-16 flex-none items-center justify-center gap-2">
        <Checkbox label="" />
      </div>
      <div className="flex h-full w-16 flex-none items-center justify-center gap-2">
        <Checkbox label="" />
      </div>
    </div>
  );
});

export const NotificationPreferenceRow = NotificationPreferenceRowRoot;
