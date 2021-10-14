import { RoyalBluePage } from "../components/royalBluePage";
import { Table, THead, TH, TBody, TR, TD } from "../components/table";

const PROVIDERS = [
    ["Venmo", "https://venmo.com/u/Eric-Gao-4"],
    ["PayPal", "https://paypal.me/yhgoh88?locale.x=en_US"]
];
export const SendMoney = () => {
    return (
        <RoyalBluePage>
            <Table>
                <THead>
                    <TH>Provider</TH>
                    <TH>URL</TH>
                </THead>
                <TBody>
                    {PROVIDERS.map(([provider, link], id) => (
                        <TR key={id}>
                            <TD>{provider}</TD>
                            <TD>
                                <a href={link}>{link}</a>
                            </TD>
                        </TR>
                    ))}
                </TBody>
            </Table>
        </RoyalBluePage>
    );
};
