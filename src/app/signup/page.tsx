import { IconAuthentication } from "@/icons";
import Link from "next/link";
interface LoginOption {
    label: string;
    icon: React.ElementType;
    bgColor: string;
}

const LoginOptions: LoginOption[] = [
    { label: "User", icon: IconAuthentication.user, bgColor: "bg-blue-500" },
    { label: "Agent", icon: IconAuthentication.agent, bgColor: "bg-green-500" },
];

const Signup: React.FC = () => {
    return (
        <div className="p-6 lg:p-12 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
                {LoginOptions.map((option) => {
                    const loginHref = "/signup/" + option.label.toLowerCase();

                    return (
                        <Link href={loginHref} key={option.label} passHref>
                            <div
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer"
                            >
                                <div className={`flex items-center justify-center h-32 ${option.bgColor} text-white text-3xl`}>
                                    <option.icon className="w-12 h-12" />
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-2">Register as {option.label}</h3>
                                    <p className="text-gray-600">
                                        {option.label === "User"
                                            ? "Signup user features and manage your profile."
                                            : "Signup agent features and manage your listings."}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Signup;
