import { RoyalBluePage } from "../components/royalBluePage";
import styled from "styled-components";

const Table = styled.table`
    border-collapse: collapse;
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const TR = styled.tr``;
const TH = styled.th`
    border: 1px solid black;
    padding: 0.5em;
`;
const TD = styled.td`
    border: 1px solid black;
    padding: 0.25em 0.5em;
`;

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
    ["/cal", "Calendar Page, no details", "chrisbenti.com/cal"]
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
