import { GreenPage } from "../components/greenPage";
import { Table, THead, TH, TBody, TR, TD } from "../components/table";

const RESOURCES = [
    ["/", "Home page. Think of it as a business card", "ethangoh.com"],
    ["/resume", "Link to my resume.", "ethangoh.com/resume"],
    ["/find-time", "Schedule a meeting with me.", "ethangoh.com/find-time"],
    ["/zoom", "Personal Zoom link.", "ethangoh.com/zoom"],
    [
        "/how-it-works",
        "Documentation on how the site works",
        "ethangoh.com/how-it-works"
    ],
    ["/cal", "Calendar Page, no details", "ethangoh.com/cal"],
    ["/send-money", "Send money to me", "ethangoh.com/send-money"],
    ["/drop", "Drop Site", "ethangoh.com/drop"]
];

export const ResourcesPage = () => (
    <GreenPage>
        <Table>
            <THead>
                <TH>Path</TH>
                <TH>Description</TH>
                <TH>URL</TH>
            </THead>
            <TBody>
                {RESOURCES.map(([path, desc, full], id) => (
                    <TR>
                        <TD>{path}</TD>
                        <TD>{desc}</TD>
                        <TD>
                            <a href={`https://${full}`}>{full}</a>
                        </TD>
                    </TR>
                ))}
            </TBody>
        </Table>
    </GreenPage>
);
