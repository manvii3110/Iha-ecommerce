import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const iconClass =
	"transition-all h-6 w-6 fill-current text-gray-600 hover:text-gray-800 shadow-none hover:shadow-lg";
const BrandLinks = [
	{
		title: "Github",
		icon: <FaGithub className={iconClass} />,
		link: "https://github.com/Wajid2001/Iha-ecommerce/",
	},
	{
		title: "Facebook",
		icon: <FaFacebook className={iconClass} />,
		link: "https://www.facebook.com/pages/category/Consulting-Agency/Iha-Consulting-Services-PvtLtd-871522229625033/",
	},
	{
		title: "Linked In",
		icon: <FaLinkedin className={iconClass} />,
		link: "https://www.linkedin.com/company/iha_consulting_services_pvt_ltd/mycompany/",
	},
];

export const BrandLinkStrip = () => {
	return (
		<div className='space-x-4 flex'>
			{BrandLinks.map(({ title, icon, link }, i) => (
				<a href={link} title={title} key={i}>
					{icon}
				</a>
			))}
		</div>
	);
};
