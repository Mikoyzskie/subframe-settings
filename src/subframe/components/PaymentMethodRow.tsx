"use client";
/*
 * Documentation:
 * Payment Method Row — https://app.subframe.com/library?component=Payment+Method+Row_ebe0e1ae-b362-4943-a271-a4bde71d1d5c
 * Badge — https://app.subframe.com/library?component=Badge_97bdb082-1124-4dd7-a335-b14b822d0157
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Badge } from "./Badge";
import { DropdownMenu } from "./DropdownMenu";
import { IconButton } from "./IconButton";

interface PaymentMethodRowRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  logo?: string;
  title?: string;
  subtitle?: string;
  isDefault?: boolean;
  className?: string;
}

const PaymentMethodRowRoot = React.forwardRef<
  HTMLElement,
  PaymentMethodRowRootProps
>(function PaymentMethodRowRoot(
  {
    logo,
    title,
    subtitle,
    isDefault = false,
    className,
    ...otherProps
  }: PaymentMethodRowRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "group/ebe0e1ae flex w-full items-center gap-4 rounded bg-neutral-50 pt-4 pr-4 pb-4 pl-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {logo ? <img className="w-12 flex-none" src={logo} /> : null}
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
        <div className="flex items-center gap-2">
          {title ? (
            <span className="text-body-bold font-body-bold text-default-font">
              {title}
            </span>
          ) : null}
          <Badge
            className={SubframeCore.twClassNames("hidden", { flex: isDefault })}
            variant="neutral"
          >
            Default
          </Badge>
        </div>
        {subtitle ? (
          <span className="text-caption font-caption text-subtext-color">
            {subtitle}
          </span>
        ) : null}
      </div>
      <SubframeCore.DropdownMenu.Root>
        <SubframeCore.DropdownMenu.Trigger asChild={true}>
          <IconButton size="medium" icon="FeatherMoreHorizontal" />
        </SubframeCore.DropdownMenu.Trigger>
        <SubframeCore.DropdownMenu.Portal>
          <SubframeCore.DropdownMenu.Content
            side="bottom"
            align="end"
            sideOffset={8}
            asChild={true}
          >
            <DropdownMenu>
              <DropdownMenu.DropdownItem icon="FeatherCheck">
                Make default
              </DropdownMenu.DropdownItem>
              <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                Remove
              </DropdownMenu.DropdownItem>
            </DropdownMenu>
          </SubframeCore.DropdownMenu.Content>
        </SubframeCore.DropdownMenu.Portal>
      </SubframeCore.DropdownMenu.Root>
    </div>
  );
});

export const PaymentMethodRow = PaymentMethodRowRoot;
