import { useState } from "react";

export default function ServiceTabs({ onTabChange = () => {} }) {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = [
    {
      id: "frontend",
      label: "Front-End",
      icon: "💻",
    },
    {
      id: "shopify",
      label: "Shopify",
      icon: "🛍️",
    },
    {
      id: "logo",
      label: "Logo Design",
      icon: "🎨",
    },
    {
      id: "video",
      label: "Video Editing",
      icon: "🎬",
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`
            px-6 py-3 rounded-full font-semibold text-sm md:text-base
            transition-all duration-300 ease-out
            ${
              activeTab === tab.id
                ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                : "text-gray-700 bg-white border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg hover:shadow-primary-500/30"
            }
          `}
        >
          <span className="mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  );
}
