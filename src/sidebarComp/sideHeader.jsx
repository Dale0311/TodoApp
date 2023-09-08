import profile from "../assets/imgs/profile.jpg"
function SideHeader() {
    return ( 
        <div className="flex flex-col items-center space-y-4">
            <img src={profile} alt="" className="w-28 h-28 rounded"/>
            <div className="text-center text-lg">
                <h1 className="font-semibold">Deyl Cabarle</h1>
                <p>Gojofanboi@jjk.com</p>
            </div>
        </div>
     );
}

export default SideHeader;