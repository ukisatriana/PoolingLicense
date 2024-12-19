import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';
import { SimpleLayoutType } from 'config';

// Dashboard
const DashboardPage = Loadable(lazy(() => import('pages/dashboard/dash-pool')));

// Apps Page
const UserPage = Loadable(lazy(() => import('pages/apps/user/list')));
const LocationListPage = Loadable(lazy(() => import('pages/apps/location/location-list')));
const DepartementListPage = Loadable(lazy(() => import('pages/apps/departement/departement-list')));
const SupplierListPage = Loadable(lazy(() => import('pages/apps/supplier/supplier-list')));

// Maintenance
const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));

const AppCustomerList = Loadable(lazy(() => import('pages/apps/customer/list')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'sample-page',
          element: <SamplePage />
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />
        }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard/dash-pool', //name file route
          element: <DashboardPage />
        }
      ]
    },
    {
      path: '/',
      element: <DashboardLayout />, // Add DashboardLayout wrapper
      children: [
        {
          path: 'apps/customer',
          children: [
            {
              path: 'customer-list', // Change to match menu URL
              element: <AppCustomerList />
            }
          ]
        }
      ]
    },
    {
      path: '/maintenance',
      element: <PagesLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    },
    {
      path: '/apps',
      element: <DashboardLayout />,
      children: [
        {
          path: 'user/list',
          element: <UserPage />
        },
        {
          path: 'location/location-list',
          element: <LocationListPage />
        },
        {
          path: 'departement/departement-list',
          element: <DepartementListPage />
        },
        {
          path: 'supplier/supplier-list',
          element: <SupplierListPage />
        }
      ]
    },
    {
      path: '*',
      element: <MaintenanceError />
    }
  ]
};

export default MainRoutes;
