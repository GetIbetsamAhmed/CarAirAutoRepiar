import { Component } from '@angular/core';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent {

    sectionTitle = [
        {
            subTitle: `Workers`,
            title: `Our Top Rated Mechanics`,
            paragraph: ``
        }
    ]
    instructorBox = [
        {
            image: `assets/images/instructors/instructor1.jpg`,
            name: `Taha Iqbal`,
            designation: `Mechanical Engineer`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/instructor2.jpg`,
            name: `Wahab Saeed`,
            designation: `Electrical Helper`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/instructor3.jpg`,
            name: `Ahsan Yousuf`,
            designation: `Auto pats Repairer`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        },
        {
            image: `assets/images/instructors/instructor4.jpg`,
            name: `Ghufran Rana`,
            designation: `Mechanical Engineer`,
            link: `/instructor-profile`,
            socials: [
                {
                    icon: `bx bxl-facebook`,
                    link: `https://www.facebook.com/`
                },
                {
                    icon: `bx bxl-linkedin`,
                    link: `https://linkedin.com/`
                },
                {
                    icon: `bx bxl-twitter`,
                    link: `https://twitter.com/`
                },
                {
                    icon: `bx bxl-instagram`,
                    link: `https://www.instagram.com/`
                }
            ]
        }
    ]

}