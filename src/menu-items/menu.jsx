// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Devices, MessageProgramming, User, Setting4 } from 'iconsax-react';

// type

// icons
// icons
const icons = {
  maintenance: MessageProgramming,
  license: Devices,
  user: User,
  setting: Setting4
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const menu = {
  id: 'group-pages-menu',
  title: <FormattedMessage id="item-menu" />,
  type: 'group',
  children: [
    {
      id: 'license-data',
      title: <FormattedMessage id="license-list" />,
      type: 'item',
      url: '/apps/license',
      icon: icons.license,
      target: false
    },
    {
      id: 'user-data',
      title: <FormattedMessage id="user-list" />,
      type: 'item',
      url: '/apps/user/list',
      icon: icons.user,
      target: false
    },
    {
      id: 'setting-data',
      title: <FormattedMessage id="setting-list" />,
      type: 'collapse',
      icon: icons.setting,
      children: [
        {
          id: 'category-setting',
          title: <FormattedMessage id="category-list" />,
          type: 'item',
          url: '/apps/category',
          target: false
        },
        {
          id: 'company-setting',
          title: <FormattedMessage id="company-list" />,
          type: 'item',
          url: '/apps/company',
          target: false
        },
        {
          id: 'manufacture-setting',
          title: <FormattedMessage id="manufacture-list" />,
          type: 'item',
          url: '/apps/manufacture',
          target: false
        },
        {
          id: 'supplier-setting',
          title: <FormattedMessage id="supplier-list" />,
          type: 'item',
          url: '/apps/supplier/supplier-list',
          target: false
        },
        {
          id: 'departement-setting',
          title: <FormattedMessage id="department-list" />,
          type: 'item',
          url: '/apps/departement/departement-list',
          target: false
        },
        {
          id: 'location-setting',
          title: <FormattedMessage id="location-list" />,
          type: 'item',
          url: '/apps/location/location-list',
          target: false
        }
      ]
    }
  ]
};

export default menu;
