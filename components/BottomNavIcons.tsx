import React from "react";
import { Image, View } from "react-native";

// Define the icons
const shipmentsIcon = require("../assets/images/shipments.png");
const shipmentsIconColored = require("../assets/images/shipmentsColored.png");
const scanIcon = require("../assets/images/scan.png");
const scanIconColored = require("../assets/images/scanColored.png");
const walletIcon = require("../assets/images/wallet.png");
const walletIconColored = require("../assets/images/walletColored.png");
const profileIcon = require("../assets/images/profile.png");
const profileIconColored = require("../assets/images/profileColored.png");

// Component for rendering an icon
const Icon = ({ source, width, height }) => (
  <Image source={source} style={{ width, height }} />
);

export const ShipmentsIcon = () => (
  <Icon source={shipmentsIcon} width={25} height={25} />
);

export const ShipmentsIconColored = () => (
  <Icon source={shipmentsIconColored} width={25} height={25} />
);

export const ScanIcon = () => <Icon source={scanIcon} width={32} height={25} />;

export const ScanIconColored = () => (
  <Icon source={scanIconColored} width={32} height={25} />
);

export const WalletIcon = () => (
  <Icon source={walletIcon} width={30} height={25} />
);

export const WalletIconColored = () => (
  <Icon source={walletIconColored} width={30} height={25} />
);

export const ProfileIcon = () => (
  <Icon source={profileIcon} width={30} height={30} />
);

export const ProfileIconColored = () => (
  <Icon source={profileIconColored} width={30} height={30} />
);
