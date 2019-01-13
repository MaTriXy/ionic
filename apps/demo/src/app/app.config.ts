import { MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthEmptyPageComponent, OauthGuard, RuI18n as CoreRuI18n, translate } from '@rucken/core';
import { RuI18n as IonicRuI18n } from '@rucken/ionic';
import { AppRoutes } from './app.routes';
import { RuI18n } from './i18n/ru.i18n';

export const AppLangs = [
  {
    title: translate('Russian'),
    code: 'ru',
    translations: [CoreRuI18n, IonicRuI18n, RuI18n]
  },
  {
    title: translate('English'),
    code: 'en',
    translations: []
  }
];
export const ApplicationName = translate('Rucken Ionic');
export const ApplicationDescription = translate(
  'Core with Admin UI for web and native application maked on Angular7+'
);
export const AuthModalSignInInfoMessage = translate(`<p>Demo users:</p><ul>
<li>user with admin group: admin@admin.com, password: 12345678</li>
<li>user with user group: user1@user1.com, password: 12345678</li>
<li>user with user group: user2@user2.com, password: 12345678</li>
</ul>`);
export const AuthModalSignUpInfoMessage = '';

export function appMetaFactory(translateService: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translateService.get(key),
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: ApplicationName,
    defaults: {
      title: ApplicationName,
      description: ApplicationDescription,
      'og:type': 'website',
      'og:locale': 'en_US',
      'og:locale:alternate': 'en_US,ru_RU'
    }
  });
}

export const OauthProviders = ['facebook', 'google-plus'];
export const OauthModalProviders = [
  {
    name: 'facebook',
    icon: ['fab', 'facebook-square'],
    signInTitle: translate('Sign in with Facebook')
  },
  {
    name: 'google-plus',
    icon: ['fab', 'google-plus'],
    signInTitle: translate('Sign in with Google+')
  }
];
export const OauthRoutes = [
  {
    path: 'auth/facebook',
    component: AuthEmptyPageComponent,
    canActivate: [OauthGuard],
    data: {
      oauth: {
        provider: 'facebook',
        redirectTo: {
          ifSuccess: '/home',
          ifFail: '/home'
        }
      }
    }
  },
  {
    path: 'auth/google-plus',
    component: AuthEmptyPageComponent,
    canActivate: [OauthGuard],
    data: {
      oauth: {
        provider: 'google-plus',
        redirectTo: {
          ifSuccess: '/home',
          ifFail: '/home'
        }
      }
    }
  }
];
export const AllRoutes = [...OauthRoutes, ...AppRoutes];
