import MemberCard from "./member-card";
import { MemberData } from "./member-card";

// Use this to dynamically capture the member Id from the URL.
const memberIdURL = window.location.pathname;

const membersURL = `https://members-api.parliament.uk/api/Members/4321`;

export async function createMemberCardFromAPI(): Promise<void> {
  try {
    const response = await fetch(membersURL);
    const data = await response.json();

    const membershipEndDate =
      data.value.latestHouseMembership.membershipEndDate;

    const constituency = data.value.latestHouseMembership.membershipFrom;

    const name = data.value.nameDisplayAs;

    const party = data.value.latestParty.name;

    const partyColour = data.value.latestParty.backgroundColour;

    const thumbnailUrl = data.value.thumbnailUrl;

    const isServing = membershipEndDate < new Date();

    const cardData: MemberData = {
      party,
      name,
      constituency,
      isServing,
      partyColour,
      thumbnailUrl,
    };

    const card = new MemberCard(cardData);
    document.getElementById("container")?.appendChild(card.render());
  } catch (error) {
    console.error("Failed to fetch card data", error);
  }
}
