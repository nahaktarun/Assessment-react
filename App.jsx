import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LandingPageFrontDeveloperAssignment from "./components/LandingPageFrontDeveloperAssignment";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|landing-page-front-developer-assignment-task)">
          <LandingPageFrontDeveloperAssignment {...landingPageFrontDeveloperAssignmentData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const title1Data = {
    children: "Use across any app and currency",
};

const title2Data = {
    children: "One place for all your Web3 possessions",
    className: "one-place-for-all-your-web3-possessions",
};

const title3Data = {
    children: "Works everywhere",
    className: "works-everywhere",
};

const title4Data = {
    children: "Chat, play games, and host events",
    className: "chat-play-games-and-host-events",
};

const title5Data = {
    children: "Create your own DAO and Tokens in 1 click",
    className: "create-your-own-dao",
};

const landingPageFrontDeveloperAssignmentData = {
    group117: "/img/group-117.png",
    vector24: "/img/vector-24.png",
    group21: "/img/group-21.png",
    contactNow: "Contact Now",
    group: "/img/group.png",
    skyclub: "Skyclub",
    ellipse11: "/img/ellipse-11.png",
    skyWallet: "Sky Wallet",
    group110: "/img/group-110.png",
    theWeb3PlatformBuiltForYou: "THE WEB3 PLATFORM BUILT FOR YOU",
    place: "Drag",
    group112: "/img/group-112.png",
    iconPaper_Plane: "/img/group-114.png",
    maskGroup_2: "/img/mask-group-2.png",
    maskGroup_3: "/img/mask-group-3.png",
    tanukibles: "TANUKIBLES",
    address: "9999 TANUKI NFTS UP FOR GRABS",
    play2EarnGame: " PLAY 2 EARN GAME",
    group122: "/img/group-122.png",
    maskGroup_5: "/img/mask-group-5.png",
    yourEverydayCryptoWallet: "Your Everyday Crypto Wallet",
    simpleAndSecure: "/img/simple-and-secure.png",
    group_39: "/img/group-39.png",
    epPlace: "/img/ep-place.png",
    eosIconsSecureDataOutlined: "/img/eos-icons-secure-data-outlined.png",
    icBaselineWorkOutline: "/img/ic-baseline-work-outline.png",
    onePlaceForAllYourWeb3Possessions: "Exclusive, For You And Your Community",
    createEcoFriendlyNftArtworkAndTicke: "/img/create-eco-friendly-nft-artwork-and-tickets.png",
    offerExclusiveContentAndNftMembersh: "/img/offer-exclusive-content-and-nft-memberships.png",
    vector_198: "/img/vector-198.png",
    vector_199: "/img/vector-199.png",
    group107: "/img/group-107.png",
    iconParkOutlineTicketOne: "/img/icon-park-outline-ticket-one.png",
    bxsOffer: "/img/bxs-offer.png",
    group106: "/img/group-106.png",
    learnMore: "LEARN MORE",
    communitiesAreTheLifebloodOfSociety: "/img/communities-are-the-lifeblood-of-society-.png",
    decentralisedCommunitiesAreGoingToB: "/img/decentralised-communities-are-going-to-be-the-lifeblood-of-the-m.png",
    metaskyAimsToEmpowerInfluencersCrea: "/img/metasky-aims-to-empower-influencers--creators-and-brands-to-buil.png",
    group126: "/img/group-126.png",
    organizationStructure: "Organization Structure",
    community: "Community",
    investors: "Investors",
    coreTeam: "Core Team",
    x60: "/img/60-.png",
    x20: "/img/20-.png",
    x20_2: "/img/20-.png",
    group_85: "/img/group-85@2x.png",
    group_86: "/img/group-86@2x.png",
    title: "WEB3",
    maskGroup_6: "/img/mask-group-6@2x.png",
    image17: "/img/image-17@2x.png",
    ankitArora: "Ankit Arora",
    coFounder: "Co-founder",
    maskGroup_7: "/img/mask-group-7@2x.png",
    image17_2: "/img/image-17@2x.png",
    ankitArora_2: "Ankit Arora",
    worksEverywhere: "Co-founder",
    maskGroup_8: "/img/mask-group-6@2x.png",
    image17_3: "/img/image-17@2x.png",
    coFounder_2: "Ankit Arora",
    useAcrossAnyAppAndCurrency: "Co-founder",
    maskGroup_9: "/img/mask-group-9@2x.png",
    image17_4: "/img/image-17-4@2x.png",
    ankitArora_3: "Ankit Arora",
    coFounder_3: "Co-founder",
    theMetaskyTeam: "The Metasky Team",
    group116: "/img/group-116.png",
    comingSoon_2: "COMING SOON",
    comingSoon: "COMING SOON",
    chatPlayGamesAndHostEvents: "COMING SOON",
    ankitArora_4: "COMING SOON",
    coFounder_4: "COMING SOON",
    createYourOwnDao: "COMING SOON",
    exclusiveForYouAndYourCommunity: "COMING SOON",
    group118: "/img/group-118.png",
    group_88: "/img/group-88.png",
    comingSoon_3: "JOIN THE TEAM",
    comingSoon_5: "BUSINESS INQUIRIES",
    group_89: "/img/group-89@2x.png",
    group_98: "/img/group-98@2x.png",
    group_107: "/img/group-107-1@2x.png",
    group_116: "/img/group-116-1@2x.png",
    title1Props: title1Data,
    title2Props: title2Data,
    title3Props: title3Data,
    title4Props: title4Data,
    title5Props: title5Data,
};

