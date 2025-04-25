export interface MemberData {
  party: string;
  name: string;
  constituency: string;
  isServing: boolean;
  partyColour: string;
  thumbnailUrl: string;
}

export default class MemberCard {
  private party: string;
  private name: string;
  private constituency: string;
  private isServing: boolean;
  private partyColour: string;
  private thumbnailUrl: string;

  constructor({
    party,
    name,
    constituency,
    isServing,
    partyColour,
    thumbnailUrl,
  }: MemberData) {
    this.party = party;
    this.name = name;
    this.constituency = constituency;
    this.isServing = isServing;
    this.partyColour = partyColour;
    this.thumbnailUrl = thumbnailUrl;
  }

  render(): HTMLElement {
    const cardEl = document.createElement("div");
    cardEl.className = "pds__card";

    const imgEl = document.createElement("img");
    imgEl.className = "pds__img";
    imgEl.src = this.thumbnailUrl;
    imgEl.alt = "";
    imgEl.style.borderColor = "#" + this.partyColour;
    cardEl.appendChild(imgEl);

    const contentEl = document.createElement("div");
    contentEl.className = "pds__content";
    cardEl.appendChild(contentEl);

    const partyEl = document.createElement("div");
    partyEl.className = "pds__party";
    partyEl.textContent = this.party;
    contentEl.appendChild(partyEl);

    const nameEl = document.createElement("div");
    nameEl.className = "pds__name";
    nameEl.textContent = this.name;
    contentEl.appendChild(nameEl);

    const constituencyEl = document.createElement("div");
    constituencyEl.className = "pds__constituency";
    constituencyEl.textContent = this.constituency;
    contentEl.appendChild(constituencyEl);

    if (!this.isServing) {
      const noLongerServingEl = document.createElement("div");
      noLongerServingEl.className = "pds__no-longer-serving";
      noLongerServingEl.textContent = "No longer serving";
      contentEl.appendChild(noLongerServingEl);
    }

    return cardEl;
  }
}
