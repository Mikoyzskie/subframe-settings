"use client";

import React from "react";
import { SettingsMenu } from "@/subframe/components/SettingsMenu";
import { Tooltip } from "@/subframe/components/Tooltip";
import * as SubframeCore from "@subframe/core";
import { Badge } from "@/subframe/components/Badge";
import { Progress } from "@/subframe/components/Progress";
import { Button } from "@/subframe/components/Button";
import { PaymentMethodRow } from "@/subframe/components/PaymentMethodRow";
import { Alert } from "@/subframe/components/Alert";
import { PricingPlanCard } from "@/subframe/components/PricingPlanCard";
import Link from "next/link"

function BillingSettings() {
    return (
        <div className="flex h-full w-full items-start">
            <SettingsMenu>
                <span className="w-full text-heading-3 font-heading-3 text-default-font">
                    Settings
                </span>
                <div className="flex w-full flex-col items-start gap-2">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                        Personal
                    </span>
                    <div className="flex w-full flex-col items-start gap-1">
                        <Link href={'/settings/account'} className="w-full">
                            <SettingsMenu.Item label="Account" />
                        </Link>

                        <Link href={'/settings/api-keys'} className="w-full">
                            <SettingsMenu.Item icon="FeatherLock" label="API Keys" />
                        </Link>
                        <Link href={'/settings/notifications'} className="w-full" >
                            <SettingsMenu.Item icon="FeatherBellRing" label="Notifications" />
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <span className="w-full text-body-bold font-body-bold text-default-font">
                        Workspace
                    </span>
                    <div className="flex w-full flex-col items-start gap-1">
                        <Link href={"/settings/billing"} className="w-full">
                            <SettingsMenu.Item icon="FeatherCreditCard" label="Billing" selected={true} />
                        </Link>
                        <Link href={"/settings/integrations"} className="w-full">
                            <SettingsMenu.Item icon="FeatherShapes" label="Integrations" />
                        </Link>
                        <Link href={"/settings/team"} className="w-full">
                            <SettingsMenu.Item icon="FeatherUsers" label="Team Members" />
                        </Link>
                    </div>
                </div>
            </SettingsMenu>
            <div className="container max-w-none flex h-full w-full grow shrink-0 basis-0 flex-col items-center gap-6 bg-default-background pt-12 pb-12 shadow-default">
                <div className="flex w-192 flex-col items-start gap-12">
                    <div className="flex w-full flex-col items-start gap-1">
                        <span className="w-full text-heading-2 font-heading-2 text-default-font">
                            Billing
                        </span>
                        <span className="w-full text-body font-body text-subtext-color">
                            See your usage and manage your payment methods, subscription.
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Usage
                        </span>
                        <div className="flex w-full items-start gap-4">
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-center gap-1">
                                <div className="flex items-center gap-1">
                                    <span className="text-body font-body text-subtext-color">
                                        Events booked
                                    </span>
                                    <SubframeCore.Tooltip.Provider>
                                        <SubframeCore.Tooltip.Root>
                                            <SubframeCore.Tooltip.Trigger asChild={true}>
                                                <SubframeCore.Icon
                                                    className="text-body font-body text-neutral-400"
                                                    name="FeatherInfo"
                                                />
                                            </SubframeCore.Tooltip.Trigger>
                                            <SubframeCore.Tooltip.Portal>
                                                <SubframeCore.Tooltip.Content
                                                    side="top"
                                                    align="center"
                                                    sideOffset={4}
                                                    asChild={true}
                                                >
                                                    <Tooltip>Tooltip</Tooltip>
                                                </SubframeCore.Tooltip.Content>
                                            </SubframeCore.Tooltip.Portal>
                                        </SubframeCore.Tooltip.Root>
                                    </SubframeCore.Tooltip.Provider>
                                </div>
                                <span className="text-heading-3 font-heading-3 text-error-700">
                                    100 / 100
                                </span>
                                <Badge variant="error" icon="FeatherAlertTriangle">
                                    Limit reached
                                </Badge>
                            </div>
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                                <div className="flex items-center gap-1">
                                    <span className="text-body font-body text-subtext-color">
                                        Meetings scheduled
                                    </span>
                                    <SubframeCore.Tooltip.Provider>
                                        <SubframeCore.Tooltip.Root>
                                            <SubframeCore.Tooltip.Trigger asChild={true}>
                                                <SubframeCore.Icon
                                                    className="text-body font-body text-neutral-400"
                                                    name="FeatherInfo"
                                                />
                                            </SubframeCore.Tooltip.Trigger>
                                            <SubframeCore.Tooltip.Portal>
                                                <SubframeCore.Tooltip.Content
                                                    side="top"
                                                    align="center"
                                                    sideOffset={4}
                                                    asChild={true}
                                                >
                                                    <Tooltip>Tooltip</Tooltip>
                                                </SubframeCore.Tooltip.Content>
                                            </SubframeCore.Tooltip.Portal>
                                        </SubframeCore.Tooltip.Root>
                                    </SubframeCore.Tooltip.Provider>
                                </div>
                                <span className="text-heading-3 font-heading-3 text-default-font">
                                    42 / 50
                                </span>
                            </div>
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                                <span className="text-body font-body text-subtext-color">
                                    Calendar connections
                                </span>
                                <span className="text-heading-3 font-heading-3 text-default-font">
                                    38 / 100
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2 rounded bg-neutral-50 pt-6 pr-6 pb-6 pl-6">
                            <span className="text-body-bold font-body-bold text-default-font">
                                Seats
                            </span>
                            <Progress value={25} />
                            <div className="flex w-full flex-wrap items-center gap-2">
                                <span className="w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-brand-700">
                                    5 out of 20 seats used
                                </span>
                                <Button
                                    variant="brand-tertiary"
                                    size="medium"
                                    iconRight="FeatherArrowRight"
                                >
                                    Upgrade
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full items-center gap-2">
                            <span className="w-full grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                                Payment
                            </span>
                            <Button size="medium" icon="FeatherPlus">
                                Add
                            </Button>
                        </div>
                        <div className="flex w-full flex-col items-start gap-4">
                            <PaymentMethodRow
                                logo="https://res.cloudinary.com/subframe/image/upload/v1711417566/shared/hktgej31fyvtnv8z0xtr.png"
                                title="Mastercard ••••0213"
                                subtitle="Expires 09/26"
                                isDefault={true}
                            />
                            <PaymentMethodRow
                                logo="https://res.cloudinary.com/subframe/image/upload/v1711417566/shared/cnc9wdevqyfh9a708vyc.png"
                                title="Visa ••••9483"
                                subtitle="Expires 11/25"
                            />
                        </div>
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    <div className="flex h-full w-full grow shrink-0 basis-0 flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Subscription
                        </span>
                        <Alert
                            variant="brand"
                            title="You have 21 days left in your Basic plan trial."
                            description="To avoid any disruptions to your current workflow, upgrade your plan below."
                        />
                        <div className="flex w-full items-start gap-4">
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                                <span className="text-body font-body text-subtext-color">
                                    Start date
                                </span>
                                <span className="text-heading-3 font-heading-3 text-default-font">
                                    March 22, 2023
                                </span>
                            </div>
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                                <span className="text-body font-body text-subtext-color">
                                    Next payment
                                </span>
                                <span className="text-heading-3 font-heading-3 text-default-font">
                                    Oct 22, 2023
                                </span>
                            </div>
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-1">
                                <span className="text-body font-body text-subtext-color">
                                    Billed
                                </span>
                                <span className="text-heading-3 font-heading-3 text-default-font">
                                    Monthly
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full items-start gap-4">
                            <PricingPlanCard
                                title="Free"
                                amount="$0"
                                label="per month"
                                description="The basics to get you started. Free forever."
                                actions={
                                    <Button
                                        className="h-10 w-full flex-none"
                                        variant="brand-secondary"
                                        size="large"
                                        icon={null}
                                    >
                                        Downgrade
                                    </Button>
                                }
                            >
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    5 team members
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    20 event bookings
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    10 meetings scheduled
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    Event notifications
                                </PricingPlanCard.FeatureItem>
                            </PricingPlanCard>
                            <PricingPlanCard
                                title="Professional"
                                amount="$29"
                                label="per month"
                                description="For small teams with calendar needs."
                                actions={
                                    <Button
                                        className="h-10 w-full flex-none"
                                        variant="neutral-secondary"
                                        size="large"
                                        icon="FeatherCheck"
                                    >
                                        Current plan
                                    </Button>
                                }
                            >
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    20 team members
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    100 event bookings
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    50 meetings scheduled
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    Premium support
                                </PricingPlanCard.FeatureItem>
                            </PricingPlanCard>
                            <PricingPlanCard
                                title="Enterprise"
                                amount="Contact us"
                                label=""
                                description="For larger teams or custom plans."
                                actions={
                                    <Button
                                        className="h-10 w-full flex-none"
                                        variant="brand-primary"
                                        size="large"
                                        icon={null}
                                    >
                                        Contact us
                                    </Button>
                                }
                            >
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    SSO &amp; user provisioning
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    SOC2 compliance
                                </PricingPlanCard.FeatureItem>
                                <PricingPlanCard.FeatureItem className="h-auto w-full flex-none">
                                    24/7 support
                                </PricingPlanCard.FeatureItem>
                            </PricingPlanCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingSettings;