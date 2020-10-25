export type NavigationVariants = 
  'stack' | 
  'tabs' | 
  'drawer' | 
  'root'

export interface NavigationFetus {
  title: string,
  path: string
}

export interface NavigationRudiment extends NavigationFetus {
  type?: NavigationVariants,
  child?: NavigationFetus['path']
}

export interface NavigationTree {
  Root: {
    AuthorizatinRudiment: NavigationRudiment
  },
  AuthorizationBranch: {
    LoaderFetus: NavigationFetus,
    SwitcherFetus: NavigationFetus,
    AuthorizationFetus: NavigationFetus,
    D__RegistrationFetus: NavigationFetus,
    P__RegistrationFetus: NavigationFetus,
    D__Drawer: NavigationRudiment,
    P__Drawer: NavigationRudiment
  },
  D__DrawerBranch: {
    GeneralStackRudiment: NavigationRudiment,
  },
  P__DrawerBranch: {
    GeneralStackRudiment: NavigationRudiment,
    QuestionnaireStackRudiment: NavigationRudiment,
    AboutCOVIDFetus: NavigationFetus
  },
  D__GeneralBranch: {
    GeneralFetus: NavigationFetus
  },
  P__GeneralBranch: {
    GeneralFetus: NavigationFetus
  },
  P__QuestionnaireBranch: {
    QuestionnaireFetus: NavigationFetus
  }
}