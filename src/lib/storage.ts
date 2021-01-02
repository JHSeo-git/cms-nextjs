interface StorageType {
  [key: string]: any;
}

export const keys = {
  sideMenu: '__side_menu__',
};

const st: StorageType = typeof localStorage === 'object' ? localStorage : {};

const storage = {
  set: (key: string, value: any) => {
    st[key] = JSON.stringify(value);
  },
  get: (key: string) => {
    if (!st[key]) return null;
    const value = st[key];
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
  remove: (key: string) => {
    delete st[key];
  },
};

export default storage;
