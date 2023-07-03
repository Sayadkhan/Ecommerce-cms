import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default SetupPage;
