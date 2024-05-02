"use client";

import React from "react";
import { SettingsMenu } from "@/subframe/components/SettingsMenu";
import { TextField } from "@/subframe/components/TextField";
import { Button } from "@/subframe/components/Button";
import { Alert } from "@/subframe/components/Alert";
import Link from 'next/link'

function AccountSettings() {
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
                            <SettingsMenu.Item selected={true} label="Account" />
                        </Link>

                        <Link href={'/settings/api-keys'} className="w-full">
                            <SettingsMenu.Item icon="FeatherLock" label="API Keys" />
                        </Link>
                        <Link href={'/settings/notifications'} className="w-full">
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
                            Account
                        </span>
                        <span className="w-full text-body font-body text-subtext-color">
                            Update your profile and personal details here
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Profile
                        </span>
                        <div className="flex w-full items-center gap-4">
                            <TextField
                                className="h-auto w-full grow shrink-0 basis-0"
                                label="First name"
                                helpText=""
                            >
                                <TextField.Input placeholder="Josef" />
                            </TextField>
                            <TextField
                                className="h-auto w-full grow shrink-0 basis-0"
                                label="Last name"
                                helpText=""
                            >
                                <TextField.Input placeholder="Albers" />
                            </TextField>
                        </div>
                        <div className="flex w-full items-center gap-4">
                            <TextField
                                className="h-auto w-full grow shrink-0 basis-0"
                                label="Email"
                                helpText=""
                                icon={null}
                            >
                                <TextField.Input placeholder="josef@subframe.com" />
                            </TextField>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                            <span className="text-body-bold font-body-bold text-default-font">
                                Profile picture
                            </span>
                            <div className="flex items-center gap-4">
                                <img
                                    className="h-16 w-16 flex-none object-cover [clip-path:circle()]"
                                    src="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg"
                                />
                                <div className="flex flex-col items-start gap-2">
                                    <Button variant="neutral-secondary" icon="FeatherUpload">
                                        Upload
                                    </Button>
                                    <span className="text-caption font-caption text-subtext-color">
                                        For best results, upload an image 512x512 or larger.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Password
                        </span>
                        <TextField
                            className="h-auto w-full flex-none"
                            label="Current password"
                            helpText=""
                        >
                            <TextField.Input
                                type="password"
                                placeholder="Enter current password"
                            />
                        </TextField>
                        <TextField
                            className="h-auto w-full flex-none"
                            label="New password"
                            helpText="Your password must have at least 8 characters, include one uppercase letter, and one number."
                        >
                            <TextField.Input
                                type="password"
                                placeholder="Enter new password"
                            />
                        </TextField>
                        <TextField className="h-auto w-full flex-none" label="" helpText="">
                            <TextField.Input
                                type="password"
                                placeholder="Re-type new password"
                            />
                        </TextField>
                        <div className="flex w-full flex-col items-start justify-center gap-6">
                            <Button variant="brand-primary">Change password</Button>
                        </div>
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    <div className="flex w-full flex-col items-start gap-6">
                        <span className="text-heading-3 font-heading-3 text-default-font">
                            Danger zone
                        </span>
                        <Alert
                            variant="error"
                            icon={null}
                            title="Delete account"
                            description="Permanently remove your account and its associated data from our servers. This action is not reversible."
                            actions={
                                <Button variant="destructive-primary">Delete account</Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSettings;