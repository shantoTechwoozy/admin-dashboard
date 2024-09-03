import LoginForm from "@/components/common/auth/LoginForm";
import LoginFormFooter from "@/components/common/auth/LoginFormFooter";
import Logo from "@/components/common/Logo";

const UserLoginPage = () => {

    return (
        <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4     sm:px-6 lg:px-8">
            <div className="relative py-3 sm:w-115 sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900 rounded-xl shadow-lg">
                    <div className="flex flex-col justify-center items-center h-full select-none">
                        <Logo isDark />
                        <LoginForm title="User Login" />
                        <LoginFormFooter name="User" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLoginPage;
