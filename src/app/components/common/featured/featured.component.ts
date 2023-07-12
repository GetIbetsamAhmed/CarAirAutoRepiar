import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-featured',
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent {

    constructor(
        public router: Router
    ) { }

    featuredBox = [
        {
            icon: `assets/images/featured/icon1.gif`,
            title: `Door Step Service`
        },
        {
            icon: `assets/images/featured/icon2.gif`,
            title: `Car Repairing`
        },
        {
            icon: `assets/images/featured/icon3.gif`,
            title: `Auto Part shop`
        },
        {
            icon: `assets/images/featured/icon4.gif`,
            title: `Car Electronics`
        }
    ]

}