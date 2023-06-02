import { create } from 'zustand';

const useGlobalStore = create(set => ({
  showMenu: false,
  handleToggleMenu: () => set(state => ({ showMenu: !state.showMenu }))
}));

export default useGlobalStore;
