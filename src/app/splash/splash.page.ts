import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  showSplash = true;
  isFadedIn = false;

  constructor(public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false; // Hide splash screen
      this.isFadedIn = true; // Show main content with fade-in effect
    }, 2000);

    setTimeout(() => {
      this.router.navigateByUrl('/login'); // Redirect to login page
    }, 5000);
  }
}



