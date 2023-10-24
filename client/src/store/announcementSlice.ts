import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAnnouncementsStateTypes {
  name: string;
  title: string;
  avatar: string;
  description: string;
}

interface initialStateTypes {
  announcement: IAnnouncementsStateTypes[] | null;
  isAuth: boolean;
  isOpen: boolean;
}

const initialState: initialStateTypes = {
  announcement: null,
  isAuth: false,
  isOpen: false,
};

export const authSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isAuth = true;
    },
    setLogout: (state) => {
      state.isAuth = false;
    },
    setAnnouncements: (
      state,
      action: PayloadAction<IAnnouncementsStateTypes[]>
    ) => {
      if (action.payload) {
        state.announcement = action.payload;
      }
    },
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default authSlice;

export const { setAnnouncements, setLogin, setLogout, toggleMenu } =
  authSlice.actions;
