import Image from "next/image";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });
    return (
        <>
            <Image
                className="w-10"
                width={50}
                height={50}
                src={"/logo.webp"}
                alt=""
            ></Image>
            <div>Bangla News 24</div>
            <div>{date}</div>
        </>
    );
};

export default Header;
