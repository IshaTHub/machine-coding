import Setting from "./Setting";
import Profile from "./Profile";
import Interest from "./Interest";

import "../style.css";
import { useState } from "react";
export default function TabForm() {
  
  const [activeTab, setActiveTab] = useState(0);


  //for data persistance we are keeping our data in centralised manner
  const [data,setData] = useState({   
    name: "riya",
    age: 24,
    interests: ["reading", "coding"],
    theme: 'dark',
    email: 'riya@gmail.com'
  });

  const tabs = [
    //config driven ui
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Setting",
      component: Setting,
    },
    {
      name: "Interest",
      component: Interest,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div className="heading" key={t.name} onClick={() => setActiveTab(index)}> 
		  {/* added callback to avoid immediate call to setActiveTab as it will not
		   wait for the click event,causing infinite re-renders */}
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />   {/*passing data through props */}
      </div>
    </div>
  );
}
