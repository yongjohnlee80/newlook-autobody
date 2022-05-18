import {
    InformationContainer,
    InfoDeckSectionTitle,
    InfoDeckSectionItem,
    InfoDeckContainer,
} from "./info-deck.styles";

const directoryItems = [
    {
        title: "CONTACT",
        items: [
            "NewLook AutoBody Ltd.",
            "#5- 7788 132 St.",
            "Surrey, British Columbia",
            "V3W 0H5",
            "Phone: (604) 503-5005",
            "Email: newlookab1@gmail.com",
        ],
    },
    {
        title: "HOURS",
        items: [
            "Monday – Friday:",
            "(8:00 AM – 5:00 PM)",
            "Saturday:",
            "(9:00 AM – 5:00 PM)",
        ],
    },
    {
        title: "SERVICES",
        items: [
            "Body Repair",
            "Body Painting",
            "Mechanical Work",
            "Rebuild Frame",
        ],
    },
];

const InformationDeck = () => {
    return (
        <>
            <InformationContainer>
                {directoryItems.map((item) => (
                    <InfoDeckContainer key={item.title}>
                        <InfoDeckSectionTitle>
                            {item.title}
                            <br />
                        </InfoDeckSectionTitle>
                        {item.items.map((entry) => (
                            <InfoDeckSectionItem key={entry}>
                                {entry}
                            </InfoDeckSectionItem>
                        ))}
                    </InfoDeckContainer>
                ))}
                ;
            </InformationContainer>
        </>
    );
};

export default InformationDeck;
