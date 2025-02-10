import { atom } from 'recoil';

export const authState = atom({
  key: 'authState', // Unique key for this state
  default: {
    isAuthenticated: false,
    profile: null,
  },
});
