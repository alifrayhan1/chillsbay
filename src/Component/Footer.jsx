import { NavLink } from "react-router";


const Utility =[
    {
        to:"/start",
        item:"Start Here"
    },
    {
        to:"/pay",
        item:"Pay with Crypto"
    },
    {
        to:"/style",
        item:"Style Guide"
    },
    {
        to:"/password",
        item:"Password Protected"
    },
    {
        to:"/error",
        item:"404 Not Found"
    },
    {
        to:"/Licenses",
        item:"Changelog"
    },
];
const menu =[
    {
        to:"/",
        item:"Home",
    },
    {
        to:"/eat",
        item:"Eat",
    },
    {
        to:"/drink",
        item:"Drink",
    },
    {
        to:"/event",
        item:"Events",
    },
    {
        to:"/club",
        item:"Club",
    },
    {
        to:"/recreation",
        item:"Recreation",
    },
    {
        to:"/blog",
        item:"Blog",
    },
    {
        to:"/career",
        item:"Careers",
    },
    {
        to:"/faq",
        item:"FAQs",
    },
];


function Footer() {
  return (
    <>
        <section  className="p-10 lg:p-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                <div className="space-y-5">
                    <h1 className="text-lg font-bold">MENU</h1>
                    <hr className="text-gray-300"/>
                    <div className="space-y-4 grid grid-cols-2">
                        {menu.map((info,index)=>(
                            <NavLink key={index} className="text-gray-400" to={info.to}>{info.item}</NavLink>
                        ))}
                    </div>
                </div>
                <div className="space-y-5">
                <h1 className="text-lg font-bold">UTILITY PAGES</h1><hr className="text-gray-300"/>
                <div className="space-y-4 grid grid-cols-1">
                        {Utility.map((info,index)=>(
                            <NavLink key={index} className="text-gray-400">
                                {info.item} 
                            </NavLink>
                        ))}
                </div>
                </div>
                <div className="space-y-5 bg-blue-50 p-4 rounded-2xl">
                    <img src="Partner.png" alt="" className="bg-blue-500 rounded-2xl p-2"/>
                    <h1 className="text-2xl font-bold">
                    Become a Partner
                    </h1>
                    <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.
                    </p>
                    <button className="bg-blue-500 text-white font-bold w-full rounded-xl py-2">Join Now</button>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer
