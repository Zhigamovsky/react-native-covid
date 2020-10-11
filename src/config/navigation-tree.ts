import { NavigationTree } from "../types/navigation"

export const NavTree: NavigationTree = {
  Root: {
    AuthorizatinRudiment: {
      title: 'Root',
      path: 'root',
      type: 'stack'
    }
  },
  AuthorizationBranch: {
    LoaderFetus: {
      title: 'Loader',
      path: 'root--loader-screen'
    },
    SwitcherFetus: {
      title: 'Type',
      path: 'root--switcher-screen'
    },
    AuthorizationFetus: {
      title: 'Авторизация',
      path: 'root--authorization-screen'
    },
    D__RegistrationFetus: {
      title: 'Doctor Reg',
      path: 'd--root--registration-screen'
    },
    P__RegistrationFetus: {
      title: 'Patient Reg',
      path: 'p--root--registration-screen'
    },
    D__Drawer: {
      type: 'drawer',
      title: '',
      path: 'd--root--drawer'
    },
    P__Drawer: {
      type: 'drawer',
      title: '',
      path: 'p--root--drawer'
    }
  },
  D__DrawerBranch: {
    GeneralStackRudiment: {
      title: 'Main+',
      path: 'd--drawer--general-stack'
    }
  },
  D__GeneralBranch: {
    GeneralFetus: {
      title: 'Main',
      path: 'd--general-stack--general-screen'
    }
  },
  P__DrawerBranch: {
    GeneralStackRudiment: {
      title: 'Main+',
      path: 'p--drawer--general-stack'
    }
  },
  P__GeneralBranch: {
    GeneralFetus: {
      title: 'Main',
      path: 'p--general-stack--general-screen'
    }
  }
}