import { SearchOutlined } from '@ant-design/icons';

// Mock componentService
export const mockComponentService = {
    getComponents: () => [
      {
        _id: 'component1',
        _name: 'Component 1',
        _category: 'category1.subcategory1',
        _description: 'This is component 1',
        _icon: { react: SearchOutlined },
        getDefaultConfig: () => ({ key: 'value' }),
      },
      {
        _id: 'component2',
        _name: 'Component 2',
        _category: 'category1.subcategory2',
        _description: 'This is component 2',
        _icon: { react: SearchOutlined },
      },
      {
        _id: 'component3',
        _name: 'Component 3',
        _category: 'category2',
        _description: 'This is component 3',
        _icon: { react: SearchOutlined },
      },
    ],
  };
