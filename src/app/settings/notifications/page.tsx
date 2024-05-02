"use client";

import React from "react";
import { SettingsMenu } from "@/subframe/components/SettingsMenu";
import { Button } from "@/subframe/components/Button";
import { Switch } from "@/subframe/components/Switch";
import { NotificationPreferenceRow } from "@/subframe/components/NotificationPreferenceRow";
import Link from 'next/link'

function NotificationSettings() {
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
                            <SettingsMenu.Item icon="FeatherBellRing" label="Notifications" selected={true} />
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
                            <SettingsMenu.Item icon="FeatherShapes" label="Integrations" />
                        </Link>
                        <Link href={"/settings/team"} className="w-full">
                            <SettingsMenu.Item icon="FeatherUsers" label="Team Members" />
                        </Link>
                    </div>
                </div>
            </SettingsMenu>
            <div className="container max-w-none flex h-full w-full grow shrink-0 basis-0 flex-col items-center gap-6 bg-default-background pt-12 pb-12 shadow-default">
                <div className="flex w-full max-w-[576px] flex-col items-start gap-12">
                    <div className="flex w-full flex-col items-start gap-1">
                        <span className="w-full text-heading-2 font-heading-2 text-default-font">
                            Notifications
                        </span>
                        <span className="w-full text-body font-body text-subtext-color">
                            Select when and how you wish to be notified about calendar
                            activities.
                        </span>
                    </div>
                    <div className="flex w-full items-center gap-4 rounded bg-brand-50 pt-4 pr-4 pb-4 pl-4">
                        <img
                            className="w-8 flex-none"
                            src="https://res.cloudinary.com/subframe/image/upload/v1711417564/shared/zhcrzoah8kty6cup8zud.png"
                        />
                        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                            <span className="text-body-bold font-body-bold text-default-font">
                                You have not connected to Slack
                            </span>
                            <span className="text-caption font-caption text-subtext-color">
                                Get notified in your most important channels
                            </span>
                        </div>
                        <Button variant="brand-primary" size="medium">
                            Connect
                        </Button>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Alerts
                        </span>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Email alert
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Get an email alert for upcoming and changed events. Alerts are
                                    grouped by their proximity.
                                </span>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    SMS digest
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Get a reminder via text for imminent events.
                                </span>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                        <div className="flex w-full items-center gap-4">
                            <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Slack digest
                                </span>
                                <span className="text-caption font-caption text-subtext-color">
                                    Stay informed through Slack for events that are around the
                                    corner.
                                </span>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full items-start">
                            <span className="w-full grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                                Preferences
                            </span>
                            <div className="flex h-full w-16 flex-none items-end justify-center gap-1">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Email
                                </span>
                            </div>
                            <div className="flex h-full w-16 flex-none items-end justify-center gap-1">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    SMS
                                </span>
                            </div>
                            <div className="flex h-full w-16 flex-none items-end justify-center gap-1">
                                <span className="text-body-bold font-body-bold text-default-font">
                                    Slack
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-3">
                            <NotificationPreferenceRow label="General" title={true} />
                            <NotificationPreferenceRow
                                label="You receive an event invitation"
                                title={false}
                            />
                            <NotificationPreferenceRow
                                label="You receive a reminder for an event you're attending"
                                title={false}
                            />
                            <NotificationPreferenceRow
                                label="You receive updated event details like location, time"
                                title={false}
                            />
                        </div>
                        <div className="flex w-full flex-col items-start gap-3">
                            <NotificationPreferenceRow label="Events" title={true} />
                            <NotificationPreferenceRow
                                label="Participant accepted your event"
                                title={false}
                            />
                            <NotificationPreferenceRow
                                label="Participant declined your event"
                                title={false}
                            />
                            <NotificationPreferenceRow
                                label="Participant added a comment to your event"
                                title={false}
                            />
                            <NotificationPreferenceRow
                                label="Participant modifies your event"
                                title={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationSettings;