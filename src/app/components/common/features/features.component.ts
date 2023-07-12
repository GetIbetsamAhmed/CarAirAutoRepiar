import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

    constructor(
        public router: Router
    ) { }

    featuresContent = [
        {
            image1: `assets/images/features/feature1.jpg`,
            image2: `assets/images/features/feature2.jpg`,
            image3: `assets/images/features/feature3.jpg`,
            title: `Why Chosen Car Aid Repair ? `,
            paragraph: `Car Aid Reapiar - Providing all kind of mechanical & Car maintenance solutions at your Home/ Office. - Basic Tuning - Clutch & Gear works`,
            list: [
                {
                    title: `Service At Door Step`
                },
                {
                    title: `Engine Overhauling`
                },
                {
                    title: `Engine Tuning & Oil Change`
                },
                {
                    title: `Suspension Overhauling`
                },
                {
                    title: `PPF, Wrapping & Detailing`
                },
                {
                    title: `Car Electronics`
                }
            ],
            buttonText: `Book Service Online `,
            buttonLink: `/courses-grid`
        }
    ]
    featuresText = [
        {
            image1: `assets/images/features/feature4.jpg`,
            image2: `assets/images/features/feature5.jpg`,
            title: `Affordable Online Courses And Learning Opportunities`,
            paragraph: `It is a long established fact that a reader will be distracted by the readable contenwhen looking at its layout. The point of using Lorem Ipsum is that it has.`,
            list: [
                {
                    title: `Flexible Classes`
                },
                {
                    title: `Offline Mode`
                },
                {
                    title: `Educator Support`
                },
                {
                    title: `Flexible Learning`
                }
            ],
            buttonText: `View All Stories`,
            buttonLink: `/stories`
        }
    ]

}