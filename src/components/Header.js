const Header = () => {

    const handleSignOut = () => {
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            navigate("/error");
          });
      };
    
    return <div className="absolute bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between" >
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        <div className="flex">
            <img
                className="hidden md:block w-12 h-12"
                alt="usericon"
                src={user?.photoURL}
            />
            <button onClick={handleSignOut} className="font-bold text-white ">
                (Sign Out)
            </button>
        </div>
    </div>
}
export default Header