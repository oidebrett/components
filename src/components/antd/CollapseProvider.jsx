import { memo, ReactNode } from 'react';
import { create } from 'zustand';
import { createContext, createStoreUpdater } from 'zustand-utils';

// ============ State ============ //


// ============ Store ============ //

const createStore = ({ collapsedKeys, onCollapsedKeysChange }) =>
  create((set, get) => ({
    collapsedKeys: collapsedKeys ?? [],
    onCollapsedKeysChange,

    toggleCollapsedKey: (key) => {
      let nextCollapsedKeys = [];
      if (get().collapsedKeys.includes(key)) {
        nextCollapsedKeys = get().collapsedKeys.filter((item) => item !== key);
      } else {
        nextCollapsedKeys = [...get().collapsedKeys, key];
      }

      set({ collapsedKeys: nextCollapsedKeys });
      get().onCollapsedKeysChange?.(nextCollapsedKeys);
    },
  }));

export const { useStore, useStoreApi, Provider } = createContext();

// ============ Provider ============ //

const StoreUpdater = memo(({ collapsedKeys }) => {
  const storeApi = useStoreApi();
  const useUpdater = createStoreUpdater(storeApi);

  useUpdater('collapsedKeys', collapsedKeys);

  return null;
});

const CollapseProvider = memo(
  ({ children, defaultCollapsedKeys, onCollapsedKeysChange, collapsedKeys }) => (
    <>
      <Provider
        createStore={() =>
          createStore({ collapsedKeys: defaultCollapsedKeys, onCollapsedKeysChange })
        }
      >
        {children}
        <StoreUpdater collapsedKeys={collapsedKeys} />
      </Provider>
    </>
  ),
);

export default CollapseProvider