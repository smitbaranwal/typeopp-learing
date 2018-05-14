import { Title } from '@angular/platform-browser';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';
import { map } from 'rxjs/operators/map';
import { filter } from 'rxjs/operators/filter';

import {
  // ActionAuthLogout,
  // ActionAuthLogin,
  // selectorAuth,
  routerTransition,
  // Group
} from '@app/core';
import { environment as env } from '@env/environment';

import { selectorSettings } from './settings';
// import { selectorAuth, AuthState, LoginResponseItem, LoginRequest } from './core/auth/auth.reducer';

import { Observable } from 'rxjs/Observable';
import { AppState } from '@app/models/state/app-state';

import { AuthState } from '@app/models/state/auth-state';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginDialogComponent } from '@app/login-dialog/login-dialog.component';
import { selectorAuth } from '@app/core/auth/auth.reducer';


@Component({
  selector: 'tl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticate: boolean;
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;
  loggedin = false;
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  logo = require('../assets/Logo_typeopplæring.png');
  navigation = [
    {link: 'customers', label: 'Customer list', icon: 'supervisor_account', subNavigation: [], subnavDisplay: false},
    {link: 'training', label: 'Training library', icon: 'list', subNavigation: [], subnavDisplay: false},
    {link: 'howto', label: 'How to', icon: 'message', subNavigation: [], subnavDisplay: false},
    {link: 'faq', label: 'FAQ', icon: 'help_outline', subNavigation: [], subnavDisplay: false},
    {link: 'profiles', label: 'Profile page', icon: 'person_outline', subNavigation: [], subnavDisplay: false},
    {link: 'subscriptions', label: 'Subscriptions', icon: 'subscriptions', subNavigation: [{
      link: 'subscriptions/purchase-training', label: 'Purchase Training', icon: 'supervisor_account'
    },
    {
      link: 'subscriptions/allowed-training', label: 'Allowed Training', icon: 'supervisor_account'
    },
    {
      link: 'subscriptions/invoices-list', label: 'Budget', icon: 'supervisor_account'
    }], subnavDisplay: false},
    {link: 'users', label: 'User list', icon: 'account_box', subNavigation: [], subnavDisplay: false},
    {link: 'invoices', label: 'Invoices', icon: 'monetization_on', subNavigation: [], subnavDisplay: false},
    {link: 'certificates', label: 'Certificates', icon: 'settings', subNavigation: [], subnavDisplay: false}
  ];

  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'Settings' }
  ];
  constructor(
   public overlayContainer: OverlayContainer,
   private store: Store<AppState>,
   private router: Router,
   private titleService: Title,
   public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectorSettings)
      .pipe(
        takeUntil(this.unsubscribe$),
        map(({ theme }) => theme.toLowerCase())
      )
      .subscribe(theme => {
        this.componentCssClass = theme;
        const classList = this.overlayContainer.getContainerElement().classList;
        const toRemove = Array.from(classList).filter((item: string) =>
          item.includes('-theme')
        );
        classList.remove(...toRemove);
        classList.add(theme);
      });
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(event => event instanceof ActivationEnd)
      )
      .subscribe((event: ActivationEnd) => {
        let lastChild = event.snapshot;
        while (lastChild.children.length) {
          lastChild = lastChild.children[0];
        }
        const { title } = lastChild.data;
        this.titleService.setTitle(
          title ? `${title} - ${env.appName}` : env.appName
        );
      });
      this.store.select(selectorAuth)
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe((authState: AuthState) => {
        this.loggedin = authState.loggedIn;
      })
  }

  openSignInDialog(): void {

    const dialogRef = this.dialog.open(LoginDialogComponent, {
        // width: '426px',
        // height: '449px',
        panelClass: 'tl-login-dialog',
        data: {title: 'Sign in'}
    })
  }

  handleSignUp() {
    console.log('navigating to signup form');
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLoginClick() {
    // this.store.dispatch(new ActionAuthLogin({apiid: 'getAuthGroup', methodname: 'getIBMAuthorizedGroup'}));
  }

  onLogoutClick() {
   // alert('Logging out...');
   // this.onLoginClick();
    // this.router.navigate(['/welcome']);
    // this.store.dispatch(new ActionAuthLogout());
  }
}
