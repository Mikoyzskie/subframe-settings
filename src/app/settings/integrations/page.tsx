"use client";

import React from "react";
import { SettingsMenu } from "@/subframe/components/SettingsMenu";
import { Tooltip } from "@/subframe/components/Tooltip";
import * as SubframeCore from "@subframe/core";
import { Select } from "@/subframe/components/Select";
import { ToggleGroup } from "@/subframe/components/ToggleGroup";
import { Switch } from "@/subframe/components/Switch";
import { Button } from "@/subframe/components/Button";
import Link from 'next/link'

function IntegrationsSettings() {
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
                            <SettingsMenu.Item icon="FeatherCreditCard" label="Billing" />
                        </Link>
                        <Link href={"/settings/integrations"} className="w-full">
                            <SettingsMenu.Item icon="FeatherShapes" label="Integrations" selected={true} />
                        </Link>
                        <Link href={"/settings/team"} className="w-full">
                            <SettingsMenu.Item icon="FeatherUsers" label="Team Members" />
                        </Link>
                    </div>
                </div>
            </SettingsMenu>
            <div className="container max-w-none flex h-full w-full grow shrink-0 basis-0 flex-col items-center gap-12 bg-default-background pt-12 pb-12 shadow-default">
                <div className="flex w-full max-w-[576px] flex-col items-start gap-12">
                    <div className="flex w-full flex-col items-start gap-1">
                        <span className="w-full text-heading-2 font-heading-2 text-default-font">
                            Integrations
                        </span>
                        <span className="text-body font-body text-subtext-color">
                            Configure your third-party integrations
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Configure
                        </span>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-1">
                            <div className="flex w-full grow shrink-0 basis-0 items-center gap-1">
                                <span className="text-body-bold font-body-bold text-neutral-700">
                                    Default calendar to sync
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
                            <Select label="" placeholder="Select a calendar..." helpText="">
                                <Select.Item value="Calendar 1">Calendar 1</Select.Item>
                                <Select.Item value="Calendar 2">Calendar 2</Select.Item>
                                <Select.Item value="Calendar 3">Calendar 3</Select.Item>
                            </Select>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-1">
                            <span className="w-full grow shrink-0 basis-0 text-body-bold font-body-bold text-default-font">
                                Time format
                            </span>
                            <ToggleGroup>
                                <ToggleGroup.Item icon={null} value="092d8f5a">
                                    12h
                                </ToggleGroup.Item>
                                <ToggleGroup.Item icon={null} value="46fc758c">
                                    24h
                                </ToggleGroup.Item>
                            </ToggleGroup>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-2">
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Include non-work events
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Whether or not to sync events outside of your configured work
                                    hours.
                                </span>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Apps
                        </span>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <img
                                className="w-8 flex-none"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417545/shared/ivdoedarvy5h7a7dc8iv.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Gmail
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Get email reminders whenever an event detail changes
                                </span>
                            </div>
                            <Button variant="brand-secondary" size="medium">
                                Disconnect
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <img
                                className="w-8 flex-none"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417563/shared/wny3uasunx9xhlnueyde.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Google Meet
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Automatically add a video call to your calendar events
                                </span>
                            </div>
                            <Button variant="brand-secondary" size="medium">
                                Disconnect
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <img
                                className="w-8 flex-none"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417564/shared/zhcrzoah8kty6cup8zud.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Slack
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Create channels from Slack about upcoming events
                                </span>
                            </div>
                            <Button variant="brand-primary" size="medium">
                                Connect
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <img
                                className="w-8 flex-none"
                                src="https://res.cloudinary.com/subframe/image/upload/v1711417521/shared/q6iiqh7wn6fsc3b4xe0o.png"
                            />
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Zoom
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Automatically add a video call to your calendar events
                                </span>
                            </div>
                            <Button variant="brand-primary" size="medium">
                                Connect
                            </Button>
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntegrationsSettings;