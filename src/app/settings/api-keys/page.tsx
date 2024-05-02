"use client";

import React from "react";
import { SettingsMenu } from "@/subframe/components/SettingsMenu";
import { Button } from "@/subframe/components/Button";
import { Tabs } from "@/subframe/components/Tabs";
import { CopyToClipboardField } from "@/subframe/components/CopyToClipboardField";
import { Tooltip } from "@/subframe/components/Tooltip";
import * as SubframeCore from "@subframe/core";
import { Alert } from "@/subframe/components/Alert";
import { Table } from "@/subframe/components/Table";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { IconButton } from "@/subframe/components/IconButton";
import Link from 'next/link'

function ApiKeySettings() {
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
                            <SettingsMenu.Item icon="FeatherLock" label="API Keys" selected={true} />
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
                <div className="flex w-144 flex-col items-start gap-12">
                    <div className="flex w-full flex-col items-start gap-1">
                        <span className="w-full text-heading-2 font-heading-2 text-default-font">
                            API keys
                        </span>
                        <span className="w-full text-body font-body text-subtext-color">
                            Generate, manage, and revoke your API access keys.
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full items-center gap-2">
                            <span className="w-full grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                                Client
                            </span>
                            <Button
                                variant="neutral-secondary"
                                size="medium"
                                icon="FeatherExternalLink"
                            >
                                Go to docs
                            </Button>
                        </div>
                        <Tabs>
                            <Tabs.Item active={true}>Production</Tabs.Item>
                            <Tabs.Item>Staging</Tabs.Item>
                        </Tabs>
                        <div className="flex w-full flex-col items-start gap-6">
                            <div className="flex w-full flex-col items-start gap-1">
                                <span className="text-[14px] font-[600] leading-[20px] text-default-font">
                                    Client ID
                                </span>
                                <CopyToClipboardField
                                    className="h-auto w-full flex-none"
                                    text="d34bad52-8595-4a1e-aa70-656d27dfd65f"
                                />
                            </div>
                            <div className="flex w-full flex-col items-start gap-1">
                                <div className="flex items-center gap-1">
                                    <span className="text-[14px] font-[600] leading-[20px] text-default-font">
                                        Client Secret
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
                                <CopyToClipboardField
                                    className="h-auto w-full flex-none"
                                    text="••••••••••"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-border" />
                    <div className="flex w-full flex-col items-start gap-6">
                        <div className="flex w-full items-center gap-2">
                            <span className="w-full grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
                                API keys
                            </span>
                            <Button variant="brand-primary" size="medium" icon="FeatherPlus">
                                Create key
                            </Button>
                        </div>
                        <Alert
                            variant="brand"
                            icon="FeatherLock"
                            title="Your API keys are highly sensitive and secret"
                            description="Never share your API keys with others or expose them in client-side code"
                        />
                        <Table
                            header={
                                <Table.HeaderRow>
                                    <Table.HeaderCell>Key</Table.HeaderCell>
                                    <Table.HeaderCell>Created</Table.HeaderCell>
                                    <Table.HeaderCell>Last used</Table.HeaderCell>
                                    <Table.HeaderCell />
                                </Table.HeaderRow>
                            }
                        >
                            <Table.Row>
                                <Table.Cell>
                                    <CopyToClipboardField
                                        className="h-auto w-full grow shrink-0 basis-0"
                                        text="sk-••••••••••ICHD"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-body font-body text-neutral-500">
                                        Feb 28, 2023
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-body font-body text-neutral-500">
                                        Mar 16, 2023
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
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
                                                <DropdownMenu className="h-auto w-auto min-w-[128px] flex-none">
                                                    <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                                        Edit
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <CopyToClipboardField
                                        className="h-auto w-full grow shrink-0 basis-0"
                                        text="sk-••••••••••yzUA"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-body font-body text-neutral-500">
                                        Feb 21, 2023
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-body font-body text-neutral-500">
                                        Sept 3, 2023
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
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
                                                <DropdownMenu className="h-auto w-auto min-w-[128px] flex-none">
                                                    <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                                        Edit
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <CopyToClipboardField
                                        className="h-auto w-full grow shrink-0 basis-0"
                                        text="sk-••••••••••pFdM"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-body font-body text-neutral-500">
                                        Jan 11, 2023
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
                                    <span className="text-body font-body text-neutral-500">
                                        Never
                                    </span>
                                </Table.Cell>
                                <Table.Cell>
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
                                                <DropdownMenu className="h-auto w-auto min-w-[128px] flex-none">
                                                    <DropdownMenu.DropdownItem icon="FeatherEdit2">
                                                        Edit
                                                    </DropdownMenu.DropdownItem>
                                                    <DropdownMenu.DropdownItem icon="FeatherMinusCircle">
                                                        Remove
                                                    </DropdownMenu.DropdownItem>
                                                </DropdownMenu>
                                            </SubframeCore.DropdownMenu.Content>
                                        </SubframeCore.DropdownMenu.Portal>
                                    </SubframeCore.DropdownMenu.Root>
                                </Table.Cell>
                            </Table.Row>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApiKeySettings;