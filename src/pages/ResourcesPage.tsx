import { RoyalBluePage } from "../components/royalBluePage";
import { Table, THead, TH, TBody, TR, TD } from "../components/table";

const RESOURCES = [
    ["/", "Home page. Think of it as a business card", "chrisbenti.com"],
    ["/resume", "Link to my resume.", "chrisbenti.com/resume"],
    ["/find-time", "Schedule a meeting with me.", "chrisbenti.com/find-time"],
    ["/zoom", "Personal Zoom link.", "chrisbenti.com/zoom"],
    [
        "/how-it-works",
        "Documentation on how the site works",
        "chrisbenti.com/how-it-works"
    ],
    ["/cal", "Calendar Page, no details", "chrisbenti.com/cal"],
    ["/send-money", "Send money to me"]
];

export const ResourcesPage = () => (
    <RoyalBluePage>
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
    </RoyalBluePage>
);
