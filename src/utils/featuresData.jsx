import { collaboration, security } from "./svgData";
import anyFile from "../images/icon-any-file.svg";
import accessAnywhere from "../images/icon-access-anywhere.svg";

const featuresData = [
	{
		icon: accessAnywhere,
		headline: "Access your files, anywhere",
		body: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
	},
	{
		pathData: security,
		headline: "Security you can trust",
		body: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
	},
	{
		pathData: collaboration,
		headline: "Real-time collaboration",
		body: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
	},
	{
		icon: anyFile,
		headline: "Store any type of file",
		body: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
	},
];

export default featuresData;
