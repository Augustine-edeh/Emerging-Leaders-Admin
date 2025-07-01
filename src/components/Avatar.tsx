import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src="/icons/profile.jpg"
        alt="profile"
        className="rounded-full object-cover"
      />
      <AvatarFallback>user</AvatarFallback>
    </Avatar>
  );
}
export default UserAvatar;
