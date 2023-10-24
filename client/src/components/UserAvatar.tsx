import { Avatar } from "@mui/material";

interface IUserAvatar {
  picturePath: string;
}

function UserAvatar({ picturePath }: IUserAvatar) {
  return (
    <div>
      <Avatar
        src={`http://localhost:5000/assets/${picturePath}`}
        alt="avatar"
        sx={{ width: 60, height: 60 }}
      />
    </div>
  );
}

export default UserAvatar;
