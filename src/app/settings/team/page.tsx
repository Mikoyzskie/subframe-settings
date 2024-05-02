"use client";

import React from "react";
import { SettingsMenu } from "@/subframe/components/SettingsMenu";
import { TextField } from "@/subframe/components/TextField";
import { Select } from "@/subframe/components/Select";
import { Button } from "@/subframe/components/Button";
import * as SubframeCore from "@subframe/core";
import { CopyToClipboardField } from "@/subframe/components/CopyToClipboardField";
import { Tabs } from "@/subframe/components/Tabs";
import { Avatar } from "@/subframe/components/Avatar";
import { Table } from "@/subframe/components/Table";
import { Badge } from "@/subframe/components/Badge";
import { DropdownMenu } from "@/subframe/components/DropdownMenu";
import { IconButton } from "@/subframe/components/IconButton";
import Link from 'next/link'

function TeamMembersSettings() {
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
                            <SettingsMenu.Item icon="FeatherShapes" label="Integrations" />
                        </Link>
                        <Link href={"/settings/team"} className="w-full">
                            <SettingsMenu.Item icon="FeatherUsers" label="Team Members" selected={true} />
                        </Link>
                    </div>
                </div>
            </SettingsMenu>
            <div className="container max-w-none flex h-full w-full grow shrink-0 basis-0 flex-col items-center gap-6 bg-default-background pt-12 pb-12 shadow-default">
                <div className="flex w-144 flex-col items-start gap-12">
                    <div className="flex w-full flex-col items-start gap-1">
                        <span className="w-full text-heading-2 font-heading-2 text-default-font">
                            Team members
                        </span>
                        <span className="w-full text-body font-body text-subtext-color">
                            Invite and manage teammates in your workspace.
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start gap-8 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
                        <div className="flex w-full flex-col items-start gap-4">
                            <span className="text-heading-3 font-heading-3 text-default-font">
                                Invite teammates
                            </span>
                            <div className="flex w-full flex-col items-start gap-4">
                                <div className="flex w-full items-end gap-2">
                                    <TextField
                                        className="h-auto w-full grow shrink-0 basis-0"
                                        label=""
                                        helpText=""
                                        icon="FeatherMail"
                                    >
                                        <TextField.Input placeholder="Email" />
                                    </TextField>
                                    <Select label="" placeholder="Role" helpText="">
                                        <Select.Item value="Member">Member</Select.Item>
                                        <Select.Item value="Admin">Admin</Select.Item>
                                        <Select.Item value="Owner">Owner</Select.Item>
                                    </Select>
                                </div>
                                <div className="flex w-full items-end gap-2">
                                    <TextField
                                        className="h-auto w-full grow shrink-0 basis-0"
                                        label=""
                                        helpText=""
                                        icon="FeatherMail"
                                    >
                                        <TextField.Input placeholder="Email" />
                                    </TextField>
                                    <Select label="" placeholder="Role" helpText="">
                                        <Select.Item value="Member">Member</Select.Item>
                                        <Select.Item value="Admin">Admin</Select.Item>
                                        <Select.Item value="Owner">Owner</Select.Item>
                                    </Select>
                                </div>
                                <div className="flex w-full items-end gap-2">
                                    <TextField
                                        className="h-auto w-full grow shrink-0 basis-0"
                                        label=""
                                        helpText=""
                                        icon="FeatherMail"
                                    >
                                        <TextField.Input placeholder="Email" />
                                    </TextField>
                                    <Select label="" placeholder="Role" helpText="">
                                        <Select.Item value="Member">Member</Select.Item>
                                        <Select.Item value="Admin">Admin</Select.Item>
                                        <Select.Item value="Owner">Owner</Select.Item>
                                    </Select>
                                </div>
                                <div className="flex w-full items-center justify-between">
                                    <Button
                                        variant="brand-tertiary"
                                        size="medium"
                                        icon="FeatherPlus"
                                    >
                                        Add email
                                    </Button>
                                    <Button size="medium">Invite</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2">
                            <div className="flex items-center gap-1">
                                <SubframeCore.Icon
                                    className="text-body font-body text-subtext-color"
                                    name="FeatherLink"
                                />
                                <span className="text-body font-body text-subtext-color">
                                    or share this link
                                </span>
                            </div>
                            <CopyToClipboardField
                                className="h-auto w-full flex-none"
                                text="https://myapp.subframe.com/code=workspace-id-123"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-start gap-4">
                        <Tabs>
                            <Tabs.Item active={true}>All</Tabs.Item>
                            <Tabs.Item>Invited</Tabs.Item>
                        </Tabs>
                        <Table
                            header={
                                <Table.HeaderRow>
                                    <Table.HeaderCell>Team member</Table.HeaderCell>
                                    <Table.HeaderCell>Role</Table.HeaderCell>
                                </Table.HeaderRow>
                            }
                        >
                            <Table.Row>
                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <Avatar size="small">I</Avatar>
                                        <span className="text-body-bold font-body-bold text-default-font">
                                            irvin@subframe.com
                                        </span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Badge variant="neutral">Admin</Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
                                        <SubframeCore.DropdownMenu.Root>
                                            <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                                <IconButton
                                                    size="medium"
                                                    icon="FeatherMoreHorizontal"
                                                />
                                            </SubframeCore.DropdownMenu.Trigger>
                                            <SubframeCore.DropdownMenu.Portal>
                                                <SubframeCore.DropdownMenu.Content
                                                    side="bottom"
                                                    align="end"
                                                    sideOffset={8}
                                                    asChild={true}
                                                >
                                                    <DropdownMenu>
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
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <Avatar size="small">A</Avatar>
                                        <span className="text-body-bold font-body-bold text-default-font">
                                            adam@subframe.com
                                        </span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Badge variant="neutral">Member</Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
                                        <SubframeCore.DropdownMenu.Root>
                                            <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                                <IconButton
                                                    size="medium"
                                                    icon="FeatherMoreHorizontal"
                                                />
                                            </SubframeCore.DropdownMenu.Trigger>
                                            <SubframeCore.DropdownMenu.Portal>
                                                <SubframeCore.DropdownMenu.Content
                                                    side="bottom"
                                                    align="end"
                                                    sideOffset={8}
                                                    asChild={true}
                                                >
                                                    <DropdownMenu>
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
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <div className="flex items-center gap-2">
                                        <Avatar size="small">F</Avatar>
                                        <span className="text-body-bold font-body-bold text-default-font">
                                            filip@subframe.com
                                        </span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>
                                    <Badge variant="neutral">Member</Badge>
                                </Table.Cell>
                                <Table.Cell>
                                    <div className="flex w-full grow shrink-0 basis-0 items-center justify-end">
                                        <SubframeCore.DropdownMenu.Root>
                                            <SubframeCore.DropdownMenu.Trigger asChild={true}>
                                                <IconButton
                                                    size="medium"
                                                    icon="FeatherMoreHorizontal"
                                                />
                                            </SubframeCore.DropdownMenu.Trigger>
                                            <SubframeCore.DropdownMenu.Portal>
                                                <SubframeCore.DropdownMenu.Content
                                                    side="bottom"
                                                    align="end"
                                                    sideOffset={8}
                                                    asChild={true}
                                                >
                                                    <DropdownMenu>
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
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamMembersSettings;