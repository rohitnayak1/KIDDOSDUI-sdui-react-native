import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

import campaignData from "../mocks/campaigns.json";

export type CampaignType =
  | "back_to_school"
  | "summer_playhouse"
  | "mystery_gift";

interface CampaignConfig {
  theme: {
    primary: string;
    background: string;
  };

  overlay: {
    type: string;
    animation_url: string;
  };
}

interface CampaignContextType {
  campaign: CampaignType;

  setCampaign: (
    campaign: CampaignType
  ) => void;
}

export const campaigns =
  campaignData as Record<
    CampaignType,
    CampaignConfig
  >;

export const CampaignContext =
  createContext<CampaignContextType>({
    campaign: "back_to_school",

    setCampaign: () => {},
  });

interface Props {
  children: ReactNode;
}

export const CampaignProvider = ({
  children,
}: Props) => {
  const [campaign, setCampaign] =
    useState<CampaignType>(
      "back_to_school"
    );

  return (
    <CampaignContext.Provider
      value={{
        campaign,
        setCampaign,
      }}
    >
      {children}
    </CampaignContext.Provider>
  );
};