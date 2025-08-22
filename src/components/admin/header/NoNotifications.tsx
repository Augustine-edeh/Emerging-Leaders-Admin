import Image from "next/image";

const NoNotifications = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="relative size-[300px]">
        <Image
          src="/icons/notification-menu-empty.svg"
          alt="notification"
          fill
        />
      </div>

      <h5 className="mt-5 mb-1 font-[500]">No Notifications</h5>
      <p>No new alerts at the moment. Check back later.</p>
    </div>
  );
};

export default NoNotifications;
