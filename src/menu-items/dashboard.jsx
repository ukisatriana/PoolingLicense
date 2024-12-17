// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { Graph } from 'iconsax-react';

// type

// icons
const icons = {
  dashboardPage: Graph
};

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const dashboardPage = {
  id: 'dashboardPage',
  title: <FormattedMessage id="dashboard" />,
  type: 'group',
  url: '/dashboard/dash-pool',
  icon: icons.dashboardPage,
  breadcrumbs: false
};

export default dashboardPage;
