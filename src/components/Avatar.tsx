import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function AvatarDemo() {
  return (
    <Avatar className="size-12">
      <AvatarImage
        src="/icons/profile.jpg"
        alt="profile"
        className="rounded-full object-cover"
      />
      <AvatarFallback>user</AvatarFallback>
    </Avatar>
  );
}
export default AvatarDemo;
